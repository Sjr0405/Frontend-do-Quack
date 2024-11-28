import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';

const schema = yup.object().shape({
  name: yup.string().required("Nome completo é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  confirmemail: yup.string().oneOf([yup.ref("email"), undefined], "Os emails devem ser iguais").required("Email é obrigatório"),
  username: yup.string().required("Nome de usuário é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório").min(14, "Telefone inválido"),
  cpf: yup.string().required("CPF é obrigatório").min(14, "CPF inválido"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").matches(/[@$!%*?&#^()_+[\]{}|;:'",.<>]/, "A senha deve conter pelo menos um caractere especial").matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula").required("Senha é obrigatória"),
  confirmpassword: yup.string().oneOf([yup.ref("password"), undefined], "As senhas devem ser iguais").required("Senha é obrigatória"),
  bornAt: yup.string().required("Data de nascimento é obrigatória"),
  photo: yup.array().of(yup.mixed().nullable()).nullable() as yup.Schema<File[] | undefined>,
});

interface FormData {
  name: string;
  email: string;
  confirmemail: string;
  username: string;
  phone: string;
  cpf: string;
  password: string;
  confirmpassword: string;
  bornAt: string;
  photo?: File[] | undefined;
}

export const useCadastro = () => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("phone", data.phone.replace(/\D/g, ''));
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("cpf", data.cpf.replace(/\D/g, '')); 
    formData.append("bornAt", data.bornAt);

    if (croppedImageUrl) {
      const croppedImageBlob = await fetch(croppedImageUrl)
        .then((r) => r.blob())
        .catch((error) => {
          console.error("Erro ao obter blob da imagem cortada:", error);
        });
      if (croppedImageBlob) {
        formData.append("photo", croppedImageBlob, "cropped-image.jpg");
      }
    } else if (data.photo && data.photo[0]) {
      formData.append("photo", data.photo[0], "profile-image.jpg");
    }

    console.log("Dados enviados:", Object.fromEntries(formData.entries()));

    try {
      const response = await fetch('auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          username: data.username,
          phone: data.phone.replace(/\D/g, ''),
          email: data.email,
          password: data.password,
          cpf: data.cpf.replace(/\D/g, ''),
          bornAt: data.bornAt,
          imagePath: croppedImageUrl || (data.photo && data.photo[0] ? URL.createObjectURL(data.photo[0]) : "")
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      console.log("Resposta do servidor:", response);
      console.log("Cabeçalhos da requisição:", response.headers);

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "Cadastro realizado com sucesso.",
        }).then(() => navigate("/Login"));
        reset();
      } else {
        const errorData = await response.json().catch(() => null);
        console.error("Erro ao cadastrar o usuário", errorData);
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: errorData?.message || "Algo deu errado!",
          footer: "erro: " + (errorData?.message || "Erro desconhecido"),
        });
      }
    } catch (error: unknown) {
      console.error("Erro na requisição", error);
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível realizar o cadastro.",
        footer: "erro: " + (error as Error).message,
      });
    }
  };

  return {
    handleSubmit,
    control,
    errors,
    onSubmit,
    setCroppedImageUrl,
  };
};