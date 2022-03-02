import "./Header.css"
import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
           <Link to ='/'>Home</Link> 

            <header>
            <h1>Most visited cities around the world.</h1>
            </header>
        </>
    )
};
export default Header;