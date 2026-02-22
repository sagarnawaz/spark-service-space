const HeroNetwork = () => {
  const links = [
    { id: 1, d: 'M165 140 L240 110 L318 146 L372 118', delay: '' },
    { id: 2, d: 'M150 214 L226 176 L300 210 L362 188', delay: 'delay' },
    { id: 3, d: 'M170 278 L250 246 L326 282 L380 252', delay: '' },
    { id: 4, d: 'M208 126 L214 214 L250 302', delay: 'delay' },
    { id: 5, d: 'M332 126 L326 214 L286 302', delay: '' },
  ]
  const nodes = [
    { x: 165, y: 140 }, { x: 240, y: 110 }, { x: 318, y: 146 }, { x: 372, y: 118 },
    { x: 150, y: 214 }, { x: 226, y: 176 }, { x: 300, y: 210 }, { x: 362, y: 188 },
    { x: 170, y: 278 }, { x: 250, y: 246 }, { x: 326, y: 282 }, { x: 380, y: 252 },
  ]

  return (
    <svg viewBox='0 0 540 420' className='hero-network' aria-hidden='true'>
      <defs>
        <linearGradient id='sovertickGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#B06EFF' />
          <stop offset='100%' stopColor='#FF6B6B' />
        </linearGradient>
        <radialGradient id='orbGlow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' stopColor='rgba(176,110,255,0.24)' />
          <stop offset='100%' stopColor='rgba(176,110,255,0.02)' />
        </radialGradient>
        <radialGradient id='orbCore' cx='48%' cy='42%' r='58%'>
          <stop offset='0%' stopColor='rgba(255,255,255,0.14)' />
          <stop offset='100%' stopColor='rgba(255,255,255,0.02)' />
        </radialGradient>
        <clipPath id='neuralOrbClip'>
          <circle cx='270' cy='210' r='128' />
        </clipPath>
        <filter id='orbLineGlow' x='-40%' y='-40%' width='180%' height='180%'>
          <feGaussianBlur stdDeviation='3' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      <circle cx='270' cy='210' r='170' fill='url(#orbGlow)' />
      <circle cx='270' cy='210' r='128' fill='rgba(11,15,26,0.72)' />
      <circle cx='270' cy='210' r='128' fill='url(#orbCore)' />
      <circle cx='270' cy='210' r='128' fill='none' stroke='rgba(255,255,255,0.2)' />

      <g clipPath='url(#neuralOrbClip)' className='orb-rotor'>
        {links.map(link => (
          <path
            key={link.id}
            d={link.d}
            stroke='url(#sovertickGradient)'
            strokeWidth='1.8'
            fill='none'
            filter='url(#orbLineGlow)'
            className={`network-line ${link.delay}`}
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={`${node.x}-${node.y}-${i}`}
            cx={node.x}
            cy={node.y}
            r='4.3'
            fill='url(#sovertickGradient)'
            className='network-node'
          />
        ))}
      </g>

      <circle cx='270' cy='210' r='148' fill='none' stroke='rgba(176,110,255,0.24)' />
      <circle
        cx='270'
        cy='210'
        r='158'
        fill='none'
        stroke='rgba(255,107,107,0.2)'
        strokeDasharray='10 14'
        className='orb-ring'
      />
    </svg>
  )
}

export default HeroNetwork
