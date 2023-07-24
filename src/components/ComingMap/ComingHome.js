import React from 'react'
import '../ComingMap/ComingHome.scss'

function ComingHome () {
  return (
    <section id="solar-system">
      <div id="sun" />
      <article id="mercury-trajectory">
        <div id="mercury" />
      </article>
      <article id="venus-trajectory">
        <div id="venus" />
      </article>
      <article id="earth-trajectory">
        <div id="earth" />
      </article>
      <article id="mars-trajectory">
        <div id="mars" />
      </article>
      {/* too far for my starship 🪐🚀
<article id="main-asteroid-belt-trajectory"></article>
<article id="jupiter-trajectory"></article>
<article id="saturn-trajectory"></article>
<article id="uranus-trajectory"></article
    <article id="neptune-trajectory"></article>
*/}
    </section>

  )
}

export default ComingHome
