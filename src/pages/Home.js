import React from 'react';
import Navbarr from '../components/Navbarr';
import NavbarrVertical from '../components/NavbarrVertical';
import Video from '../components/Video';
import '../styles/superHome.css';
import astro from '../image/astro.PNG'

/**
 * 
 * @returns la page principal HTML
 */
const Home = () => {

    const [query, setQuery] = React.useState('[nextpageRef]');
    const [list, setList] = React.useState(null);


    /**
     * @param {une liste de video} list 
     * @returns l affichage HTML
     */
    const renderList = (list) =>{
  
        if (list === null ) { 
            return(
                <div className="astro">
                    <div>
                        <img src={astro} alt="recherche api YouTube" />
                    </div>
                    <div className="astro-text">recherche api YouTube</div>
                </div>
            );
        
        } else {
            var savList = list;

            return list.map((list) => {
                return (
                    <div key={list.id} className="V">
                        <Video video={list} list={savList} query={query}></Video>
                    </div>
                );
            })
        }
    }

    return (
        <div className="App">
            <div className="nav-Union">
                <Navbarr query={query} setQuery={setQuery} setList={setList}></Navbarr>
                <NavbarrVertical></NavbarrVertical>
            </div>
            
            <div className="main">
                {renderList(list)}
            </div>
        </div>
    );
};

export default Home;