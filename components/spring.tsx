import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import { useMediaQuery } from "react-responsive";

import styles from '../styles/spring.module.scss'

const cards = [
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938358/skills/html_uccwmj.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938357/skills/css_tvskso.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938359/skills/sass_zdntr2.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938358/skills/js_ojc0sw.jpg',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938359/skills/typescript_v5vorj.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938359/skills/react_tpx2td.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938359/skills/redux_eqvtrd.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938359/skills/query_pwfz7a.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938358/skills/nodejs_cwgiro.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938358/skills/mongodb_qbyb66.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938358/skills/nextjs_z7ewm7.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938360/skills/webpack_atus90.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938357/skills/git_vvxuwl.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938358/skills/github_kk1ksh.png',
  'https://res.cloudinary.com/dbqsdxojb/image/upload/v1667938359/skills/react_native_xic1wo.png'

]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
/*  */



const Spring = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  })
  const from = (_i: number) => ({ y: 0, rot: 0, scale: 1.5, x: 370 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

  const bindX = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? 370 * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })



  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bindX(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

export default Spring



