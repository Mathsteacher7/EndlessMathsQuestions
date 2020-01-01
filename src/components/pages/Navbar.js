import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <div className="navbar is-danger">
                    <Link to="/" className="navbar-item has-text-white">Home</Link>
                    <Link to="/AddingUpToTen" className="navbar-item has-text-white">Adding up to 10</Link>

                </div>
            </div>
        )
    }
}

export default withRouter(Navbar)