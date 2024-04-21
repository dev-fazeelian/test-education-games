import React from 'react'
import { POST } from '../page'
import Link from 'next/link';

const GameSlug = ({params}) => {
  const post = POST.find((post) => post.slug === params.slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.paragraph}</p>
      <Link href={"/games"}>Come Back</Link>
    </div>
  )
}

export default GameSlug