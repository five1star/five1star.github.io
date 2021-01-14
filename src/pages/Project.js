import React from "react"
import { Link } from "react-router-dom"

import "./CSS/Project.css"
import myraspberry from "../img/myraspberry.png"
import here from "../img/here.png"

function Project(props) {
  return (
    <div className="projectinner">
      <section>
        <h1>프로젝트</h1>
        <p className="pb-8">진행한 프로젝트 안내입니다.</p>
        <hr />
      </section>
      <section className="projectEntry">
        <ul className="flex flex-wrap justify-center">
          <Link to={`/myraspberry`}>
            <li>
              <img src={myraspberry} alt="projectthumnail" />
              <div className="pro_summary">
                <h2>MY RASPBERRY</h2>
                <p>Backend, Team Leader</p>
                <p>코드스테이츠 파이널 프로젝트(4인/4주)</p>
              </div>
            </li>
          </Link>

          <Link to={`/here`}>
            <li>
              <img src={here} alt="projectthumnail" />
              <div className="pro_summary">
                <h2>맛집, 여기지</h2>
                <p>Backend, TeamLeader</p>
                <p>코드스테이츠 퍼스트 프로젝트(4인/2주)</p>
              </div>
            </li>
          </Link>
        </ul>
      </section>
    </div>
  )
}

export default Project
