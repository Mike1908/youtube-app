import { AiFillHome } from "react-icons/ai";
import { BsCollectionPlay,BsFiles} from "react-icons/bs";
import { IoMdCompass } from "react-icons/io";
import React from 'react';
import { FiAlignJustify } from "react-icons/fi";

const NavbarrVertical = (props) => { 
 
    //const [click, setClick] = React.useState(false);
    const {click, setClick} = props
    
    const handelclick = () =>{
        setClick(!(click))
        
    }

    const classRenderName = () =>{
        if (!click) {
            return "NavbarrVertical-U";
        } else {
            return "NavbarrVertical-U-Click";
        }
    }

  
    if (!click) {

        return (
            <div className={classRenderName()}>
                <div className="clickBarre" onClick={handelclick}><FiAlignJustify size={30} color='silver'/></div>
                <div className="NavbarrVertical">
                    <div className="menu">
                        <div><AiFillHome size={30} color='white' /></div>
                        <div>Accueil</div>
                    </div>
                    <div className="menu">
                        <div><IoMdCompass size={30} color='white'/></div>
                        <div>Explorer</div>
                    </div>
                    <div className="menu">
                        <div><BsCollectionPlay size={30} color='white'/></div>
                        <div>Abonnements</div>
                    </div>
                    <div className="menu">
                        <div><BsFiles size={30} color='white'/></div>
                        <div>Bibliotheque</div>
                        
                    </div>
                </div>
            </div>      
        );
    } else {

        return (
            <div className={classRenderName()}>

                <div className="clickBarre" onClick={handelclick}><FiAlignJustify size={30} color='silver'/></div>
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

export default NavbarrVertical;