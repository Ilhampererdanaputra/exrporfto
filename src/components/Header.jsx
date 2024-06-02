import fotoprofile from '../assets/sayers.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




import '../styles/Header.css'




function Header() {
  return (
  <header>
    <div className="header-jumbotron">
        <img src={fotoprofile} />
        <h3>Hi, Selamat Datang Di Portfolio</h3>
        <h3>Ilham Perdana Putra</h3>
        <p>Programmer - Ledaership - Marketing</p>
        <div className='socialMedia'>
            <a href="https://www.instagram.com/babbybos._?igsh=MWl3YTE3MHdmc2p6OA=="><FaInstagram  /></a>
            <a href="https://www.facebook.com/profile.php?id=100057392227153"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/ilham-perdana-putra-a9078928a/"><FaLinkedin /></a>
            <a href="https://wa.me/6285161442504"><FaWhatsapp /></a>
        </div>
    </div>
  </header>
  )
}

export default Header
