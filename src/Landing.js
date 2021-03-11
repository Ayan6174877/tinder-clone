import { Link } from "react-router-dom";
import './App.css';

const Landing = () => {
    return(
        <>
         <div className="main-baneer-landing">
             <div>
                <h1 className="main-heading">
                    meet people nearby you.
                </h1><br></br>
                <Link to={`/Home`}  className="action-btn" activeClassName="active">Find People</Link>
             </div>
         </div>
        </>
    );
}

export default Landing  