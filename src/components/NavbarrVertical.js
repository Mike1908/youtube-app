import { AiFillHome } from "react-icons/ai";
import { BsCollectionPlay,BsFiles} from "react-icons/bs";
import { IoMdCompass } from "react-icons/io";
import React, { Component } from 'react';
import { FiAlignJustify } from "react-icons/fi";

class NavbarrVertical extends Component {
 
    constructor(props) {
        super(props);
        this.state ={
            clique:false,
        };
    }
    
    handelclic = () =>{
        this.setState({clique: !(this.state.clique)})
        
    }

    classeAf = () =>{
        if (!this.state.clique) {
            return "NavbarrVertical-U";
        } else {
            return "NavbarrVertical-U-Clic";
        }
    }

    render() {
        //console.log(this.props.clock);
        if (!this.state.clique) {
            return (
                <div className={this.classeAf()}>
                    <div className="clicBarre" onClick={this.handelclic}><FiAlignJustify size={30} color='silver'/></div>
                    <div className="NavbarrVertical">
                        <div className="menu"><AiFillHome size={30} color='silver' /></div>
                        <div className="menu"><IoMdCompass size={30} color='silver'/></div>
                        <div className="menu"><BsCollectionPlay size={30} color='silver'/></div>
                        <div className="menu"><BsFiles size={30} color='silver'/></div>
                    </div>
                </div>
                
            );
        } else {
            return (
                <div className={this.classeAf()}>
                    <div className="clicBarre" onClick={this.handelclic}><FiAlignJustify size={30} color='silver'/></div>
                    <div className="NavbarrVertical">
                        <div className="menu-2">
                            <div><AiFillHome size={30} color='silver' /></div>
                            <div className="text-v">Accueil</div>
                        </div>
                        <div className="menu-2">
                            <div ><IoMdCompass size={30} color='silver'/></div>
                            <div className="text-v">Explorer</div>
                        </div>
                        <div className="menu-2">
                            <div><BsCollectionPlay size={30} color='silver'/></div>
                            <div className="text-v">Abonnements</div>
                        </div>
                        <div className="menu-2">
                            <div><BsFiles size={30} color='silver'/></div>
                            <div className="text-v">Bibliotheque</div>
                        </div>
                    </div>
                </div>
                
            );
        }
    }
}

export default NavbarrVertical;