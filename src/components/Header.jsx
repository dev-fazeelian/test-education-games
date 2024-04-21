import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/games"}>Games</Link></li>
      </ul>
    </header>
  )
}

export { Header };