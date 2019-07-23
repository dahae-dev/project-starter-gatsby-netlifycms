import React from "react"

import Image from "./image"

const Footer = () => (
  <div style={{ padding: `2.45rem 0`, textAlign: `center` }}>
    © {new Date().getFullYear()}, provided by
    <a href="https://www.asiance.com/">
      <div style={{ maxWidth: `150px`, margin: `0 auto`}}>
        <Image />
      </div>
    </a>
  </div>
)

export default Footer
