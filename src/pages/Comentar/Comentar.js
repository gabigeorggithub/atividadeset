import React from 'react';
import Header from '../../components/Header/Header';
import user from '../../assets/user.png'
import check from '../../assets/check.png'
import { useNavigate } from "react-router-dom";
import './Comentar.css'



function Comentar() {

    const navigate = useNavigate();
    const goToAssunto = () => {
        navigate('/assunto')
    }

  return (
    <>
    <Header/>
    <div class="container">
    <h2 className='titulozinho'>Comentar</h2>
    </div>

    <div className="quadrado">
    <input type="text" class="rounded-input2" placeholder='Escreva seu comentário...'></input>

    <div className="user-container">
    <img src={user} className="user" alt="User" />
    <span className="user-text">@nomedeusuario</span>
    </div>

    <div className="check-container">
    <button type="submit" onClick={goToAssunto}><img src={check} className="check"></img></button>
    </div></div>

    </>

  );
}

export default Comentar;