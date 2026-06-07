"use client"

export function SpiderWeb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Radial lines */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180
        const x2 = 200 + 200 * Math.cos(angle)
        const y2 = 200 + 200 * Math.sin(angle)
        return (
          <line
            key={`radial-${i}`}
            x1="200"
            y1="200"
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
          />
        )
      })}
      
      {/* Concentric web rings */}
      {[30, 60, 90, 120, 150, 180].map((radius, ringIndex) => (
        <polygon
          key={`ring-${ringIndex}`}
          points={[...Array(16)]
            .map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180
              const x = 200 + radius * Math.cos(angle)
              const y = 200 + radius * Math.sin(angle)
              return `${x},${y}`
            })
            .join(" ")}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity={0.3 + ringIndex * 0.1}
        />
      ))}

      {/* Center circle */}
      <circle cx="200" cy="200" r="8" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

// Full page connected spider web background
export function SpiderWebBackground({ className = "" }: { className?: string }) {
  // Center of the web
  const cx = 960
  const cy = 540
  
  // Number of radial spokes
  const numSpokes = 32
  
  // Ring distances from center (concentric polygons)
  const rings = [80, 160, 260, 380, 520, 700, 920, 1200]
  
  // Calculate intersection points for all spokes at all rings
  const getPoint = (ring: number, spokeIndex: number) => {
    const angle = (spokeIndex * (360 / numSpokes) * Math.PI) / 180
    // Stretch horizontally to fill widescreen
    const x = cx + ring * 1.6 * Math.cos(angle)
    const y = cy + ring * Math.sin(angle)
    return { x, y }
  }
  
  // Generate all junction nodes (intersection points)
  const nodes: { x: number; y: number; ring: number; spoke: number }[] = []
  rings.forEach((ring, ringIndex) => {
    for (let spoke = 0; spoke < numSpokes; spoke++) {
      const point = getPoint(ring, spoke)
      nodes.push({ ...point, ring: ringIndex, spoke })
    }
  })
  
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Radial spokes from center to outer edge - all connected through center */}
      {[...Array(numSpokes)].map((_, i) => {
        const outerPoint = getPoint(rings[rings.length - 1], i)
        return (
          <line
            key={`spoke-${i}`}
            x1={cx}
            y1={cy}
            x2={outerPoint.x}
            y2={outerPoint.y}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.35"
          />
        )
      })}
      
      {/* Concentric ring connections - polygon connecting all nodes at each ring level */}
      {rings.map((ring, ringIndex) => {
        const points = [...Array(numSpokes)].map((_, spoke) => {
          const p = getPoint(ring, spoke)
          return `${p.x},${p.y}`
        }).join(" ")
        
        return (
          <polygon
            key={`ring-${ringIndex}`}
            points={points}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity={0.2 + ringIndex * 0.05}
          />
        )
      })}
      
      {/* Junction nodes at every intersection point */}
      {nodes.map((node, i) => (
        <circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.ring < 3 ? 3 : 2}
          fill="currentColor"
          opacity={0.25 + node.ring * 0.03}
        />
      ))}
      
      {/* Center hub node */}
      <circle cx={cx} cy={cy} r="6" fill="currentColor" opacity="0.4" />
      
      {/* Spiral connecting threads between rings for extra web cohesion */}
      {[...Array(numSpokes)].map((_, spoke) => {
        // Connect each spoke's rings with diagonal threads to adjacent spokes
        const nextSpoke = (spoke + 1) % numSpokes
        
        return rings.slice(0, -1).map((_, ringIndex) => {
          const p1 = getPoint(rings[ringIndex], spoke)
          const p2 = getPoint(rings[ringIndex + 1], nextSpoke)
          
          return (
            <line
              key={`spiral-${spoke}-${ringIndex}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="currentColor"
              strokeWidth="0.75"
              opacity="0.15"
            />
          )
        })
      })}
    </svg>
  )
}

export function SpiderWebCorner({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corner radial lines - more lines */}
      {[0, 12, 24, 36, 48, 60, 72, 84, 90].map((deg, i) => {
        const angle = (deg * Math.PI) / 180
        const x2 = 200 * Math.cos(angle)
        const y2 = 200 * Math.sin(angle)
        return (
          <line
            key={`corner-radial-${i}`}
            x1="0"
            y1="0"
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
          />
        )
      })}
      
      {/* Corner arcs - more visible */}
      {[30, 60, 90, 120, 150, 180].map((radius, arcIndex) => (
        <path
          key={`arc-${arcIndex}`}
          d={`M ${radius} 0 A ${radius} ${radius} 0 0 1 0 ${radius}`}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity={0.3 + arcIndex * 0.1}
        />
      ))}
    </svg>
  )
}
