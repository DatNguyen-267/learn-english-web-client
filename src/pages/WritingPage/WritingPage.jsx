import React, { Component } from "react";
import "./WritingPage.scss";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../redux/actions/index";
import { SERVER_URL } from "../../constants";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


axios.defaults.withCredentials = true;
function WritingPage() {

  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const data = useSelector((state) => state.store.data);
  const gammar = useSelector((state) => state.writeGrammar.data);
  const [listpart, setlistpart] = useState();
  useEffect(() => {
    handleload()
    dispatch(actions.getWriteGrammarRequest())
    console.log("load")
  }, [])
  const handleTranfer = (e, value) => {
    console.log("value: ", value)

    var list_item = document.querySelectorAll('.writing-page__tab-item')
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
          `${SERVER_URL}/write`,
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
      <div class="writing-page-header">
        <div class="writing-page-title base__page-heading">
          <h1>Luyện viết</h1>
          <span>
            Chia làm từng phần, hỗ trợ việc luyện tập của bạn!
          </span>
        </div>
      </div>
      <div class="writing-page-content">
        <div className="writing-page__tab">
          <a className='writing-page__tab-item active' href='#' onClick={(e) => handleTranfer(e, 0)}>
            <i className="fas fa-spell-check"></i>
            <span>Câu hỏi</span>
          </a>
          <a className='writing-page__tab-item' href='#' onClick={(e) => handleTranfer(e, 1)}>
            <i className="fas fa-book"></i>
            <span>Hướng dẫn</span>
          </a>
        </div>
        {
          tab == 0 && <div class="row writing-list">
            <div className="col l-4 m-6 c-12">
              <Link to={`/writing/Part1`}>
                <div className="writing-item">
                  <div
                    className="writing-item__img"
                    // style={{
                    //   backgroundImage:
                    //     "url('https://estudyme.com/wp-content/uploads/2021/06/toeic-writing-5.jpg')",
                    // }}
                  ></div>
                  <div className="writing-item__gr">
                    <div className="writing-item__name">Write a sentence based on a picture</div>
                    <div className="writing-item__info">
                      <div className="writing-item__time">
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
              <Link to={`/writing/Part2`}>
                <div className="writing-item">
                  <div
                    className="writing-item__img"
                    // style={{
                    //   backgroundImage:
                    //     "url('https://estudyme.com/wp-content/uploads/2021/06/toeic-writing-5.jpg')",
                    // }}
                  ></div>
                  <div className="writing-item__gr">
                    <div className="writing-item__name">Respond to a written request</div>
                    <div className="writing-item__info">
                      <div className="writing-item__time">
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
              <Link to={`/writing/Part3`}>
                <div className="writing-item">
                  <div
                    className="writing-item__img"
                    // style={{
                    //   backgroundImage:
                    //     "url('https://estudyme.com/wp-content/uploads/2021/06/toeic-writing-5.jpg')",
                    // }}
                  ></div>
                  <div className="writing-item__gr">
                    <div className="writing-item__name">Write an opinion essay</div>
                    <div className="writing-item__info">
                      <div className="writing-item__time">
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
          </div>
        }
        {
          tab == 1 &&
          <div className="row writing-list">
            {
              gammar ?
                gammar.map((item, index) => {
                  return (
                    <div className="col l-12 m-12 c-12" key={index}>
                      <Link to={`/writing/write_grammar/${item._id}`}>
                        <div className="writing-grammar-item">
                          <div
                            className="writing-grammar-item__img"
                            style={{
                              backgroundImage: `url('${item.img}')`,
                            }}
                          ></div>
                          <div className="writing-grammar-item__gr">
                            <div className="writing-grammar-item__name">{item.name}</div>
                            <div className="writing-grammar-item__info">
                              <span className="writing-grammar-item__des">
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

export default WritingPage;
