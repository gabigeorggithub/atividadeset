import React, { useEffect } from 'react';
import Post from '../../components/Post/Post';
import Header from '../../components/Header/Header';
import plus from '../../assets/plus.png'
import { useNavigate } from 'react-router-dom';
import Plus from '../../components/Plus/Plus';


function Feed(props) {

  return (
    <>
    <Post news={props.news}
    setNews={props.setNews} />
    {/* <Header/>
    <Post/>
    <Post/>
    <Plus/> */}
    </>

  );
}

export default Feed;
