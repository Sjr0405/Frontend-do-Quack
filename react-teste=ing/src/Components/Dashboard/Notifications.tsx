import React, { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  Container,
  IconButton,
  Slide,
  Drawer,
  Fab,
  Switch,
  FormControlLabel,
  FormGroup,
  Select,
  MenuItem,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

// Componente para itens de notificação
const NotificationItem = ({ Icon, title, description, actionLabel, actionColor, iconColor, onClose }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    navigate("/home"); // Temporariamente redirecionando para a mesma página
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // Tempo da animação de saída
  };

  return (
    <Slide direction={visible ? "left" : "right"} in={visible} mountOnEnter unmountOnExit>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
        sx={{
          padding: 2,
          borderRadius: "12px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box display="flex" alignItems="center">
          <Avatar
            sx={{
              width: 56,
              height: 56,
              marginRight: 2,
              backgroundColor: iconColor || "#f5f5f5",
            }}
          >
            <Icon fontSize="large" style={{ color: "#fff" }} />
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          {actionLabel && (
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={{
                backgroundColor: actionColor,
                color: "#fff",
                minWidth: 150, // Tamanho mínimo para os botões
                borderRadius: "12px",
                fontWeight: "bold",
                marginRight: 1, // Adiciona uma pequena margem à direita
              }}
            >
              {actionLabel}
            </Button>
          )}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Slide>
  );
};

const Notifications = ({ changeSection }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      Icon: NotificationsIcon,
      title: "Nova mensagem",
      description: "Você recebeu uma nova mensagem de um amigo.",
      actionLabel: "VER MENSAGEM",
      actionColor: "#FF914D",
      iconColor: "#00CFFF",
    },
    {
      id: 2,
      Icon: NotificationsIcon,
      title: "Atualização disponível",
      description: "Uma nova atualização está disponível para o aplicativo.",
      actionLabel: "ATUALIZAR",
      actionColor: "#FFC107",
      iconColor: "#6A1B9A",
    },
    {
      id: 3,
      Icon: NotificationsIcon,
      title: "Evento próximo",
      description: "Você tem um evento agendado para amanhã.",
      actionLabel: "VER DETALHES",
      actionColor: "#4CAF50",
      iconColor: "#FF5722",
    },
    {
      id: 4,
      Icon: NotificationsIcon,
      title: "Nova missão",
      description: "Uma nova missão foi atribuída a você.",
      actionLabel: "VER MISSÃO",
      actionColor: "#2196F3",
      iconColor: "#FFC107",
    },
    {
      id: 5,
      Icon: NotificationsIcon,
      title: "Alerta de segurança",
      description: "Houve uma tentativa de login suspeita na sua conta.",
      actionLabel: "VERIFICAR",
      actionColor: "#F44336",
      iconColor: "#9C27B0",
    },
    {
      id: 6,
      Icon: NotificationsIcon,
      title: "Complete sua roadmap",
      description: "Você está quase lá! Complete sua roadmap para alcançar seus objetivos.",
      actionLabel: "VER ROADMAP",
      actionColor: "#673AB7",
      iconColor: "#3F51B5",
    },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [silentMode, setSilentMode] = useState(false);
  const [studyReminder, setStudyReminder] = useState(true);
  const [smsReminder, setSmsReminder] = useState(false);
  const [whatsappReminder, setWhatsappReminder] = useState(false);
  const [callReminder, setCallReminder] = useState(false);
  const [meetingReminder, setMeetingReminder] = useState(false);
  const [promotionReminder, setPromotionReminder] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [productUpdates, setProductUpdates] = useState(true);
  const [newFollowers, setNewFollowers] = useState(true);
  const [friendActivity, setFriendActivity] = useState(true);
  const [weeklyProgress, setWeeklyProgress] = useState(true);
  const [specialPromotions, setSpecialPromotions] = useState(true);
  const [surveyOpportunities, setSurveyOpportunities] = useState(true);
  const [dailyReminder, setDailyReminder] = useState('17:00');
  const [filter, setFilter] = useState('Todas');
  const navigate = useNavigate();

  const handleClose = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleBackClick = () => {
    if (changeSection) {
      changeSection('Configuracoes');
    } else {
      navigate('/home', { state: { section: 'Configuracoes' } });
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'Todas') return true;
    if (filter === 'Mensagens' && notification.title.includes('mensagem')) return true;
    if (filter === 'Atualizações' && notification.title.includes('Atualização')) return true;
    if (filter === 'Eventos' && notification.title.includes('Evento')) return true;
    if (filter === 'Missões' && notification.title.includes('missão')) return true;
    if (filter === 'Alertas' && notification.title.includes('Alerta')) return true;
    if (filter === 'Roadmap' && notification.title.includes('roadmap')) return true;
    return false;
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 1,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" mb={3}>
          <IconButton onClick={handleBackClick} sx={{ marginRight: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#7a5ff5",
              fontFamily: 'Montserrat Alternates',
            }}
          >
            Notificações
          </Typography>
          <Select
            value={filter}
            onChange={handleFilterChange}
            sx={{ marginLeft: 'auto', minWidth: 150 }}
          >
            <MenuItem value="Todas">Todas</MenuItem>
            <MenuItem value="Mensagens">Mensagens</MenuItem>
            <MenuItem value="Atualizações">Atualizações</MenuItem>
            <MenuItem value="Eventos">Eventos</MenuItem>
            <MenuItem value="Missões">Missões</MenuItem>
            <MenuItem value="Alertas">Alertas</MenuItem>
            <MenuItem value="Roadmap">Roadmap</MenuItem>
          </Select>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box mt={4}>
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    Icon={notification.Icon}
                    title={notification.title}
                    description={notification.description}
                    actionLabel={notification.actionLabel}
                    actionColor={notification.actionColor}
                    iconColor={notification.iconColor}
                    onClose={() => handleClose(notification.id)}
                  />
                ))
              ) : (
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  mt={4}
                >
                  <SentimentDissatisfiedIcon sx={{ fontSize: 80, color: "#b0b0b0" }} />
                  <Typography variant="h6" color="textSecondary" mt={2}>
                    Nenhuma notificação disponível
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Fab
        color="primary"
        aria-label="configurações"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          backgroundColor: '#FF914D',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
        }}
        onClick={toggleDrawer}
      >
        <SettingsIcon />
      </Fab>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 350,
            padding: 4,
            backgroundColor: "#f1f1f1",
            borderRadius: "16px 0 0 16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5" fontWeight="bold">
              Configurações de Notificações
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={notificationsEnabled}
                  onChange={handleNotificationToggle}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Ativar Notificações"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={silentMode}
                  onChange={() => setSilentMode(!silentMode)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Modo Silencioso"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={studyReminder}
                  onChange={() => setStudyReminder(!studyReminder)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Lembrete de Estudo"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={smsReminder}
                  onChange={() => setSmsReminder(!smsReminder)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Lembrete via SMS de Estudo"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={whatsappReminder}
                  onChange={() => setWhatsappReminder(!whatsappReminder)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Lembrete via WhatsApp de Estudo"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={callReminder}
                  onChange={() => setCallReminder(!callReminder)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Lembrete via Chamada"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={meetingReminder}
                  onChange={() => setMeetingReminder(!meetingReminder)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Lembrete de Reuniões"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={promotionReminder}
                  onChange={() => setPromotionReminder(!promotionReminder)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Notificações de Promoções"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Notificações por Email"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={productUpdates}
                  onChange={() => setProductUpdates(!productUpdates)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Atualizações de Produto"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={newFollowers}
                  onChange={() => setNewFollowers(!newFollowers)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Novos Seguidores"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={friendActivity}
                  onChange={() => setFriendActivity(!friendActivity)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Atividade dos Amigos"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={weeklyProgress}
                  onChange={() => setWeeklyProgress(!weeklyProgress)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Progresso Semanal"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={specialPromotions}
                  onChange={() => setSpecialPromotions(!specialPromotions)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Promoções Especiais"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={surveyOpportunities}
                  onChange={() => setSurveyOpportunities(!surveyOpportunities)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Oportunidades de Pesquisa"
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={dailyReminder}
                  onChange={() => setDailyReminder(!dailyReminder)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF914D',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF914D',
                    },
                  }}
                />
              }
              label="Lembrete Diário"
              sx={{ marginBottom: 2 }}
            />
          </FormGroup>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Notifications;