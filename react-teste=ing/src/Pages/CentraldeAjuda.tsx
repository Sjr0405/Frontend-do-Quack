import { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Importação do ícone de seta
import emailjs from 'emailjs-com'; // Importação do emailjs
import Swal from 'sweetalert2'; // Importação do SweetAlert

const CentraldeAjuda = () => {
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipoProblema, setTipoProblema] = useState('');
  const navigate = useNavigate();

  const handleEnviarClick = () => {
    const templateParams = {
      from_name: 'elisson nadson souza marques', // Nome do remetente
      from_email: email, // Email do remetente
      mensagem: `Assunto: ${assunto}\nDescrição: ${descricao}\nTipo de Problema: ${tipoProblema}`, // Mensagem
    };

    emailjs.send('service_ve3n7wj', 'template_3rmssol', templateParams, 'wcbpjHYFBGLZ0mnjz')
      .then((response) => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Seu e-mail foi enviado com sucesso.',
        });
      }, (err) => {
        console.error('Falha ao enviar o email:', err);
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Falha ao enviar o e-mail. Tente novamente mais tarde.',
        });
      });
  };

  const handleVoltarClick = () => {
    navigate('/home', { state: { section: 'Configuracoes' } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f9fc',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 800,
          padding: 2,
        }}
      >
        {/* Remova o componente Quack() e a imagem */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 800,
          padding: 2,
          position: 'relative', // Adiciona posição relativa para o container
        }}
      >
        <Button
          onClick={handleVoltarClick}
          sx={{
            minWidth: 'auto',
            marginRight: 2,
            color: '#4834d4',
            position: 'absolute', // Posiciona o botão de volta à esquerda
            left: 0,
          }}
        >
          <ArrowBackIcon />
        </Button>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: 'Montserrat Alternates',
            color: '#4834d4',
            fontWeight: 'bold',
            marginBottom: 1,
            flexGrow: 1, // Permite que o texto ocupe o espaço restante
          }}
        >
          Central de Ajuda
        </Typography>
      </Box>
      <Divider sx={{ width: '100%', marginBottom: 4 }} /> {/* Aumenta a linha divisória para 100% da largura */}
      <Paper
        elevation={3}
        sx={{
          padding: 6,
          borderRadius: '24px',
          maxWidth: 800,
          width: '100%',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          marginBottom: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            fontFamily: 'Montserrat Alternates',
            color: '#4834d4',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: 4,
          }}
        >
          Como podemos ajudar?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">Descreva o problema</Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Conte o que está acontecendo com o máximo de detalhes possível. Isso vai nos ajudar a entender o problema.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Seu e-mail"
              fullWidth
              required
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ borderRadius: '12px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Assunto"
              fullWidth
              required
              variant="outlined"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              sx={{ borderRadius: '12px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              fullWidth
              required
              multiline
              rows={4}
              variant="outlined"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              sx={{ borderRadius: '12px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Tipo de problema"
              fullWidth
              select
              required
              variant="outlined"
              value={tipoProblema}
              onChange={(e) => setTipoProblema(e.target.value)}
              sx={{ borderRadius: '12px' }}
            >
              <MenuItem value="erro">Erro na plataforma</MenuItem>
              <MenuItem value="duvida">Dúvida sobre funcionalidades</MenuItem>
              <MenuItem value="sugestao">Sugestão de melhoria</MenuItem>
              <MenuItem value="outro">Outro</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '24px',
                  backgroundColor: '#FB7901',
                  color: '#fff',
                  paddingX: 4,
                  boxShadow: '0px 4px 8px rgba(251, 121, 1, 0.3)',
                  '&:hover': {
                    backgroundColor: '#e66f00',
                  },
                }}
                onClick={handleEnviarClick}
              >
                Enviar
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '24px',
                  paddingX: 4,
                  borderColor: '#FB7901',
                  color: '#FB7901',
                  '&:hover': {
                    backgroundColor: '#fff5e6',
                    borderColor: '#e66f00',
                    color: '#e66f00',
                  },
                }}
                onClick={handleVoltarClick}
              >
                Voltar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={1}
        sx={{
          padding: 6,
          borderRadius: '24px',
          maxWidth: 800,
          width: '100%',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          marginBottom: 4, // Adiciona margem inferior
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{
            fontFamily: 'Montserrat Alternates',
            color: '#4834d4',
            marginBottom: 2,
          }}
        >
          Perguntas Frequentes
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Como faço para redefinir minha senha?</AccordionSummary>
          <AccordionDetails>
            Você pode redefinir sua senha clicando no link "Esqueci minha senha" na página de login e seguindo as instruções enviadas para o seu e-mail.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Como posso alterar meu endereço de e-mail?</AccordionSummary>
          <AccordionDetails>
            Para alterar seu endereço de e-mail, vá até as configurações da sua conta e edite a seção de informações pessoais.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Por que minha conta foi bloqueada?</AccordionSummary>
          <AccordionDetails>
            Contas podem ser bloqueadas por violação dos termos de uso. Entre em contato com o suporte para mais informações sobre sua conta específica.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Como posso excluir minha conta?</AccordionSummary>
          <AccordionDetails>
            Você pode excluir sua conta acessando as configurações e selecionando a opção "Excluir conta". Lembre-se de que essa ação é permanente.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Por que o sistema não possui um sistema de pagamento?</AccordionSummary>
          <AccordionDetails>
            Atualmente, nosso foco está em oferecer um ambiente colaborativo para desenvolvimento. O sistema de pagamento poderá ser considerado em futuras atualizações, conforme a demanda dos usuários.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Como faço para enviar uma solicitação de feature?</AccordionSummary>
          <AccordionDetails>
            Você pode enviar uma solicitação de feature acessando a seção "Sugestões" no menu principal. Nossa equipe analisará sua solicitação para possíveis implementações.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Como configurar meu ambiente de desenvolvimento?</AccordionSummary>
          <AccordionDetails>
            Para configurar seu ambiente de desenvolvimento, recomendamos seguir as instruções disponíveis na documentação oficial. Certifique-se de ter as versões corretas do Node.js, npm, e outros requisitos listados.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Posso contribuir com o código-fonte?</AccordionSummary>
          <AccordionDetails>
            Sim! Nossa plataforma é de código aberto. Você pode contribuir acessando nosso repositório no GitHub e enviando pull requests com melhorias ou correções.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Como reportar um bug?</AccordionSummary>
          <AccordionDetails>
            Para reportar um bug, acesse a seção "Relatar Problema" em nossa plataforma e preencha as informações solicitadas. Isso nos ajudará a identificar e corrigir o problema mais rapidamente.
          </AccordionDetails>
        </Accordion>
        <Typography
          variant="body1"
          sx={{
            color: '#757575',
            marginBottom: 4,
          }}
        >
          Desculpe, a página que você estava procurando não existe. 
          <p>Tente voltar para a página inicial ou entre em contato pelo suporte.</p>
        </Typography>
      </Paper>
      <Box sx={{ height: 24 }} /> {/* Adiciona um espaço após o container */}
    </Box>
  );
};

export default CentraldeAjuda;
