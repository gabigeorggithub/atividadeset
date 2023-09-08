import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import Header from '../../components/Header/Header';
import plus from '../../assets/plus.png'
import { useNavigate } from 'react-router-dom';
import Plus from '../../components/Plus/Plus';


function Feed() {

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
    navigate('/')
    }

  }, [navigate])

  const handleLogOut = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/')
  }
  const goToPerguntas = () =>{
    navigate('/perguntas')
  }
  return (
    <>
    <Header/>
    <Post/>
    <Post/>
    <Plus/>
    <button onClick={handleLogOut}>LogOut</button>
    </>

  );
}

export default Feed;
