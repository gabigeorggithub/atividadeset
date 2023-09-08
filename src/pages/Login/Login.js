import React, { useState } from 'react';
import './Login.css'; // Estilize este arquivo conforme sua preferência
import fundo from '../../assets/fundoforum.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import logo from '../../assets/logoverde.png'

const Login = () => {
    // Inicializa dois estados para armazenar o email e a senha
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        // Importa a função de roteamento do React Router
        const navigate = useNavigate();
  
        const goToCadastro = () =>{
          navigate('/cadastro')
        }
    
        const goToFeed = () =>{
          navigate('/feed')
        }

        const saveUserInfoLocalStorage = (token) => {
          localStorage.setItem('token', token)
          localStorage.setItem('email', email)


        }
      
        // Função para voltar para a página anterior
        const goBack = () => {
          navigate(-1);
        };

    
  
    // Função que lida com o envio do formulário
    const handleSubmit = (e) => {
      e.preventDefault()

      const credentials = {email, password}
  
      axios.post('http://localhost:8000/login', credentials,{
        headers:{
          'Content-Type': 'application/json',
        },
  
      })
      .then(response =>{
        alert(response.data.message)
        saveUserInfoLocalStorage(response.data.token)
        goToFeed()
      })
      .catch(error => console.log(error))
    };
  

  return (
    <>
    <div class="linha">
    <div class="coluna-50"><img src={fundo} className='background'></img></div>
    <div class="coluna-50">
    <div className='corpo'>
      <div className="login-page">
        <div className="login-form">
          <img src={logo} className='logoooo'></img>
          <Text
            fontSize={40}
            textDecoration={'bold'}
            fontWeight={'light'}
            lineHeight={'110%'}
            letterSpacing={'-2%'}  
            fontFamily={'sans-serif'}
            textAlign={'left'}
          >Olá!</Text>
          <p>Insira suas informações de login </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder='nome@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              {/* Botão para entrar */}
              <Button
                color='white'
                type='submit'
                fontSize={20}
                letterSpacing={0}
                backgroundColor='#323232'
                variant='solid'
                justifyContent='center'
                alignItems='center'
                marginTop={3}
                width={'280px'}
                marginLeft={1}
                // onClick={goToFeed}
                >Entrar</Button>
            </div>
          </form>
          {/* Link para redefinir senha */}
          <Text
            textDecoration={'underline'}     
            onClick={'/'} 
            textAlign={'center'}
          >Esqueceu sua senha?</Text>
          {/* Link para voltar para a página anterior */}
          <Text
            textDecoration={'underline'}     
            onClick={goToCadastro} 
            textAlign={'center'}
          >Não tem uma conta? Cadastre-se</Text>
        </div>
      </div>
    </div>


    </div>
    </div>
    </>

  );
};

export default Login;
