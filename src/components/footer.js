import React from "react"

import Image from "./image"

const Footer = () => (
  <div style={{ marginTop: `3.45rem` }}>
    © {new Date().getFullYear()}, provided by
    <a href="https://www.asiance.com/">
      <div style={{ maxWidth: `300px`}}>
        <Image />
      </div>
    </a>
  </div>
)

export default Footer
