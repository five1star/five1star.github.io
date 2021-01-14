import React from "react"
import { Link } from "react-router-dom"
import "./CSS/Home.css"
import ts from "../img/ts_icon.png"
import express from "../img/express_icon.png"
import handshake from "../img/handshake_icon.png"
import myraspberry from "../img/myraspberry_logo.png"
import here from "../img/here_logo.png"

function Home(props) {
  return (
    <div className="inner">
      <section className="introheader w-full">
        <h2>Hello Stranger!</h2>
        <p>백엔드 엔지니어 오한별입니다. </p>
      </section>
      <section className="introskills flex flex-col items-center">
        <h3>Stacks</h3>
        <p>
          <a href="/readme" className="text_emphasize">
            Readme
          </a>
          에서 자세히 확인하실 수 있습니다.
        </p>
        <div className="skillset w-full inline-flex mt-16">
          <div className="skills">
            <img src={ts} alt="typescript" />
            <p className="mt-6">Typescript</p>
            <p>안정적인 프로젝트 진행을 위해</p>
            <p>타입스크립트를 사용합니다</p>
          </div>
          <div className="skills">
            <img src={express} alt="expressJs" />
            <p className="mt-6">Framework</p>
            <p>Express와 Typeorm으로</p>
            <p>RESTful API를 구축합니다.</p>
          </div>
          <div className="skills">
            <img src={handshake} alt="handshake" />
            <p className="mt-6">Team Up!</p>
            <p>Git, Slack, Notion 등</p>
            <p>협업과 협업 툴에 익숙합니다.</p>
          </div>
        </div>
      </section>
      <section className="introprojects  flex flex-col items-center">
        <h3>Project</h3>

        <div className="projectset w-full inline-flex flex-wrap items-center mt-10">
          <div className="projectbox flex justify-center items-center">
            <img
              src={myraspberry}
              alt="myraspberry"
              style={{ width: "250px" }}
            />
            <span className="pro_caption flex flex-col justify-end items-end pr-6 pb-6">
              <p>팀 프로젝트(4인/4주)</p>
              <p></p>
              <p>비선호기반 영화 추천 서비스</p>
              <p>2020.11 - 2020.12</p>

              <button>
                <Link to="/myraspberry">보러가기 → </Link>
              </button>
            </span>
          </div>
          <div className="projectbox flex justify-center items-center">
            <img src={here} alt="here" style={{ width: "250px" }} />
            <span className="pro_caption flex flex-col justify-end items-end pr-6 pb-6">
              <p>팀 프로젝트(2인/2주) </p>
              <p>인플루언서 추천 맛집 소개 서비스</p>
              <p>2020.11 - 2020.11</p>
              <button>
                <Link to="/here">보러가기 → </Link>
              </button>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
