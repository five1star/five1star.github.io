import React from "react"
import "../CSS/ProCommon.css"
import here from "../../img/here.png"

function P_shapsol({ handlePrev }) {
  const linkToNotion = () => {
    window.open(
      "https://www.notion.so/3-YGM-MY-RASPBERRY-95c5108bc0774722baaf557304fa6574",
      "_blank"
    )
  }

  const linkToSite = () => {
    window.open("https://here.soltylink.com/", "_blank")
  }
  const linkToYoutube = () => {
    window.open("https://www.youtube.com/watch?v=burKD4pqgIU", "_blank")
  }

  const linkToBlog = () => {
    window.open("https://velog.io/@five1star/refelection", "_blank")
  }

  return (
    <div className="cmpprowrap">
      <h1 className="">Here</h1>
      <p className="date">2020.11 - 2020.11</p>
      <hr />
      <img src={here} alt="thumnail" />
      <button className="mb-4" onClick={linkToSite}>
        서비스 링크
      </button>
      <button className="mr-8" onClick={linkToYoutube}>
        서비스 소개 영상
      </button>
      <button className="mr-8" onClick={linkToBlog}>
        프로젝트 회고
      </button>
      <section>
        <h2 className="inline-flex items-center">
          <span className="ml-1"> My Raspberry </span>
        </h2>
        <p>인플루언서 추천 기반 맛집 소개 서비스입니다.</p>
        <p>· Position: Backend / Team Leader</p>
        <h2 className="inline-flex items-center">
          <span className="ml-1"> Stacks</span>
        </h2>
        <p>· Language : Javascript </p>
        <p>· Client : React, React-Hooks, Axios,</p>
        <p>· Server : Express, MySQL, Sequelize, JWT </p>
        <p>· Deploy : AWS(S3,EC2,RDS) </p>
        <h2 className="inline-flex items-center">
          <span className="ml-1"> Works</span>
        </h2>
        <h3>Backend</h3>
        <p>• Express Framework 기반 MVC 패턴 서버 제작</p>
        <p>• 효율적인 유저맛집 정보 관리를 위한 스키마 디자인</p>
        <p>• SSL 인증서 발급 및 HTTPS 보안 적용</p>
        <p>• 안전한 AWS 팀 사용을 위한 보안 디자인</p>
        <br />

        <h3>Project Design</h3>
        <p>• 프로젝트 매니지먼트</p>
        <p>• 프로젝트 발표 및 홍보 자료 제작</p>
        <br />

        <hr />
        <button onClick={handlePrev}>목록으로</button>
      </section>
    </div>
  )
}

export default P_shapsol
