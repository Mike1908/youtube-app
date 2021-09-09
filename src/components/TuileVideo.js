import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {nombreVue} from "../proto/nombreDeVue";

class TuileVideo extends Component {

    render() {
        //console.log(this.props)
        return (
            <div className="TuileVideo">
                <Link to={{
                                pathname: `/Player/${this.props.video.url}`,
                                state: [this.props.video,this.props.list,this.props.query] // your data array of objects
                            }}>
                                <div className="videoL">
                                    <img src={this.props.video.bestThumbnail.url} alt="miniature" />
                                </div>
                </Link>
                <div>
                    <Link to={{
                                pathname: `/Player/${this.props.video.url}`,
                                state: [this.props.video,this.props.list,this.props.query] // your data array of objects
                            }}style={{ textDecoration: 'none' }}>
                                <dir className="infoL">
                                    {this.props.video.title}
                                </dir>
                            
                    </Link>
                    <div className="nom-chaine-vertcal">{this.props.video.author.name}</div>
                    <div className="nbr-vue-vertical">
                        {nombreVue(this.props.video.views)} vue
                        <b>⸱</b> il y a {this.props.video.uploadedAt}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default TuileVideo;
