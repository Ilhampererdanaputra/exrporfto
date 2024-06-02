import { useState } from 'react';
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa";
import { VscEyeClosed } from "react-icons/vsc";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')

    function tampilMenu() {
        if(statusTampil == '') {
            setStatusTampil('tampil')
        } else {
            setStatusTampil('')
        }
    }
    
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <Link to="/">Portfolio Ilham Perdana Putra</Link>
                
            </div>
            <button onClick={tampilMenu}>
            {
                statusTampil == '' ? (<FaBars />) : (<VscEyeClosed />)
            }
            </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
                    <li><HashLink to="/#about">Tentang Saya</HashLink></li>
                    <li><Link to="/experience">Pengalaman</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
