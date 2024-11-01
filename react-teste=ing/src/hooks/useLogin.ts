import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(8, "A deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

export const useLogin = () => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const { login, fetchUserProfile } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<{ email: string; password: string }> = async (data) => {
    try {
      await login(data.email, data.password);
      await fetchUserProfile();
      Swal.fire('Sucesso!', 'Login realizado com sucesso.', 'success').then(() => {
        navigate('/home');
      });
    } catch {
      Swal.fire('Erro', 'Houve um problema ao tentar fazer login.', 'error');
    }
    reset();
  };

  return {
    handleSubmit,
    control,
    errors,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
  };
};