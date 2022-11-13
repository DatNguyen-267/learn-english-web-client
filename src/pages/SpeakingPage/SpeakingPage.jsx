import React, { Component } from "react";
import "./SpeakingPage.scss";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../redux/actions/index";
import { SERVER_URL } from "../../constants";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


axios.defaults.withCredentials = true;
function SpeakingPage() {

  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const { speak, speakSlow } = useSelector((state) => state.speak);
  const data = useSelector((state) => state.store.data);
  const gammar = useSelector((state) => state.speakGrammar.data);
  const [listpart, setlistpart] = useState();
  useEffect(() => {

    handleload()
    dispatch(actions.getSpeakGrammarRequest())

    console.log("load")
  }, [])
  const handleTranfer = (e, value) => {
    console.log("value: ", value)

    var list_item = document.querySelectorAll('.speaking-page__tab-item')
    list_item.forEach((item, index) => {
      item.classList.remove('active')
      if (index == value) {
        item.classList.add('active')
      }
    })
    setTab(value)
  }
  const handleload = () => {
    try {
      const getlist = async () => {
        let res = await axios.get(
          `${SERVER_URL}/speak`,
        );

        if (res.data) {
          let list = []
          res.data.forEach((item, index) => {
            list.push(item.type)
          })
          setlistpart(list)
        }

      };
      getlist();
    } catch (error) { }

  };
  const CountPart = (value) => {
    let i = 0;
    if (listpart) {
      listpart.forEach(item => {
        if (item == value) {
          i++
        }
      })
    }
    return i
  }
  return (
    <div className="grid wide">
      <div class="speaking-page-header">
        <div class="speaking-page-title base__page-heading">
          <h1>Luyện nói</h1>
          <span>
            Chia làm từng phần, hỗ trợ việc luyện tập của bạn!
          </span>
        </div>
      </div>
      <div class="speaking-page-content">
        <div className="speaking-page__tab">
          <a className='speaking-page__tab-item active' href='#' onClick={(e) => handleTranfer(e, 0)}>
            <i className="fas fa-spell-check"></i>
            <span>Câu hỏi</span>
          </a>
          <a className='speaking-page__tab-item' href='#' onClick={(e) => handleTranfer(e, 1)}>
            <i className="fas fa-book"></i>
            <span>Hướng dẫn</span>
          </a>
        </div>
        {
          tab == 0 && <div className="row speaking-list">
            <div className="col l-4 m-6 c-12">
              <Link to={`/speaking/Part1`}>
                <div className="speaking-item">
                  <div
                    className="speaking-item__img"
                    style={{
                      backgroundImage:
                        "url('https://jaxtina.com/wp-content/uploads/2021/10/toeic-speaking.jpg')",
                    }}
                  ></div>
                  <div className="speaking-item__gr">
                    <div className="speaking-item__name">Read aloud</div>
                    <div className="speaking-item__info">
                      <div className="speaking-item__time">
                        Số bài: {CountPart("Part1")}
                      </div>
                      {/* <div className="test-item__ques">
                    Câu hỏi: 
                  </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col l-4 m-6 c-12">
              <Link to={`/speaking/Part2`}>
                <div className="speaking-item">
                  <div
                    className="speaking-item__img"
                    style={{
                      backgroundImage:
                        "url('https://jaxtina.com/wp-content/uploads/2021/10/toeic-speaking.jpg')",
                    }}
                  ></div>
                  <div className="speaking-item__gr">
                    <div className="speaking-item__name">Describle a picture</div>
                    <div className="speaking-item__info">
                      <div className="speaking-item__time">
                        Số bài: {CountPart("Part2")}
                      </div>
                      {/* <div className="test-item__ques">
                    Câu hỏi: 
                  </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col l-4 m-6 c-12">
              <Link to={`/speaking/Part3`}>
                <div className="speaking-item">
                  <div
                    className="speaking-item__img"
                    style={{
                      backgroundImage:
                        "url('https://jaxtina.com/wp-content/uploads/2021/10/toeic-speaking.jpg')",
                    }}
                  ></div>
                  <div className="speaking-item__gr">
                    <div className="speaking-item__name">Respond to Questions</div>
                    <div className="speaking-item__info">
                      <div className="speaking-item__time">
                        Số bài: {CountPart("Part3")}
                      </div>
                      {/* <div className="test-item__ques">
                    Câu hỏi: 
                  </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col l-4 m-6 c-12">
              <Link to={`/speaking/Part4`}>
                <div className="speaking-item">
                  <div
                    className="speaking-item__img"
                    style={{
                      backgroundImage:
                        "url('https://jaxtina.com/wp-content/uploads/2021/10/toeic-speaking.jpg')",
                    }}
                  ></div>
                  <div className="speaking-item__gr">
                    <div className="speaking-item__name">Respond to questions with information</div>
                    <div className="speaking-item__info">
                      <div className="speaking-item__time">
                        Số bài: {CountPart("Part4")}
                      </div>
                      {/* <div className="test-item__ques">
                    Câu hỏi: 
                  </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col l-4 m-6 c-12">
              <Link to={`/speaking/Part5`}>
                <div className="speaking-item">
                  <div
                    className="speaking-item__img"
                    style={{
                      backgroundImage:
                        "url('https://jaxtina.com/wp-content/uploads/2021/10/toeic-speaking.jpg')",
                    }}
                  ></div>
                  <div className="speaking-item__gr">
                    <div className="speaking-item__name">Express an Opinion</div>
                    <div className="speaking-item__info">
                      <div className="speaking-item__time">
                        Số bài: {CountPart("Part5")}
                      </div>
                      {/* <div className="test-item__ques">
                    Câu hỏi: 
                  </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        }
        {
          tab == 1 &&
          <div className="row speaking-list">
            {
              gammar ?
                gammar.map((item, index) => {
                  return (
                    <div className="col l-12 m-12 c-12" key={index}>
                      <Link to={`/speaking/speak_grammar/${item._id}`}>
                        <div className="speaking-grammar-item">
                          <div
                            className="speaking-grammar-item__img"
                            style={{
                              backgroundImage: `url('${item.img}')`,
                            }}
                          ></div>
                          <div className="speaking-grammar-item__gr">
                            <div className="speaking-grammar-item__name">{item.name}</div>
                            <div className="speaking-grammar-item__info">
                              <span className="speaking-grammar-item__des">
                               {
                                item.note
                               }
                              </span>
                             
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })
                : ""
            }


          </div>
        }
      </div>
    </div>
  );
}

export default SpeakingPage;
