import React from 'react';
import Navbarr from '../components/Navbarr';
import VideoPl from '../components/VideoPl';
import NavbarrVertical from '../components/NavbarrVertical';
import "../styles/Player.css";



const Player = (props) => {
    
    const { state } = props.location
    const [query, setQuery] = React.useState(state[2]);
    const [list, setList] = React.useState(state[1]);
    const [click, setClick] = React.useState(false);

    const linkReturn =() =>{
        let str = props.location.pathname;
        return str.substr(8)+props.location.search;
    }


    let str = linkReturn();
    
    return (
        <div className='player'>
           <Navbarr query={query} setQuery={setQuery} setList={setList} click={click} setClick={setClick}></Navbarr>
           <NavbarrVertical click={click} setClick={setClick}></NavbarrVertical>
            <VideoPl urlValue={str} info ={state[0]} list={list} query={query}></VideoPl>
        </div>
    )
};

export default Player;

