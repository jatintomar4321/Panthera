"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"

const INTERVAL = 20// 20 milliseconds for updates
const PIXELS_PER_UPDATE = 200 // Number of pixels to update per interval
const TRANSITION_DURATION = 100 // Duration of the color transition in milliseconds

export default function FastPixelAnimation({ onComplete }) {
  const [pixels, setPixels] = useState([])
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 })
  const [isComplete, setIsComplete] = useState(false)
  const containerRef = useRef(null)

  const updateGridSize = useCallback(() => {
    if (!containerRef.current) return

    const { width, height } = containerRef.current.getBoundingClientRect()
    const pixelSize = 20 // Smaller pixel size for more granularity
    const rows = Math.ceil(height / pixelSize)
    const cols = Math.ceil(width / pixelSize)
    setGridSize({ rows, cols })
    // Start with all pixels filled
    setPixels(
      Array(rows)
        .fill()
        .map(() => Array(cols).fill(true)),
    )
  }, [])

  useEffect(() => {
    updateGridSize()
    window.addEventListener("resize", updateGridSize)
    return () => window.removeEventListener("resize", updateGridSize)
  }, [updateGridSize])

  useEffect(() => {
    if (pixels.length === 0 || isComplete) return

    const intervalId = setInterval(() => {
      setPixels((currentPixels) => {
        const newPixels = currentPixels.map((row) => [...row])
        let allEmpty = true
        for (let i = 0; i < PIXELS_PER_UPDATE; i++) {
          const row = Math.floor(Math.random() * gridSize.rows)
          const col = Math.floor(Math.random() * gridSize.cols)
          newPixels[row][col] = false // Set to empty
        }
        for (const row of newPixels) {
          if (row.some((pixel) => pixel)) {
            allEmpty = false
            break
          }
        }
        if (allEmpty) {
          setIsComplete(true)
          setTimeout(onComplete, TRANSITION_DURATION) // Delay onComplete to allow for final transitions
          clearInterval(intervalId)
        }
        return newPixels
      })
    }, INTERVAL)

    return () => clearInterval(intervalId)
  }, [pixels, gridSize, isComplete, onComplete])

  if (isComplete) return null

  return (
    <div ref={containerRef} className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
      {pixels.map((row, i) =>
        row.map((isFilled, j) => (
          <div
            key={`${i}-${j}`}
            className={`absolute ${isFilled ? "bg-white" : "bg-transparent"}`}
            style={{
              width: "20px",
              height: "20px",
              left: `${j * 20}px`,
              top: `${i * 20}px`,
              transition: `background-color ${TRANSITION_DURATION}ms ease-out`,
            }}
            aria-hidden="true"
          />
        )),
      )}
    </div>
  )
}

