import React, { useEffect } from 'react';
import './Post.css'
import Header from '../../components/Header/Header';
import share from '../../assets/sharebtn.png'
import plus from '../../assets/plus.png'
import comment from '../../assets/comentbtn.png'
import like from '../../assets/likebtn.png'
import user from '../../assets/user.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Post(props) {
  const pegarNoticias=()=>{
    axios.get('http://localhost:8000/news')
    .then(response => props.setNew(response.data))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    pegarNoticias()
  },[])

  const novasNoticias = props.news.map((item)=>{
    return(
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
    )
  })


  const navigate = useNavigate();
  const goToComentar = () => {
    navigate('/comentar')
  }
  const goToAssunto = () => {
    navigate('/assunto')
  }

  return (
    <>
    {novasNoticias}
    </>
    // <div className="App">

    //   <main>
    //     <div className="comment-container" >
    //       <div className="conteudoDoPost" onClick={goToAssunto}>
    //         <div>
    //           <img src={user} alt="Imagem de Perfil" className="user" />
    //         </div>
    //         <div className="postText">
    //           <h2>Intervenção Municipal</h2>
    //           <p>
    //             bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    //             bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    //             bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    //             bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    //           </p>
    //         </div>
    //       </div>
    //       <div className="space"></div>
    //       <div className="sessaoBotoes">
    //         <button className="button">
    //           <img src={share} id="btnshare" alt="" />
    //           <p>Compartilhar</p>
    //         </button>
    //         <button className="button">
    //           <img src={comment} id="btnImg" alt="" onClick={goToComentar} />
    //           <p>Comentar</p>
    //         </button>
    //         <button className="button">
    //           <img src={like} id="btnImg" alt="" />
    //           <p>Like</p>
    //         </button>
    //       </div>
    //     </div>

    //   </main>
    // </div>
  );
}

export default Post;