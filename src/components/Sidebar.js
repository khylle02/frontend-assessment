import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/"> AddUser</Link>
                </li>
                <li>
                    <Link to="/displayfields"> DisplayFields</Link>
                </li>
            </ul>
        </div>
    )
}