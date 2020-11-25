import { NavLink } from 'react-router-dom';
import logo from '../../public/duffl.png'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="duff-div">
                <div className="logo-div">
                    <img className="duffl-logo" src={logo} alt="Logo" />
                    <h1 class="duff">-lite</h1>
                </div>
                <p class="tag">a better vending machine</p>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <NavLink class="nav-item active" to="/">
                        <li class="nav-item active">
                            <a class="nav-link" >Dashboard</a>
                        </li>
                    </NavLink>
                    <NavLink class="nav-item" to="/products">
                        <li class="nav-item">
                            <a class="nav-link" >Products</a>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
