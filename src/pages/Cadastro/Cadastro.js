import React, { useState } from 'react';
import './Cadastro.css';
import { Button, Center, Text, FormControl, FormLabel, Input } from '@chakra-ui/react';
import logoverde from '../../assets/logoverde.png'
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    usuario: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    // Por exemplo, enviar os dados para um servidor ou fazer a validação no cliente.
  };

  const navigate = useNavigate();

  const goToFeed = () => {
    navigate('/feed')
  }

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="background-image">
      <div className="quadrado-branco">
        <Text
          fontSize={30}
          color="#89debb"
          textDecoration="bold"
          fontWeight="light"
          lineHeight="110%"
          letterSpacing="-2%"
          fontFamily="sans-serif"
          textAlign="center"
        >
          CADASTRO
        </Text>

        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Nome:</FormLabel>
            <Input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Nome de Usuário:</FormLabel>
            <Input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha:</FormLabel>
            <Input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirmar Senha:</FormLabel>
            <Input
              type="password"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Center>
            <Button
              color="white"
              type="submit"
              borderRadius="10px"
              fontSize={20}
              letterSpacing={0}
              backgroundColor="#323232"
              variant="solid"
              justifyContent="center"
              alignItems="center"
              marginTop={3}
              width="250px"
              marginBottom={2}
              onClick={goToLogin}
            >
              Cadastrar
            </Button>
          </Center>
          <p onClick={goToLogin}>Já tem conta? Entrar</p>
        </form>
        <Center>
          <img
            src={logoverde}
            style={{ margin: '20px auto', display: 'block', width: '100px', height: 'auto' }}
          />
        </Center>
      </div>
    </div>
  );
}

export default Cadastro;
