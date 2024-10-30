export const calculateProgress = (isChecked: boolean[]): number => {
    return (isChecked.filter(Boolean).length / isChecked.length) * 100;
  };
  
  export const saveUserProgress = async (userId: string, progress: any) => {
    try {
      const response = await fetch('http://localhost:5180/data/saveUserProgress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, progress })
      });
      const data = await response.json();
      console.log('Progresso do usuário salvo:', data);
    } catch (error) {
      console.error('Erro ao salvar progresso do usuário:', error);
    }
  };