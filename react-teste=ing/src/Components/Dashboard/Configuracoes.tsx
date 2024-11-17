import React, { useState } from 'react';
import { Grid, Box, Typography, Switch, Select, MenuItem, List, ListItem, ListItemText, Button, Card, CardContent } from '@mui/material';

const Configuracoes = () => {
  const [soundEffects, setSoundEffects] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [motivationalMessages, setMotivationalMessages] = useState(true);
  const [darkMode, setDarkMode] = useState('Padrão do sistema');

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Configurações
      </Typography>
      <Grid container spacing={4}>
        {/* Coluna esquerda */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: '16px', boxShadow: 3, padding: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Experiência</Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography>Efeitos sonoros</Typography>
                <Switch
                  checked={soundEffects}
                  onChange={() => setSoundEffects(!soundEffects)}
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
                  onChange={() => setAnimations(!animations)}
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
                  onChange={() => setMotivationalMessages(!motivationalMessages)}
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
          <Card sx={{ mt: 4, borderRadius: '16px', boxShadow: 3, padding: 3 }}>
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
        </Grid>

        {/* Coluna direita */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: '16px', boxShadow: 3, padding: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Conta</Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Preferências" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Notificações" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contas em redes sociais" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Configurações de privacidade" />
                </ListItem>
              </List>
              <Typography variant="h6" gutterBottom mt={4}>Assinatura</Typography>
              <Button variant="outlined" fullWidth sx={{ borderRadius: '12px', mt: 2, borderColor: '#FB7901', color: '#FB7901' }}>Escolha um plano</Button>
              <Typography variant="h6" gutterBottom mt={4}>Suporte</Typography>
              <Button variant="outlined" fullWidth sx={{ borderRadius: '12px', mt: 2, borderColor: '#FB7901', color: '#FB7901' }}>Central de Ajuda</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Configuracoes;
