import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#f6174d`,
      marginBottom: `1.45rem`,
    }}
  >
    <Container>
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 0`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </Container>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
