import React from 'react'
import Link from 'next/link';

// Array of games
import { POST } from '../page'

// Components
import { Header } from '@/components/Header';

const GameSlug = ({params}) => {
  const post = POST.find((post) => post.slug === params.slug);

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Content */}
      <main className="sect-content">
        <div className="title-view">
          <h1>{post.title} </h1>
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.paragraph}</p>
          <Link href={"/games"}>Come Back</Link>
        </div>
      </main>
    </>
  )
}

export default GameSlug