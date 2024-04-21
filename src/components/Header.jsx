"use client";

// Next components
import Link from 'next/link';
import Image from 'next/image';

// React Hooks
import { useState } from 'react'

// Styles
import "@/assets/css/Header.css";

// Icons
import MenuIcon from "@/assets/img/icons/Menu.png";
import HomeIcon from "@/assets/img/icons/Home.png"
import GamesIcon from "@/assets/img/icons/Games.png"
import PlanificationIcon from "@/assets/img/icons/Planification.png";

const Header = () => {
  const [ navMenu, setNavMenu ] = useState(false);

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  }

  return (
    <>
      <header className="header">
        <nav className="nav-title">
          Education Games - PJ
        </nav>
        <nav className={ `nav-bar ${navMenu ? "active" : ""}` }>
          <Link className="nav-bar-item" href={"/"}>
            <Image src={HomeIcon} alt="Icono Inicio" />
            Inicio
          </Link>
          <Link className="nav-bar-item" href={"/games"}>
            <Image src={GamesIcon} alt="Icono Juegos" />
            Galería de Juegos
          </Link>
          <Link className="nav-bar-item" href={"/planification"}>
          <Image src={PlanificationIcon} alt="Icono Planificación" />
            Planifica tu Dinero
          </Link>
        </nav>
        <nav className="nav-btn-menu">
          <button className="btn-menu" onClick={handleNavMenu}>
            <Image src={MenuIcon} alt="Icono Menú" />
          </button>
        </nav>
        <nav className="nav-third" />
      </header>
    </>
  )
}

export { Header };