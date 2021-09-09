import React from 'react';
import Navbarr from '../components/Navbarr';
import VideoPl from '../components/VideoPl';
import NavbarrVertical from '../components/NavbarrVertical';



const Player = (props) => {
    
    const { state } = props.location
    const [query, setQuery] = React.useState(state[2]);
    const [list, setList] = React.useState(state[1]);
    const [clipuePl,setCliquePl]= React.useState(false);

    const linkRetour =() =>{
        let str = props.location.pathname;
        return str.substr(8)+props.location.search;
    }

    const affVertcalBar=()=>{
        if (clipuePl) {
            return(<NavbarrVertical></NavbarrVertical>);
        }else{
            return;
        }
    }

    let str = linkRetour();
    
    return (
        <div>
           <Navbarr query={query} setQuery={setQuery} setList={setList} clipuePl={[clipuePl,setCliquePl]}></Navbarr>
           {affVertcalBar()}
            <VideoPl urlValue={str} info ={state[0]} list={list} query={query}></VideoPl>
        </div>
    )
};

export default Player;

