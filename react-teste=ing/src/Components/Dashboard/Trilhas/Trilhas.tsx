import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from '../../../AuthContext';

interface Roadmap {
  id: number;
  title: string;
  description: string;
  imagePath: string;
}

interface Step {
  id: number;
  description: string;
  imagePath: string;
  roadmapsId: number[];
}

interface UserStep {
  id: number;
  userId: number;
  stepId: number;
  status: number;
}

const Trilhas: React.FC<{ roadmapId: number }> = ({ roadmapId }) => {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [userSteps, setUserSteps] = useState<UserStep[]>([]);
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.get(`/api/roadmaps/${roadmapId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'accept': '*/*'
          }
        });
        setRoadmap(response.data);
      } catch (error) {
        console.error('Erro ao buscar roadmap:', error);
      }
    };

    const fetchSteps = async () => {
      try {
        const response = await axios.get('/api/steps', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'accept': '*/*'
          }
        });
        const roadmapSteps = response.data.filter((step: Step) => step.roadmapsId.includes(roadmapId));
        setSteps(roadmapSteps);
      } catch (error) {
        console.error('Erro ao buscar passos:', error);
      }
    };

    const fetchUserSteps = async () => {
      try {
        const response = await axios.get(`/api/users/steps/user/${user?.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'accept': '*/*'
          }//e mostra o status 2 para terminar 
        });
        setUserSteps(response.data);
      } catch (error) {
        console.error('Erro ao buscar passos do usuário:', error);
      }
    };

    fetchRoadmap();
    fetchSteps();
    fetchUserSteps();
  }, [roadmapId, token, user?.id]);

  const handleStepChange = async (stepId: number, isChecked: boolean) => {
    try {
      if (isChecked) {
        await axios.post('/api/users/steps/end', { id: stepId }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
      } else {
        await axios.post('/api/users/steps/start', { userId: user?.id, stepId }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
      }
      const updatedUserSteps = await axios.get(`/api/users/steps/user/${user?.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'accept': '*/*'
        }
      });
      setUserSteps(updatedUserSteps.data);
    } catch (error) {
      console.error('Erro ao atualizar passo:', error);
    }
  };

  const isStepCompleted = (stepId: number) => {
    return userSteps.some(userStep => userStep.stepId === stepId && userStep.status === 2);
  };

  if (!roadmap) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{roadmap.title}</h1>
      <p>{roadmap.description}</p>
      <img src={roadmap.imagePath} alt={roadmap.title} />
      <h2>Passos</h2>
      <ul>
        {steps.map(step => (
          <li key={step.id}>
            <p>{step.description}</p>
            {step.imagePath && <img src={step.imagePath} alt={`Step ${step.id}`} />}
            <label>
              <input
                type="checkbox"
                checked={isStepCompleted(step.id)}
                onChange={(e) => handleStepChange(step.id, e.target.checked)}
              />
              Completo
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trilhas;