import React from 'react';
import {Link} from "react-router-dom";
import {viewNumbers} from "../proto/viewNumbers";

    
const CardVideo = (props) => { 

    const {video} = props;
    const {list} = props;
    const {query} = props;

    return (
        <div className="cardVideo">

            <Link to={{
                            pathname: `/youtube-app/Player/${video.url}`,
                            state: [video,list,query] 
                        }}>
                            <div className="videoL">
                                <img src={video.bestThumbnail.url} alt="miniature" />
                            </div>
            </Link>

            <div>
                <Link to={{
                            pathname: `/youtube-app/Player/${video.url}`,
                            state: [video,list,query] 
                        }}style={{ textDecoration: 'none' }}>
                            <dir className="infoL">
                                {video.title}
                            </dir>   
                </Link>

                <div className="name-chaine-vertcal">
                    {video.author.name}
                </div>
                
                <div className="nbr-view-vertical">
                    {viewNumbers(video.views)} vue
                    <b>⸱</b> il y a {video.uploadedAt}
                </div>
            </div>
            
        </div>
    );
}
export default CardVideo;
