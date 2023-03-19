import React, {useContext, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from '../utils/AuthProvider'
import { Navbar, Nav } from 'react-bootstrap';

function LogOut(){

    const {setAuth,setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(){
        window.localStorage.removeItem("authToken")
        setAuth(false)
        setUser(null)
        setToken('')
        navigate('/', { replace:true })
    }
    

    return(
        <ul className="navbar-nav">
            <li className="nav-item">
                <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
            </li>
        </ul>
    )
}
function LogIn(){
    return(
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link className='nav-link btn btn-primary' to={'/login'} >Login</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link btn btn-outline-primary' to={'/signup'}>SignUp</Link>
        </li>
    </ul>
    )
}

export default function NavBar() {

    const {auth} = useContext(AuthContext)
    useEffect(()=>{},[auth])
    return (
        <header id="header">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light topMenu">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                            <h1>SPLASH</h1>
                            </a>
                            <button className="btn btn-dark rounded-pill px-3 d-block d-md-none">Get started </button>

                            <button className="navbar-toggler d-none d-md-block d-lg-none" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end menuLinks"
                                id="navbarSupportedContent">
                                <ul className="navbar-nav align-items-center">
                                    <li className="nav-item">
                                        <Link className='nav-link' to={'/'} >Our story</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className='nav-link' to={'/articles'}>Articles</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <Link className='nav-link' to={'/profile'}>Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className='nav-link' to={'/compose'}>Write New</Link>
                                    </li>
                                    {auth? <LogOut/>:<LogIn/>}

                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>

            </div>
        </div>
    </header>
      );
}
