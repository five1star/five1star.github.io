import React from "react"
import "./App.css"
import { Route, Switch, useHistory } from "react-router-dom"
import { Home, Nav, Project, Readme } from "./pages"
import { Myraspberry, Here } from "./components/project"

function App() {
  let history = useHistory()

  const handlePrev = () => {
    history.push("/project")
  }
  return (
    <div className="wrap">
      <header>
        <Nav />
      </header>
      <div className="main h-full bg-white">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/readme">
            <Readme />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/myraspberry">
            <Myraspberry handlePrev={handlePrev} />
          </Route>
          <Route path="/here">
            <Here handlePrev={handlePrev} />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
