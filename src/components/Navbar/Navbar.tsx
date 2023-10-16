import { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'



export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar-container">
                <ul>
                    <li>
                        <Link className="links" to="/userInput">Task A</Link>
                    </li>
                    <li>
                        <Link className="links" to="/userinputnum">Task B</Link>
                    </li>
                    <li>
                        <Link className="links" to="/UserAppend">Task C</Link>
                    </li>
                    
                    <li>
                        <Link className="links" to="/validation">Task D</Link>
                    </li>
                    <li>
                        <Link className="links" to="/api">Task E</Link>
                    </li>
                    <li>
                        <Link className="links" to="/crudapp">Task F</Link>
                    </li>
                    <li>
                        <Link className="links" to="/randomcolor">Task G</Link>
                    </li>
                    <li>
                        <Link className="links" to="/redelement">Task H</Link>
                    </li>
                    <li>
                        <Link className="links" to="/quizlist">Task I</Link>
                    </li>
                    <li>
                        <Link className="links" to="/parkapp">Task j</Link>
                    </li>
                    <li>
                        <Link className="links" to="/dropdown">Task k</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}