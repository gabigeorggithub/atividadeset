import React from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import SubPost from '../../components/SubPost/SubPost';
import plus from '../../assets/plus.png'
import { useNavigate } from 'react-router-dom';
import './Assunto.css'
import Plus from '../../components/Plus/Plus';



function Assunto() {
  const navigate = useNavigate();
  const goToPerguntas = () => {
    navigate('/perguntas')
  }

  return (
    <>
    {/* <Header/>
    <Post/>
    <SubPost/>
    <Plus/> */}

    </>

  );
}

export default Assunto;