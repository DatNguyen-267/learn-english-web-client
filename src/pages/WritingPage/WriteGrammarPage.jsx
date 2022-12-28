import React, { Component } from "react";
import "./WriteGrammarPage.scss";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../redux/actions/index";

function WriteGrammarPage() {
  const param = useParams();
  const id = param.id;
  const [list_menu, setlistmenu] = useState()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.writeGrammar.data);
  
  useEffect(() => {
    dispatch(actions.findWriteGammmarRequest(id));
  }, [dispatch]);
  useEffect(() =>{
    if(data && data.length>0){
      loadMenu()
    }
  }, [data])
  let grammartopic = {};
  for (const item in data) {
    if (data[item]._id === id) {
      grammartopic = data[item];
    }
  }
  const loadMenu = () =>{
    const listTitle = document.querySelectorAll('h2')
    let new_list_menu = []
    listTitle.forEach( item=>{
      let menu  = {
        name: item.innerText,
        href: item.id
      }  
      new_list_menu.push(menu)
    })
    setlistmenu(new_list_menu)
    console.log("list menu", list_menu)
  }
  return (
    <div className="grid wide">
      <div className="write-grammar-page">
        <div className="write-grammar-page__header">
          <div className="write-grammar-page__header-content">
            <div className="write-grammar-page__header-content-title">
              <h1>{grammartopic.name}</h1>
            </div>
          </div>
        </div>
        <div className="write-grammar-page-content">
          <div className="news-content">
              <div className="item-content">
                <div className="first-content">
                  {/* <p className="first-content-title" id={index + 1}>
                    {index + 1}. {item.name}
                  </p> */}
                </div>
                <div dangerouslySetInnerHTML={{ __html: grammartopic.content }}></div>
              </div>
          </div>
          <div className="nav-bar-content">
            {list_menu && list_menu.length > 0 ? (
              <div className="table-content">
                <p className="toc_title">Mục lục</p>
                <ul>
                  {list_menu.map((item, index) => {
                    return (
                      <li>
                        <a href={`#${item.href}`}>
                          <span>{index + 1}. </span>
                          <span> {item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteGrammarPage;
