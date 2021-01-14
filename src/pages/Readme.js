import React from "react"
import { Link } from "react-router-dom"
import "./CSS/Readme.css"

import backend from "../img/backend_icon.png"
import frontend from "../img/frontend_icon.png"
import tools from "../img/tools.png"

import { SiTypescript, SiReact, SiRedux, SiSwagger } from "react-icons/si"
import { FaRegHandshake, FaGoogle } from "react-icons/fa"
import { RiMovieFill } from "react-icons/ri"
import { GrMysql, GrDocumentPdf } from "react-icons/gr"
import { IoLogoNodejs } from "react-icons/io"
import { FaGitSquare } from "react-icons/fa"

function Readme(props) {
  return (
    <div className="introinner">
      <div className="resumeArea flex flex-col justify-end">
        <Link
          to={{
            pathname: "http://bit.ly/3qkFFpO",
          }}
          target="_blank"
          style={{
            width: "100%",
          }}
        >
          <div className="notionresume  w-full inline-flex items-center cursor-pointer pt-2">
            <GrDocumentPdf
              size={20}
              style={{ marginRight: "10px", color: "var(--main-color)" }}
            />
            이력서 다운로드
          </div>
        </Link>
      </div>
      <section className="introheader">
        <h1>백엔드 엔지니어 오한별</h1>

        <h2>‘좋은 결과물은 단 한 사람의 실력으로 결정되지 않는다.’ </h2>
        <p>
          프로그래밍을 공부하고 프로젝트를 진행하며 느낀 개발의 매력입니다.
          <br />
          나와 당신이 만났을 때 우리의 서비스는 덧셈이 아니라 제곱이 됩니다.
          <br />
          좋은 서비스를 위해 두 사람이 모이고, 세 사람이 모이면 서비스의 질은
          N의 N 제곱이 됩니다.
          <br />
          <br />
          2020년 7월 태어나 처음으로 “Hello world”를 처음 입력한 후, 매일 더 큰
          제곱의 밑수가 되어가고 있습니다.
          <br />
          이제, 나와 당신이 만나 ‘우리’라는 이름으로 무한한 제곱이 될 날을
          준비하고 있습니다.
        </p>
      </section>
      <hr />
      <section className="introstack">
        <h2>Stacks</h2>
        <p>프로젝트 혹은 개인 학습을 통해 습득한 스택 입니다.</p>
        <div className="stackArea">
          <div className="stack w-full">
            <div>
              <img src={backend} alt="backend" />
              <span className="caption">
                Backend
                <br />
                Restful API
              </span>
            </div>
            <ul className="w-full inline-flex flex-wrap justify-center">
              <li>
                <div>
                  <SiTypescript size={30} />
                </div>
                <div className="flex flex-col w-full">
                  <p>TypeScript</p>
                  <span className="w-full">
                    TS로 협업, 안전한 코딩을 추구합니다.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <IoLogoNodejs size={40} />
                </div>
                <div className="flex flex-col w-full">
                  <p>NodeJS</p>
                  <span className="w-full">
                    Express 프레임워크로 REST API 구축합니다.
                  </span>
                  <span className="w-full">
                    구조화된 프레임워크 Nest JS를 학습하고 있습니다.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <GrMysql size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>MySQL</p>
                  <span className="w-full">RDBMS 중 MYSQL을 사용합니다. </span>
                  <span className="w-full">ORM은 Typeorm을 사용합니다. </span>
                </div>
              </li>
              <li>
                <div>
                  <SiSwagger size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>MySQL</p>
                  <span className="w-full"> Swagger를 사용해 개발자간</span>
                  <span className="w-full">원활한 소통을 추구합니다.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="stack w-full inline-flex mt-8">
            <div>
              <img src={frontend} alt="frontend" />
              <span className="caption">
                Frontend
                <br />
                React SPA
              </span>
            </div>
            <ul className="w-full inline-flex flex-wrap justify-center">
              <li>
                <div>
                  <SiReact size={30} />
                </div>
                <div className="flex flex-col w-full">
                  <p>ReactJS</p>
                  <span className="w-full">
                    TSX · Hook 로 SPA를 제작합니다.
                  </span>
                  <span className="w-full">
                    Next JS를 활용한 SSR에 관심이 있습니다.
                  </span>
                </div>
              </li>{" "}
              <li>
                <div>
                  <SiRedux size={30} />
                </div>
                <div className="flex flex-col w-full">
                  <p>Redux</p>
                  <span className="w-full">Redux로 state를 관리합니다.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="stack w-full inline-flex mt-8">
            <div>
              <img src={tools} alt="tools" />
              <span className="caption">Working Tools</span>
            </div>
            <ul className="w-full inline-flex flex-wrap justify-center">
              <li>
                <div>
                  <FaGoogle size={35} />
                </div>
                <div className="flex flex-col w-full">
                  <p>GCP</p>
                  <span className="w-full">
                    GCP를 이용한 프로젝트 배포 경험이 있습니다.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <FaRegHandshake size={35} />
                </div>
                <div className="flex flex-col w-full">
                  <p>Team Work</p>
                  <span className="w-full">
                    Notion, Slack을 사용한 팀워크에 익숙합니다.
                  </span>
                  <span className="w-full">Pair Coding 경험이 풍부합니다.</span>
                </div>
              </li>

              <li>
                <div>
                  <FaGitSquare size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>Git</p>
                  <span className="w-full">
                    Git을 활용한 Workflow에 익숙합니다.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <RiMovieFill size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>Video Editing Tools</p>
                  <span className="w-full">
                    Final cut으로 간단한 Promo 영상 제작 가능합니다.
                  </span>
                  <span className="w-full">
                    Youtube 등 Live Streaming 사용 가능합니다.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />
      <section className="introsubmenu ">
        <ul className="inline-flex items-center w-full">
          <Link to="/project">
            <li>프로젝트 보러가기</li>
          </Link>
        </ul>
      </section>
    </div>
  )
}

export default Readme
