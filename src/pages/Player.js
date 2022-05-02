import React from 'react';
import Navbarr from '../components/Navbarr';
import VideoPl from '../components/VideoPl';
import NavbarrVertical from '../components/NavbarrVertical';



const Player = (props) => {
    
    const { state } = props.location
    const [query, setQuery] = React.useState(state[2]);
    const [list, setList] = React.useState(state[1]);
    const [clickPl,setClickPl]= React.useState(false);

    const linkReturn =() =>{
        let str = props.location.pathname;
        return str.substr(8)+props.location.search;
    }

    const renderVertcalBar=()=>{
        if (clickPl) {
            return(<NavbarrVertical clickPl={clickPl} setClickPl={setClickPl}></NavbarrVertical>);
        }else{
            return;
        }
    }

    let str = linkReturn();
    
    return (
        <div>
           <Navbarr query={query} setQuery={setQuery} setList={setList} clickPl={[clickPl,setClickPl]}></Navbarr>
           {renderVertcalBar()}
            <VideoPl urlValue={str} info ={state[0]} list={list} query={query}></VideoPl>
        </div>
    )
};

export default Player;

