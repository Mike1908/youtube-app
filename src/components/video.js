import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {nombreVue} from "../proto/nombreDeVue";
/**
 * la classe recoi en props 
 * video:les donnees de la video selectione
 * list: la list des video retourne par l api
 * query: le mot de la recherche
 */
class video extends Component {
    
    render() {

        return (
            <div className="tuile-Video">
                    <Link to={{
                                pathname: `/Player/${this.props.video.url}`,
                                state: [this.props.video,this.props.list,this.props.query] // your data array of objects
                            }}>
                                <div className="video">
                                    <img src={this.props.video.bestThumbnail.url} alt="miniature" />
                                </div>
                    </Link>

                <div className="info-v">
                    <div className="image-profil">
                        <img src={this.props.video.author.avatars[0].url} alt={this.props.video.author.name[0]} />
                    </div>
                    <div className="info-text">
                        
                        <Link to={{
                                pathname: `/Player/${this.props.video.url}`,
                                state: [this.props.video,this.props.list,this.props.query] // your data array of objects
                            }} style={{ textDecoration: 'none' }}>
                                <div className="titre-v">
                                    {this.props.video.title}
                                </div>
                        </Link>

                        <div className="autre">
                            <div className="nom-chaine">{this.props.video.author.name}</div>
                            <div className="bas-info">
                                <div className="nbr-vue">{nombreVue(this.props.video.views)} vue</div>
                                <div className="date"><b>⸱</b> il y a {this.props.video.uploadedAt}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default video;