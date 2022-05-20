import { AiOutlineBell } from "react-icons/ai";
import { BsGrid3X3GapFill,BsCameraVideo,BsSearch } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../image/youtube.png";
import React from 'react';
import { NavLink } from "react-router-dom";
/******import le scripte de api youtube****/
import {searchYouTube} from '../proto/scriptApi.js';
/*****************************************/


const Navbarr = (props) => {

    const {query , setQuery} = props;
    const {setList} = props;
    const {click,setClick} = props
    const {value} = props;

    const profil = "Mike"; //static 
    const link = "";

    /**
     * fcn de recherche passe en props a navn par ...
     */
    const search = (e) => {
        e.preventDefault();
        searchYouTube(query).then(setList);
        //console.log(searchYouTube(query).then(setList));
    };

    /**
     * Change le token de recherche par celui saisi
     */
    const HashChange = Event =>{
        setQuery(Event.target.value)
    }

    const handelclick = () =>{
        setClick(!(click))  
    }

    const bubbleImg = (lien,profil) =>{
        if (lien === "") {
            return (<div className="bubble"><div className="letter"><span>{profil[0]}</span></div></div>);
        } else {
            return (<img className="bubble" alt={profil[0]} src={link}/>);
        }
    }


    return (
        <div className="navbarr">

            <div className="Logo-menu">
                <div onClick={handelclick}><FiAlignJustify size={30} color='silver'/></div>
                <div>
                    <NavLink exact to="/youtube-app/">
                        <img id="logo" alt="Logo" src={logo} /> 
                    </NavLink>
                </div>
            </div>

            <form className="search" onSubmit={search} >
                <input autoFocus className="site-search" type="search"  placeholder="Rechercher" value={value} onChange={HashChange} ></input>
                <button className="button-search" ><BsSearch color='white'/></button>
            </form>
            <form className="search_resp" onSubmit={search} >
                <div className="search-box">
                    <button className="btn-search"><BsSearch color='silver'/></button>
                    <input type="text" className="input-search" placeholder="Rechercher" value={value} onChange={HashChange}/>
                </div>
            </form>
            
            
            <div className="b-nav">
                <div className="icon"><BsCameraVideo color='silver'/></div>
                <div className="icon"><BsGrid3X3GapFill color='silver'/></div>
                <div className="icon"><AiOutlineBell color='silver'/></div>
                {bubbleImg(link,profil)}
            </div>
            
        </div>
    );
};  

export default Navbarr;