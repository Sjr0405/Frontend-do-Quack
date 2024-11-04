import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

// Validação com Yup para o formulário de login
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

interface LoginFormInputs {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { handleSubmit, control, formState: { errors }, setError, clearErrors } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const { login } = useAuth(); // Obtém a função de login do AuthContext
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      // Realiza o login e armazena o token e email no contexto
      await login(data.email, data.password);

      // Exibe mensagem de sucesso e redireciona para a página Home
      Swal.fire('Sucesso!', 'Login realizado com sucesso.', 'success').then(() => {
        navigate('/home'); // Certifique-se de que a rota '/home' está configurada
      });
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      Swal.fire('Erro', 'Houve um problema ao tentar fazer login.', 'error');
      setError("email", { type: "manual", message: "Email ou senha incorretos" });
      setError("password", { type: "manual", message: "Email ou senha incorretos" });
    }
  };

  return {
    handleSubmit,
    control,
    errors,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    clearErrors,
  };
};
