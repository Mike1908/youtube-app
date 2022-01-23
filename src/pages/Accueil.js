import React from 'react';
import Navbarr from '../components/Navbarr';
import NavbarrVertical from '../components/NavbarrVertical';
import Video from '../components/video';
import '../styles/Navbarr.css';
import '../styles/NavbarrVertical.css';
import '../styles/App.css';
import '../styles/video.css';
import astro from '../image/astro.PNG'

/**
 * 
 * @returns la page principal HTML
 */
const Accueil = () => {

    /**state en hook */
    const [query, setQuery] = React.useState('[nextpageRef]');
    const [list, setList] = React.useState(null);


    /**
     * @param {une liste de video} list 
     * @returns l affichage HTML
     */
    const afficher = (list) =>{
  
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
            //console.log(savList);

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
                {afficher(list)}
            </div>
        </div>
    );
};

export default Accueil;