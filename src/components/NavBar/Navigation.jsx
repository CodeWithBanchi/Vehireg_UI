import "./navigation.css"
import SearchIcon from '@mui/icons-material/Search';

function Navigation(props) {
    return (
        <div className="topbarcontainer">
           <div className="navLeft">
               <span className="topic"> Vehicle Registration </span>
           </div>
            <div className="navCenter">
               <div className="searchContainer">
                   <div className="searchbox" >
                      <SearchIcon className="searchIcon"/>
                       <input placeholder="search now " className="searchInput"/>
                   </div>
               </div>
            </div>

            <div className="navRight">
                <div className="rightContainer">
                    <span className="log"> {props.log}</span>
                </div>
            </div>
        </div>
    )
}

export default Navigation
