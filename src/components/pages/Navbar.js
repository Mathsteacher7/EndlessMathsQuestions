import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <div className="navbar is-danger">
                    <Link to="/" className="navbar-item has-text-white">Home</Link>
                    <Link to="/AddingUpToTen" className="navbar-item has-text-white">Adding up to 10</Link>
                    <Link to="/AddingUpToHundred" className="navbar-item has-text-white">Adding up to 100</Link>
                    <Link to="/AddingUpToThousand" className="navbar-item has-text-white">Adding up to 1000</Link>

                </div>
            </div>
        )
    }
}

export default withRouter(Navbar)