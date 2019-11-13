import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"


export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link>
    <Link to="/about-css-modules/">About CSS</Link>

    <Header headerText={"Hello Gatsby!"}/>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)