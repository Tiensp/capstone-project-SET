import React, { useEffect } from "react"
import { method } from "../../API"


export default function Droplets() {
  useEffect(() => {
    method("GET", "/droplets")
  })
  return (
    <div>
      <h1>Droplets</h1>
    </div>
  )
}