import React from "react"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <h1>Adam Clifford </h1>

<div className="alert alert-info">
  <span className="loading"></span>
  Rest of my site comming soon&hellip;
</div>

<div className="card h-card">
  <header className="card-header">About Me</header>
  <div className="card-content">
    <div className="inner grid">
      <div className="cell c4of12">

        <p><img className="u-photo" src="me.jpg" alt="Adam Clifford" />
        </p>
      </div>
      <div className="cell c8of12">
        <p className="p-note">
          Hi, my name is <span className="p-name">Adam Clifford</span> and I am a human on the Internet.
        </p>
        <p>
          You can contact me at <a href="mailto:me@adamclifford.dev"><span rel="me" className="u-email"> me@adamclifford.dev</span></a>
        </p>
        <p>
          You can find me on other websites below:
        </p>
        <ul>
          <li><a className="u-url" href="https://www.adamclifford.dev" rel="me">Blog </a></li>
          <li><a className="u-url" href="https://github.com/adamclifford" rel="me">GitHub: @adamclifford</a></li>

          <li><a className="u-url" href="https://twitter.com/adamclifford" rel="me">Twitter: @adamclifford</a></li>

          <li><a className="u-url" href="https://keybase.io/adamclifford" rel="me">Keybase: @adamclifford</a></li>
          <li><a className="u-url" href="https://www.linkedin.com/in/adamclifford/" rel="me">LinkedIn: @adamclifford</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  </Layout>
)

export default IndexPage
