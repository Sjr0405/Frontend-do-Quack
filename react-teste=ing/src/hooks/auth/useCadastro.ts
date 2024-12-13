import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';

const schema = yup.object().shape({
  name: yup.string().required("Nome completo é obrigatório"),
  surname: yup.string().required("Sobrenome é obrigatório"), 
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório").min(14, "Telefone inválido"),
  cpf: yup.string().required("CPF é obrigatório").min(14, "CPF inválido"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").matches(/[@$!%*?&#^()_+[\]{}|;:'",.<>]/, "A senha deve conter pelo menos um caractere especial").matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula").required("Senha é obrigatória"),
  bornAt: yup.string().required("Data de nascimento é obrigatória"),
});

interface FormData {
  name: string;
  surname: string; 
  email: string;
  phone: string;
  cpf: string;
  password: string;
  bornAt: string;
  imagePath?: string;
}

export const useCadastro = () => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const payload = {
      name: data.name,
      surname: data.surname,
      phone: data.phone.replace(/\D/g, ''),
      email: data.email,
      password: data.password,
      cpf: data.cpf.replace(/\D/g, ''),
      bornDate: data.bornAt,
      imagePath: data.imagePath || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5c_3r5AgGxKeAmOumAg8BC-oqLRMyvns6g&s"
    };

    console.log("Dados enviados:", payload);

    try {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log("Resposta do servidor:", response);
      console.log("Cabeçalhos da requisição:", response.headers);

      if (response.ok) {
        const responseData = await response.json();
        console.log("Dados da resposta:", responseData);
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
  };
};