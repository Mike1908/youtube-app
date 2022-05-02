import React from 'react'
import '../styles/videopl.css';
import '../styles/TuileVideo.css'
import ReactPlayer from "react-player"
import CardVideo from './CardVideo';


const VideoPl = (props) =>{

    const {info} = props;
    const {query} = props;
    const {urlValue} = props;
    
    const renderVertical = () =>{
        var list = props.list;
        var savList = props.list;

        return list.filter((list)=>{return list.title !== info.title}).map((list) => {
   
            return (
                <div key={list.id} className="VV">
                    <CardVideo video={list} query={query} list={savList}></CardVideo>
                </div>
            );
        })
        
    }

    return (
        <div className="videoPl">

            <div className="aff-G">

                <div className="playerA">
                    <ReactPlayer 
                        controls={true}
                        url={urlValue}
                        width='100%'
                    />
                </div>

                <div className="infoV">
                    <div className="titre">{info.title}</div>
                    <div className="vueETdate">
                        <div className="vueP">{info.views} vues</div>
                        <div className="dateP"><b>⸱</b> {info.uploadedAt}</div>
                    </div>
                    <div className="infoDescription">
                        <div className="image-profil">
                            <img src={info.author.avatars[0].url} alt={info.author.name[0]} />
                        </div>
                        <div className="nom-chaineP">
                            {info.author.name}
                        </div>
                    </div>
                </div>

            </div>

            <div className="aff-D">
                {renderVertical()}
            </div>

        </div>
    )
}
export default VideoPl;