import React from "react"
import "../CSS/ProCommon.css"
import myraspberry from "../../img/myraspberry.png"

function P_shapsol({ handlePrev }) {
  const linkToNotion = () => {
    window.open(
      "https://www.notion.so/3-YGM-MY-RASPBERRY-95c5108bc0774722baaf557304fa6574",
      "_blank"
    )
  }

  const linkToSite = () => {
    window.open("https://myraspberry.shop", "_blank")
  }
  const linkToYoutube = () => {
    window.open("https://youtu.be/jWFL_AJ6oFk", "_blank")
  }

  const linkToBlog = () => {
    window.open("https://velog.io/@five1star/retrospective", "_blank")
  }

  return (
    <div className="cmpprowrap">
      <h1 className="">MY Raspberry</h1>
      <p className="date">2020.11 - 2020.12</p>
      <hr />
      <img src={myraspberry} alt="thumnail" />
      <button className="mb-4" onClick={linkToSite}>
        서비스 링크
      </button>
      <button className="mb-4" onClick={linkToNotion}>
        서비스 소개
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
        <p>
          아마도 국내 최초?! 마이 라즈베리는 비선호 기반 영화 추천 서비스입니다.
        </p>
        <p>· Position: Backend / Team Leader</p>
        <h2 className="inline-flex items-center">
          <span className="ml-1"> Stacks</span>
        </h2>
        <p>· Language : Typescript </p>
        <p>· Client : React, React-Hooks, Redux, Axios, Sass</p>
        <p>· Server : Express, MySQL, Typeorm, Passport, JWT </p>
        <p>· Deploy : GCP(VM ware, cloud SQL), AWS(S3) </p>
        <h2 className="inline-flex items-center">
          <span className="ml-1"> Works</span>
        </h2>
        <h3>Backend</h3>
        <p>• Express Framework 기반 MVC 패턴 서버 제작</p>
        <p>• 영화,태그정보의 효율적 운용을 위한 스키마 디자인</p>
        <p>• Passport JS사용 로그인 디자인 및 JWT 적용</p>
        <p>• SSL 인증서 발급 및 HTTPS 보안 적용</p>
        <p>• 비선호 기반 영화 추천 시스템 적용</p>
        <p>• dotenv, Postman, Swagger등의 툴과 모듈 사용</p>
        <br />
        <h3>Frontend</h3>
        <p>• 소셜 로그인 클라이언트 통신 디자인 및 작성</p>
        <p>• 회원가입과 로그인 유효성 검사 로직 작성</p>
        <p>• 1차 프론트엔드 작업 후 디버깅 및 리팩터링 진행 담당</p>
        <br />
        <h3>Frontend</h3>
        <p>• 소셜 로그인 클라이언트 통신 디자인 및 작성</p>
        <p>• 회원가입과 로그인 유효성 검사 로직 작성</p>
        <p>• 1차 프론트엔드 작업 후 디버깅 및 리팩터링 진행 담당</p>
        <br />
        <h3>Project Design</h3>
        <p>• 프로젝트 Prototype 디자인 및 Mockup 제작</p>
        <p>• 프로젝트 진행 관련 Documentation 담당</p>
        <p>• 심볼 캐릭터 디자인 및 일러스트 제작</p>
        <p>• Final cut을 이용한 홍보 영상 일체 제작</p>
        <br />

        <hr />
        <button onClick={handlePrev}>목록으로</button>
      </section>
    </div>
  )
}

export default P_shapsol
