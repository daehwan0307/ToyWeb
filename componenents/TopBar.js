
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faBell, faLocation, faLocationPin, faMagnifyingGlass, faTruckLoading } from "@fortawesome/free-solid-svg-icons";

const TopBar =()=>{
    
    return (
        <header class="top-bar flex h-20">
            <div class="sm:container h-full flex"></div>    
                <a href class="flex"><FontAwesomeIcon icon={faLocationPin} size="1x"  /></a>
                <span>청주시</span>
                <div class="menue__bar "> 
                <ul class="flex">
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} size="1x"  /></li>
                    <li><FontAwesomeIcon icon={faAlignJustify} size="1x"  /></li>
                    <li> <FontAwesomeIcon icon={faBell} size="1x" /></li>
                </ul>
                </div>

        </header>
 
    );
}

export default TopBar;