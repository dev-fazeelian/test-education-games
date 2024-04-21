import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Header } from '@/components/Header'

// Styles
import "@/assets/css/GamesGallery.css";

// Images - Icons
  // Game Image Example
  import GameImgExample from "@/assets/img/GameImageEx.jpeg";

  // Play Icon
  import PlayIcon from "@/assets/img/icons/Play.png";

export const POST = [
  {
    id: 1,
    slug: "juego-1",
    title: "Juego 1",
    imgSrc: GameImgExample,
    imgAlt: "Photo example",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 2,
    slug: "juego-2",
    title: "Juego 2",
    imgSrc: GameImgExample,
    imgAlt: "Photo example",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 3,
    slug: "juego-3",
    title: "Juego 3",
    imgSrc: GameImgExample,
    imgAlt: "Photo example",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 4,
    slug: "juego-4",
    title: "Juego 4",
    imgSrc: GameImgExample,
    imgAlt: "Photo example",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 5,
    slug: "juego-5",
    title: "Juego 5",
    imgSrc: GameImgExample,
    imgAlt: "Photo example",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 6,
    slug: "juego-6",
    title: "Juego 6",
    imgSrc: GameImgExample,
    imgAlt: "Photo example",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 7,
    slug: "juego-7",
    title: "Juego 7",
    imgSrc: GameImgExample,
    imgAlt: "Photo example",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 8,
    slug: "juego-8",
    title: "Juego 8",
    imgSrc: GameImgExample,
    imgAlt: "Photo example",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  }
];

const GamesGalleryView = () => {
  return (
    <>
      <Header />
      <main className="sect-content">
        <div className="title-view">
          <h1>Galería de Juegos </h1>
        </div>
        <section className="games-gallery-container">
          { POST.map ((post) => (
            <div className="games-gallery-item" key={post.id}>
              <div className="game-gallery-img">
                <Image src={post.imgSrc} alt={post.imgAlt} />
              </div>
              <div className="game-gallery-content">
                <h2>{post.title}</h2>
                <Link href={`/games/${post.slug}`} className="btn-play-gallery">
                  Jugar
                  <Image src={PlayIcon} alt="Jugar Icono" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}

export default GamesGalleryView