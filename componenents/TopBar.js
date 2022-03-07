
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faBell, faLocation, faLocationPin, faMagnifyingGlass, faTruckLoading } from "@fortawesome/free-solid-svg-icons";

const TopBar =()=>{
    
    return (
        <div class="flex">
                   <header className="top-bar h-36 bg-black flex">
            <FontAwesomeIcon icon={faLocationPin} size="1x"  />
            <span >청주시</span>
            <ul class="flex bg-teal-400">
                <li>
                    <a>
                    <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="1x"  />
                    </span>
                    </a>
                </li>
                <li>
                    <a> 
                    <span>
                    <FontAwesomeIcon icon={faAlignJustify} size="1x"  />
                    </span>
                    </a>
                </li>
                <li>
                    <a>
                    <span>
                    <FontAwesomeIcon icon={faBell} size="1x" />
                    </span>
                    </a>
                </li>
                
            </ul>
        
        </header>
        </div>
 
    );
}

export default TopBar;