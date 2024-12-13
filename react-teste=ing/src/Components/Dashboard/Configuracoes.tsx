import { useState } from 'react';
import { Grid, Box, Typography, Switch, Select, MenuItem, List, ListItem, ListItemText, Button, Card, CardContent, IconButton, Divider, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SocialIcon from '@mui/icons-material/People';
import PreferencesIcon from '@mui/icons-material/Tune';
import HelpIcon from '@mui/icons-material/HelpOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PublicIcon from '@mui/icons-material/Public';
import AdsIcon from '@mui/icons-material/AdUnits';
import ErrorIcon from '@mui/icons-material/ErrorOutline';
import Swal from 'sweetalert2';

const Configuracoes = () => {
  const [soundEffects, setSoundEffects] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [motivationalMessages, setMotivationalMessages] = useState(true);
  const [darkMode, setDarkMode] = useState('Padrão do sistema');
  const [selectedItem, setSelectedItem] = useState('Preferências');
  const [facebookConnected, setFacebookConnected] = useState(false);
  const [googleConnected, setGoogleConnected] = useState(false);
  const [profilePublic, setProfilePublic] = useState(false);
  const [personalizedAds, setPersonalizedAds] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [productUpdates, setProductUpdates] = useState(true);
  const [newFollowers, setNewFollowers] = useState(true);
  const [friendActivity, setFriendActivity] = useState(true);
  const [smsStudyReminder, setSmsStudyReminder] = useState(false);
  const [whatsappStudyReminder, setWhatsappStudyReminder] = useState(false);
  const [dailyReminder, setDailyReminder] = useState('17:00');
  const [promoNotifications, setPromoNotifications] = useState(true);
  const navigate = useNavigate();

  const handleNotificationsClick = () => {
    setSelectedItem('Notificações');
    navigate('/home', { state: { section: 'Notifications' } });
  };

  const handleSocialAccountsClick = () => {
    setSelectedItem('Contas em redes sociais');
  };

  const handlePrivacySettingsClick = () => {
    setSelectedItem('Configurações de privacidade');
  };

  const handleErrorPageClick = () => {
    navigate('/Errors');
  };

  const handleHelpClick = () => {
    navigate('/CentraldeAjuda');
  };

  const handleNotReadyAlert = () => {
    Swal.fire({
      icon: 'info',
      title: 'Funcionalidade não disponível',
      text: 'Esta funcionalidade ainda não está pronta. Por favor, aguarde novas atualizações.',
    });
  };

  return (
    <Box sx={{ padding: 4, fontFamily: 'Montserrat Alternates' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#7a5ff5",
            fontFamily: 'Montserrat Alternates',
          }}
        >
          Configurações
        </Typography>
        <Box>
          <IconButton
            onClick={handleErrorPageClick}
            sx={{
              backgroundColor: '#FF914D',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#FF7A29',
              },
              marginRight: 2,
            }}
          >
            <ErrorIcon />
          </IconButton>
          <IconButton
            onClick={handleNotificationsClick}
            sx={{
              backgroundColor: '#4834d4',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#3a2baf',
              },
            }}
          >
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {/* Coluna esquerda */}
        <Grid item xs={12} md={8}>
          {selectedItem === 'Configurações de Notificações' ? (
            <Card sx={{ borderRadius: '16px', boxShadow: 3, padding: 3, fontFamily: 'Montserrat Alternates' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Configurações de Notificações</Typography>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Geral</Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography>E-mail</Typography>
                  <Switch
                    checked={emailNotifications}
                    onChange={() => {
                      setEmailNotifications(!emailNotifications);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography>Atualizações de produto e dicas de aprendizado</Typography>
                  <Switch
                    checked={productUpdates}
                    onChange={() => {
                      setProductUpdates(!productUpdates);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography>Novos seguidores</Typography>
                  <Switch
                    checked={newFollowers}
                    onChange={() => {
                      setNewFollowers(!newFollowers);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography>Atividade de amigos</Typography>
                  <Switch
                    checked={friendActivity}
                    onChange={() => {
                      setFriendActivity(!friendActivity);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Promoções</Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography>Notificações de Promoções</Typography>
                  <Switch
                    checked={promoNotifications}
                    onChange={() => {
                      setPromoNotifications(!promoNotifications);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Lembretes</Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography>Lembrete via SMS de Estudo</Typography>
                  <Switch
                    checked={smsStudyReminder}
                    onChange={() => {
                      setSmsStudyReminder(!smsStudyReminder);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography>Lembrete via WhatsApp de Estudo</Typography>
                  <Switch
                    checked={whatsappStudyReminder}
                    onChange={() => {
                      setWhatsappStudyReminder(!whatsappStudyReminder);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>Lembretes diários via E-mail</Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography>Lembrete para praticar</Typography>
                  <TextField
                    type="time"
                    value={dailyReminder}
                    onChange={(e) => setDailyReminder(e.target.value)}
                    sx={{ borderRadius: '12px', minWidth: '150px' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          ) : selectedItem === 'Contas em redes sociais' ? (
            <Card sx={{ borderRadius: '16px', boxShadow: 3, padding: 3, fontFamily: 'Montserrat Alternates' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Contas em redes sociais</Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Box display="flex" alignItems="center">
                    <FacebookIcon sx={{ color: '#4267B2', mr: 1 }} />
                    <Typography>Facebook</Typography>
                  </Box>
                  <Switch
                    checked={facebookConnected}
                    onChange={() => {
                      setFacebookConnected(!facebookConnected);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Box display="flex" alignItems="center">
                    <GoogleIcon sx={{ color: '#DB4437', mr: 1 }} />
                    <Typography>Google</Typography>
                  </Box>
                  <Switch
                    checked={googleConnected}
                    onChange={() => {
                      setGoogleConnected(!googleConnected);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          ) : selectedItem === 'Configurações de privacidade' ? (
            <Card sx={{ borderRadius: '16px', boxShadow: 3, padding: 3, fontFamily: 'Montserrat Alternates' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Configurações de privacidade</Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Box display="flex" alignItems="center">
                    <PublicIcon sx={{ color: '#4834d4', mr: 1 }} />
                    <Typography>Tornar o meu perfil público</Typography>
                  </Box>
                  <Switch
                    checked={profilePublic}
                    onChange={() => {
                      setProfilePublic(!profilePublic);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Typography variant="body2" mb={3}>
                  Permite que outras pessoas encontrem o seu perfil e sigam você. Permite que você siga os outros. Inscreve você nas ligas públicas.
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Box display="flex" alignItems="center">
                    <AdsIcon sx={{ color: '#FF9800', mr: 1 }} />
                    <Typography>Mostrar anúncios personalizados</Typography>
                  </Box>
                  <Switch
                    checked={personalizedAds}
                    onChange={() => {
                      setPersonalizedAds(!personalizedAds);
                      handleNotReadyAlert();
                    }}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Typography variant="body2" mb={3}>
                  Permitir monitorar e personalizar anúncios.
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Box display="flex" alignItems="center">
                    <PrivacyTipIcon sx={{ color: '#00C853', mr: 1 }} />
                    <Typography>Compartilhar atividade com parceiros</Typography>
                  </Box>
                  <Switch
                    checked={true}
                    onChange={() => {}}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#FB7901',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FB7901',
                      },
                    }}
                  />
                </Box>
                <Typography variant="body2" mb={3}>
                  Permite que parceiros comerciais vejam suas atividades para melhorar os serviços oferecidos.
                </Typography>
                <Button variant="contained" sx={{ borderRadius: '12px', backgroundColor: '#FB7901', color: '#fff', mt: 2 }}>
                  Salvar alterações
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card sx={{ borderRadius: '16px', boxShadow: 3, padding: 3, fontFamily: 'Montserrat Alternates' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Experiência</Typography>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                    <Typography>Efeitos sonoros</Typography>
                    <Switch
                      checked={soundEffects}
                      onChange={() => {
                        setSoundEffects(!soundEffects);
                        handleNotReadyAlert();
                      }}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#FB7901',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#FB7901',
                        },
                      }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                    <Typography>Animações</Typography>
                    <Switch
                      checked={animations}
                      onChange={() => {
                        setAnimations(!animations);
                        handleNotReadyAlert();
                      }}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#FB7901',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#FB7901',
                        },
                      }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                    <Typography>Mensagens motivacionais</Typography>
                    <Switch
                      checked={motivationalMessages}
                      onChange={() => {
                        setMotivationalMessages(!motivationalMessages);
                        handleNotReadyAlert();
                      }}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#FB7901',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#FB7901',
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ mt: 4, borderRadius: '16px', boxShadow: 3, padding: 3, fontFamily: 'Montserrat Alternates' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Visual</Typography>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                    <Typography>Modo escuro</Typography>
                    <Select
                      value={darkMode}
                      onChange={(e) => setDarkMode(e.target.value)}
                      sx={{ borderRadius: '12px', minWidth: '150px' }}
                    >
                      <MenuItem value="Padrão do sistema">Padrão do sistema</MenuItem>
                      <MenuItem value="Claro">Claro</MenuItem>
                      <MenuItem value="Escuro">Escuro</MenuItem>
                    </Select>
                  </Box>
                </CardContent>
              </Card>
            </>
          )}
        </Grid>

        {/* Coluna direita */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: '16px', boxShadow: 3, padding: 3, fontFamily: 'Montserrat Alternates' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Conta</Typography>
              <List>
                <ListItem sx={{ border: selectedItem === 'Preferências' ? '2px solid #FB7901' : 'none', borderRadius: '8px' }}>
                  <Button onClick={() => setSelectedItem('Preferências')} sx={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'left' }}>
                    <PreferencesIcon sx={{ color: selectedItem === 'Preferências' ? '#7a5ff5' : '#757575', mr: 1 }} />
                    <ListItemText primary="Preferências" sx={{ color: selectedItem === 'Preferências' ? '#7a5ff5' : '#757575' }} />
                  </Button>
                </ListItem>
                <ListItem sx={{ border: selectedItem === 'Contas em redes sociais' ? '2px solid #FB7901' : 'none', borderRadius: '8px' }}>
                  <Button onClick={handleSocialAccountsClick} sx={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'left' }}>
                    <SocialIcon sx={{ color: selectedItem === 'Contas em redes sociais' ? '#7a5ff5' : '#757575', mr: 1 }} />
                    <ListItemText primary="Contas em redes sociais" sx={{ color: selectedItem === 'Contas em redes sociais' ? '#7a5ff5' : '#757575' }} />
                  </Button>
                </ListItem>
                <ListItem sx={{ border: selectedItem === 'Configurações de privacidade' ? '2px solid #FB7901' : 'none', borderRadius: '8px' }}>
                  <Button onClick={handlePrivacySettingsClick} sx={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'left' }}>
                    <PrivacyTipIcon sx={{ color: selectedItem === 'Configurações de privacidade' ? '#7a5ff5' : '#757575', mr: 1 }} />
                    <ListItemText primary="Configurações de privacidade" sx={{ color: selectedItem === 'Configurações de privacidade' ? '#7a5ff5' : '#757575' }} />
                  </Button>
                </ListItem>
                <ListItem sx={{ border: selectedItem === 'Configurações de Notificações' ? '2px solid #FB7901' : 'none', borderRadius: '8px' }}>
                  <Button onClick={() => setSelectedItem('Configurações de Notificações')} sx={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'left' }}>
                    <NotificationsIcon sx={{ color: selectedItem === 'Configurações de Notificações' ? '#7a5ff5' : '#757575', mr: 1 }} />
                    <ListItemText primary="Configurações de Notificações" sx={{ color: selectedItem === 'Configurações de Notificações' ? '#7a5ff5' : '#757575' }} />
                  </Button>
                </ListItem>
              </List>
              <Typography variant="h6" gutterBottom mt={4}>Suporte</Typography>
              <Button variant="outlined" fullWidth sx={{ borderRadius: '12px', mt: 2, borderColor: '#FB7901', color: '#FB7901' }} onClick={handleHelpClick}>
                <HelpIcon sx={{ mr: 1 }} /> Central de Ajuda
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Configuracoes;