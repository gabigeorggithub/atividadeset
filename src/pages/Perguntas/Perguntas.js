import Header from "../../components/Header/Header"
import './Perguntas.css'
import user from '../../assets/user.png'
import check from '../../assets/check.png'
import { useNavigate } from "react-router-dom";

const Perguntas = () => {
    const navigate = useNavigate();
    const goToFeed = () => {
        navigate('/feed')
    }
    return (
        <>
        <Header/>
        <div className="background-image">
        <div class="container2">
        <input type="text" class="rounded-input" placeholder="Faça uma pergunta/inicie uma discussão:"></input>
        </div>

        <div className="quadrado2">
        <input type="text" class="rounded-input3" ></input>

        <div className="user-container2">
        <img src={user} className="user2" alt="User" />
        <span className="user-text2">@nomedeusuario</span>
        </div>

        <div className="check-container2">
        <button type="submit" onClick={goToFeed}><img src={check} className="check2"></img></button>
        </div></div></div>


        </>
    );
  };
  
  export default Perguntas;