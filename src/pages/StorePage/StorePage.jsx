import React, { Component } from "react";
import "./StorePage.scss";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../redux/actions/index";
import { SERVER_URL } from "../../constants";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { NoteStore } from '../../components/Store/NoteStore'
import { Note } from "./../../components/Note/Note";
import { NoteReport } from "./../../components/Note/NoteReport";

axios.defaults.withCredentials = true;
function StorePage() {
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user.data);
  const [currentData, setCurrentData] = useState({
    word_id: undefined,
    user_id: undefined,
    word: undefined,
  });
  const [popUp, setpopUp] = useState(false);
  let id = "";
  if (user && user._id) {
    id = user._id;
  }
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.data)
  const [tab, setTab] = useState(0);
  const [showNote, setShowNote] = useState(false);
  const [titleNoteChoose, setTitleNoteChoose] = useState();
  const isUpdateSuccess = useSelector(state => state.note.isUpdateSuccess)
  const isRemoveSuccess = useSelector(state => state.note.isRemoveSuccess)
  const { speak, speakSlow } = useSelector((state) => state.speak);
  const data = useSelector((state) => state.store.data);
  const [listword, setlistword] = useState();
  const [listnote, setlistnote] = useState();
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    console.log("token: ", token);
    // if(token){
    //     dispatch(actions.turn_off_popup_login())
    // }
    // else{
    //     console.log("token",token)
    //     dispatch(actions.turn_on_popup_login())
    // }
  }, [token]);
  useEffect(() => {
    if (user) {
      dispatch(actions.findStoreWordRequest(user._id));
      console.log("user: ", user._id);
    }
  }, [user]);
  useEffect(() => {
    var input = document.getElementById('search-input')
    if (input) {
      input.value = null
    }
    if (notes) {
      setlistnote(notes);
    }
    if (data && data.list_word) {
      setlistword(data.list_word);
    }

    console.log("data: ", data);
  }, [data, notes, tab])
  useEffect(() => {
    setShowReport(true)
  }, [isRemoveSuccess, dispatch])
  console.log("listword: ", listword)

  const handleSpeech = (sentence) => {
    // console.log(value);
    // speak.text = value;
    // speechSynthesis.speak(speak);
    let audio = new Audio(`https://600tuvungtoeic.com//audio/${sentence}.mp3`);
    audio.play();
  };
  const handleDelete = (id, user, word) => {
    console.log("word_id: ", id);
    console.log("user_id: ", user._id);
    setCurrentData({
      ...currentData,
      word_id: id,
      user_id: user._id,
      word: word,
    });
    setpopUp((prev) => true);
  };
  const handleYes = () => {
    try {
      const removeWordToStore = async () => {
        let res = await axios.post(
          `${SERVER_URL}/courses/voca/removeWordOfStore`,
          {
            idWord: currentData.word_id,
          },
          {
            headers: { Authorization: token },
          }
        );
        if (res.data === "success") {
          dispatch(actions.findStoreWordRequest(currentData.user_id));
        }
        console.log(res);
      };
      removeWordToStore();
      setpopUp((prev) => false);
    } catch (error) {
      setpopUp((prev) => false);
    }
  };
  const handleNo = () => {
    setpopUp((prev) => false);
  };
  const handleTranfer = (e, value) => {
    console.log("value: ", value)

    var list_item = document.querySelectorAll('.store-page__tab-item')
    list_item.forEach((item, index) => {
      item.classList.remove('active')
      if (index == value) {
        item.classList.add('active')
      }
    })
    setTab(value)
  }
  const handleLoadNote = () => {
    dispatch(actions.getNoteRequest())
  }
  const handleSearch = () => {
    var value = document.getElementById('search-input').value
    console.log(value)
    // if(input.value != null){
    //   value = input.value
    // }
    if (value) {
      if (tab == 0) {
        var listData = []
        listword.forEach((item, index) => {
          if (item.english.search(value) == 0) {
            listData.push(item)
          }
        })
        setlistword(listData)
      }
      if (tab == 2) {
        var listData = []
        notes.forEach((item, index) => {
          if (item.title.search(value) == 0) {
            listData.push(item)
          }
        })
        setlistnote(listData)
      }
    }
    else {
      if (notes) {
        setlistnote(notes);
      }
      if (data && data.list_word) {
        setlistword(data.list_word);
      }
    }
  }
  const handleKeyPress = (e) => {

    if (e.which == 13) {
      e.preventDefault()
      handleSearch()
    }

  }
  const handleOK = () => {
    setShowReport(false)
    handleLoadNote()
  };
  return (
    <div className="grid wide">
      {showReport && isRemoveSuccess != undefined && (
        <NoteReport
          title={isRemoveSuccess ? "Success!!!" : "Warning!!!"}
          titlesub={isRemoveSuccess ? "Đã xóa thành công!!!" : "Không thể xóa Note!!!"}
          onClick={handleOK}
          modalClick={handleOK}
          btnname={"OK"}
        ></NoteReport>

      )}
      <Note
        notes={notes}
        showNote={showNote}
        setShowNote={setShowNote}
        titleNoteChoose={titleNoteChoose}
        // handlePost={handlePost}
        isUpdateSuccess={isUpdateSuccess}
        handleLoadNote={handleLoadNote}
      ></Note>
      {popUp && (
        <div className="pop-up">
          <div className="modal">
            <div className="modal-overlay" onClick={handleNo}></div>
            <div className="test-pg__modal-body modal-body">
              <div className="store-pg__modal-title">
                Bạn muốn xóa từ <b>{currentData.word}</b> ra khỏi danh sách
              </div>
              {/* <div className="store-pg__modal-sub-title">Test 1</div> */}

              <div className="store-pg__modal-option">
                <button onClick={handleNo}>No</button>
                <button onClick={handleYes}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div class="store-page-header">
        <div class="store-page-title base__page-heading">
          <h1>Kho từ vựng</h1>
          <span>
            Lưu lại từ vựng bạn quan tâm, giúp đỡ quá trình ôn tập của bạn!
          </span>
        </div>
      </div>
      {token && (
        <div class="store-page-content">
          <div className="store-page__tab">
            <a className='store-page__tab-item active' href='#' onClick={(e) => handleTranfer(e, 0)}>
              <i className="fas fa-book"></i>
              <span>Từ vựng</span>
            </a>
            <a className='store-page__tab-item' href='#' onClick={(e) => handleTranfer(e, 1)}>
              <i className="fas fa-spell-check"></i>
              <span>Câu hỏi</span>
            </a>
            <a className='store-page__tab-item' href='#' onClick={(e) => handleTranfer(e, 2)}>
              <i class="fas fa-edit"></i>
              <span>NotePad</span>
            </a>
          </div>
          <div className='store-page__search'>
            <div className='store-page__search-input'>
              <input onKeyPress={handleKeyPress} type="text" id="search-input" placeholder='Search by name' />
              <i class="fas fa-search" onClick={handleSearch}></i>
            </div>
          </div>
          <div class="row store-list">
            {tab == 0 && listword ? listword.map((item, index) => {
              return (
                <div class="col l-3 m-12 c-12">
                  <div class="store-item">
                    <div class="store-item__header">
                      <div class="store-item__mid">
                        <div class="store-item__mid-header">{item.english}</div>
                      </div>
                      <div class="store-item__right">
                        <i
                          class="store-item__right-icon fas fa-volume-up"
                          onClick={() => handleSpeech(item.english)}
                        >
                          <audio
                            src={`https://600tuvungtoeic.com/audio/${item.english}.mp3`}
                          ></audio>
                        </i>
                        <i
                          class="store-item__right-icon fas fa-window-close"
                          onClick={() =>
                            handleDelete(item._id, user, item.english)
                          }
                        ></i>
                      </div>
                    </div>
                    {item.meanings.map((item2, index2) => {
                      return (
                        <div class="store-item__content">
                          <div class="store-item__content-type">
                            ({item2.partOfSpeech})
                          </div>
                          <div class="store-item__content-mean">
                            <span>
                              {item2.synonyms} ({item2.vietnamese})
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }) : ""
            }
            {
              tab == 2 && notes && listnote ?

                listnote.map((item, index) => {
                  return (
                    <div class="col l-3 m-12 c-12">
                      <NoteStore
                        note={item}
                        index={index}
                        setShowNote={setShowNote}
                        setTitleNoteChoose={setTitleNoteChoose}
                        isRemoveSuccess={isRemoveSuccess}
                        handleLoadNote={handleLoadNote}
                      ></NoteStore>
                    </div>
                  )
                }) : ""
            }
          </div>
        </div>
      )}
      {!token && (
        <div class="store-page-content-no-login">
          <div className="store-page__action">
            <Link to="/login" className="store-page__action-login">
              Đăng nhập
            </Link>
          </div>
          <div className="store-page__sub">
            Đăng nhập để xem tài liệu của bạn!!!
          </div>
        </div>
      )}
    </div>
  );
}

export default StorePage;
