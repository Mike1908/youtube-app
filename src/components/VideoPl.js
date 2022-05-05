import React from 'react'
import '../styles/videoPl.css';
import '../styles/CardVideo.css';
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

            <div className="page-left">

                <div className="playerA">
                    <ReactPlayer 
                        controls={true}
                        url={urlValue}
                        width='100%'
                    />
                </div>

                <div className="infoV">
                    <div className="title">{info.title}</div>
                    <div className="viewDate">
                        <div className="viewP">{info.views} vues</div>
                        <div className="dateP"><b>⸱</b> {info.uploadedAt}</div>
                    </div>
                    <div className="infoDescription">
                        <div className="image-profil">
                            <img src={info.author.avatars[0].url} alt={info.author.name[0]} />
                        </div>
                        <div className="name-chainP">
                            {info.author.name}
                        </div>
                    </div>
                </div>

            </div>

            <div className="page-right">
                {renderVertical()}
            </div>

        </div>
    )
}
export default VideoPl;