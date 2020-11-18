import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
    return (
        <div className='header' style={{paddingTop: '4rem'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Stocks notebook</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">My profile
                            <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/new-stock">New stock</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/my-stocks">My stocks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/all-stocks">All stocks</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default HeaderComponent;