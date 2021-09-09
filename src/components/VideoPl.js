import React, { Component } from 'react'
import '../styles/videopl.css';
import '../styles/TuileVideo.css'
import ReactPlayer from "react-player"
import TuileVideo from './TuileVideo';

class VideoPl extends Component {
    
    afficheVertical = () =>{
        var list = this.props.list;
        var savList = this.props.list;

        return list.filter((list)=>{return list.title !== this.props.info.title}).map((list) => {
   
            return (
                <div key={list.id} className="VV">
                    <TuileVideo video={list} query={this.props.query} list={savList}></TuileVideo>
                </div>
            );
        })
        
    }


    render() {
        //console.log(this.props.value);
        //console.log(this.props.list);

        return (
            <div className="videoPl">

                <div className="aff-G">

                    <div className="playerA">
                        <ReactPlayer 
                            controls={true}
                            url={this.props.urlValue}
                            width='100%'
                        />
                    </div>

                    <div className="infoV">
                        <div className="titre">{this.props.info.title}</div>
                        <div className="vueETdate">
                            <div className="vueP">{this.props.info.views} vues</div>
                            <div className="dateP"><b>⸱</b> {this.props.info.uploadedAt}</div>
                        </div>
                        <div className="infoDescription">
                            <div className="image-profil">
                                <img src={this.props.info.author.avatars[0].url} alt={this.props.info.author.name[0]} />
                            </div>
                            <div className="nom-chaineP">
                                {this.props.info.author.name}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="aff-D">
                    {this.afficheVertical()}
                </div>

            </div>
        )
    }
}

export default VideoPl;