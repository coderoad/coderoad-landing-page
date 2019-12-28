import React from "react"

import vscode from "../images/vscode.png"
import githubFolder from "../images/githubFolder.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="What is CodeRoad?"
      description="A VSCode extension for playing coding tutorials. Think CodeCademy, but in your editor."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
       <div>
        <h3>Real World Coding</h3>
        <p style={{ color: COLORS.gray }}>
           Your editor. Your plugins. Save with Git. Deploy.
        </p>
      </div>
      <div>
        <img src={vscode} alt="VSCode Editor logo" width={220} />
      </div>

      <div>
        <h3>Own Your Learning</h3>
        <p style={{ color: COLORS.gray }}>
           Build your portfolio from tutorials. Publishing your projects online.
        </p>
      </div>
      
      <div>
        <img src={githubFolder} alt="Folder with GitHub icon" width={300} />
      </div>
    </content>
  </div>
)

export default Content
