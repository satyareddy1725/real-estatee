import {Component} from 'react'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
              <div className="Navbar-left">
                <img src="https://cdn-icons-png.flaticon.com/128/994/994382.png" alt="imgtag" style={{width:'40px'}}  />
                <h6>SP HOUSING PRIVATE LIMITED</h6>
              </div>
              <div className="Navbar-center">
                <ul className="Navbar-center">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SALES</li>
                    <li>PROPERTIES</li>
                </ul>
              </div>
              <div className="Navbar-right">
                <button>Log In</button>
              </div>
            </div>
        )
    }
}

export default Navbar