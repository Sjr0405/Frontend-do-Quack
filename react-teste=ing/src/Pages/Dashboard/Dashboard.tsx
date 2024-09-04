import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Box, Grid, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

interface User {
  email: string;
  cpf: string;
  phone: string;
  name: string;
  password?: string;
}

interface DashboardProps {
  currentUserEmail: string;
  currentUserPassword: string;
  email?: string;
  password?: string;
}

const Dashboard: React.FC = () => {
  const location = useLocation();
  const { email: currentUserEmail, password: currentUserPassword } = location.state as DashboardProps;

  const [dataList, setDataList] = useState<User[]>([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  let isAdmin = false;
  
  if (currentUserEmail === 'Admin@gmail.com' && currentUserPassword === 'Administrador1') {
    isAdmin = true;
  }

  useEffect(() => {
    const sampleData: User[] = [
      { email: 'Admin@gmail.com', cpf: '123.456.789-00', phone: '(11) 99999-9999', name: 'Admin', password: 'Administrador1' },
      { email: 'user1@example.com', cpf: '111.222.333-44', phone: '(21) 98888-8888', name: 'User One', password: '12345678' },
      { email: 'user2@example.com', cpf: '555.666.777-88', phone: '(31) 97777-7777', name: 'User Two', password: '87654321' },
      { email: 'user3@example.com', cpf: '999.888.777-66', phone: '(41) 96666-6666', name: 'User Three', password: '12345678' },
      { email: 'user4@example.com', cpf: '222.333.444-55', phone: '(51) 95555-5555', name: 'User Four', password: '87654321' },
    ];

    if (!isAdmin) {
      const filteredData = sampleData.filter(user => user.email === currentUserEmail);
      setDataList(filteredData);
    } else {
      setDataList(sampleData);
    }
  }, [isAdmin, currentUserEmail]);

  const handleDelete = (index: number) => {
    const newDataList = dataList.filter((_, i) => i !== index);
    setDataList(newDataList);
    Swal.fire({
      icon: 'success',
      title: 'Deletado!',
      text: 'Registro deletado com sucesso.',
    });
  };

  const handleEdit = (index: number) => {
    setEditUser(dataList[index]);
    setEditIndex(index);
    setEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editUser && editIndex !== null) {
      const newDataList = [...dataList];
      newDataList[editIndex] = editUser;
      setDataList(newDataList);
      setEditDialogOpen(false);
      Swal.fire({
        icon: 'success',
        title: 'Salvo!',
        text: 'Dados atualizados com sucesso.',
      });
    }
  };

  const handleEditChange = (field: keyof User, value: string) => {
    if (editUser) {
      setEditUser({ ...editUser, [field]: value });
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Box sx={{ flexGrow: 1, ml: 2 }}>
        <Card sx={{ padding: 4, mt: 5, backgroundColor: '#d2d2d2d2' }}>
          <Typography variant="h6" gutterBottom>
            {isAdmin ? 'Todos os Usuários Registrados' : 'Seus Dados'}
          </Typography>
          {dataList.map((data, index) => (
            <Box key={index} sx={{ mb: 2, mt: 2 }}>
              <Typography variant="body1">
                Nome: {data.name}
              </Typography>
              <Typography variant="body1">
                Email: {data.email}
              </Typography>
              <Typography variant="body1">
                CPF: {data.cpf}
              </Typography>
              <Typography variant="body1">
                Telefone: {data.phone}
              </Typography>

              {isAdmin && (
                <Box sx={{ mt: 1 }}>
                  <Button
                    className='btn-edit'
                    variant="outlined"
                    color="success"
                    onClick={() => handleEdit(index)}
                    sx={{ mr: 1 }}
                  >
                    Editar
                  </Button>
                  <Button
                    className='btn-delete'
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    Deletar
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Card>
      </Box>

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Editar Usuário</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nome"
                fullWidth
                sx={{ mt: 2 }}
                value={editUser?.name || ''}
                onChange={(e) => handleEditChange('name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                value={editUser?.email || ''}
                onChange={(e) => handleEditChange('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="CPF"
                fullWidth
                value={editUser?.cpf || ''}
                onChange={(e) => handleEditChange('cpf', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Telefone"
                fullWidth
                value={editUser?.phone || ''}
                onChange={(e) => handleEditChange('phone', e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

// Exemplo de uso do Dashboard
const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
