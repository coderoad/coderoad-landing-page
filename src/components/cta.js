import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Be the first to try out CodeRoad. We'd love your feedback!"
    />
    <a href='http://eepurl.com/gKj3bD' target='_blank'>
    <Button>Get Early Access</Button>
    </a>
  </div>
)

export default CallToAction
