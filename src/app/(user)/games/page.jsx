import { Header } from '@/components/Header'
import Link from 'next/link';
import React from 'react'

export const POST = [
  {
    id: 1,
    slug: "game-1",
    title: "Game 1",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 2,
    slug: "game-2",
    title: "Game 2",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 3,
    slug: "game-3",
    title: "Game 3",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 4,
    slug: "game-4",
    title: "Game 4",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
];

const GamesGalleryView = () => {
  return (
    <div>
      <Header />
      <h1>Games Gallery View</h1>

      <main>
          {POST.map ((post) => (
            <div key={post.id}>
              <h2><b>Title: </b>{post.title}</h2>
              <h3><b>Slug - URL Route: </b>{post.slug}</h3>
              <Link href={`/games/${post.slug}`}>Play</Link>
              <br />
              <br />
            </div>
          ))}
      </main>
    </div>
  )
}

export default GamesGalleryView