import React from 'react'

const GameSlug = ({params}) => {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  )
}

export default GameSlug