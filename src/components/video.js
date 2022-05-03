import React from 'react';
import {Link} from "react-router-dom";
import {viewNumbers} from "../proto/viewNumbers";
/**
 * la classe recoi en props 
 * video:les donnees de la video selectione
 * list: la list des video retourne par l api
 * query: le mot de la recherche
 */
const Video = (props) =>{

    const {video} = props;
    const {list} = props;
    const {query} = props;

    return (
        <div className="Card-Video">
                <Link to={{
                            pathname: `/youtube-app/Player/${video.url}`,
                            state: [video,list,query] 
                        }}>
                            <div className="video">
                                <img src={video.bestThumbnail.url} alt="miniature" />
                            </div>
                </Link>

            <div className="info-v">
                <div className="image-profil">
                    <img src={video.author.avatars[0].url} alt={video.author.name[0]} />
                </div>
                <div className="info-text">
                    
                    <Link to={{
                            pathname: `/youtube-app/Player/${video.url}`,
                            state: [video,list,query]
                        }} style={{ textDecoration: 'none' }}>
                            <div className="title-v">
                                {video.title}
                            </div>
                    </Link>

                    <div className="other">
                        <div className="name-chain">{video.author.name}</div>
                        <div className="bottom-info">
                            <div className="nbr-view">{viewNumbers(video.views)} vue</div>
                            <div className="date"><b>⸱</b> il y a {video.uploadedAt}</div>
                        </div> 
                    </div>

                </div>
            </div>

        </div>
    );
    
}

export default Video;