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

    /**
     * fcn de recherche passe en props a navn par ...
     */
    const search = (e) => {
        e.preventDefault();
        searchYouTube(props.query).then(props.setList);
        //console.log(searchYouTube(query).then(setList));
    };

    /**
     * Change le token de recherche par celui saisi
     */
    const HashChange = Event =>{
        props.setQuery(Event.target.value)
    }

    const NavbarrVertical= () =>{
        if(props.clipuePl==null){
            console.log(null);
        }else{
            props.clipuePl[1](!props.clipuePl[0]);
        }
    }

    const bulleImg = (lien,profil) =>{
        if (lien === "") {
            return (<div className="bulle"><span>{profil[0]}</span></div>);
        } else {
            return (<img className="bulle" alt={profil[0]} src={lien}/>);
        }
    }
    const profil = "Mike";
    const lien = "";
    //console.log(props);

    return (
        <div className="navbarr">
            <div className="Logo-menu">
                <div onClick={NavbarrVertical}><FiAlignJustify size={30} color='silver'/></div>
                <div>
                    <NavLink exact to="/">
                        <img id="logo" alt="Logo" src={logo} />
                    </NavLink>
                </div>
            </div>

            <form className="search" onSubmit={search} >
                <input autoFocus type="search" id="site-search"  placeholder="Rechercher" value={props.value} onChange={HashChange} ></input>
                <button className="button-search"><BsSearch color='white'/></button>
            </form>
            
            <div className="b-nav">
                <div className="icon"><BsCameraVideo color='silver'/></div>
                <div className="icon"><BsGrid3X3GapFill color='silver'/></div>
                <div className="icon"><AiOutlineBell color='silver'/></div>
                {bulleImg(lien,profil)}
            </div>
        </div>
    );
};  

export default Navbarr;