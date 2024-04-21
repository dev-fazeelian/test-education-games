import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/games"}>Games Gallery</Link></li>
        <li><Link href={"/games/game-1"}>Games 1</Link></li>
        <li><Link href={"/games/game-2"}>Games 2</Link></li>
      </ul>
    </header>
  )
}

export { Header };