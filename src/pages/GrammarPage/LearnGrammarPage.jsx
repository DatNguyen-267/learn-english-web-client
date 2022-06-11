import React, { Component } from "react";
import "./LearnGrammarPage.scss";
import LsTopic from "./../../components/LsTopic/LsTopic";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "./../../redux/actions/index";

function LearnGrammarPage() {
  const param = useParams();
  const id = param.id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.findTopicGammmarRequest(id));
  }, [dispatch]);

  const data = useSelector((state) => state.grammarTopic.data);
  let grammartopic = {};
  for (const item in data) {
    if (data[item]._id === id) {
      grammartopic = data[item];
    }
  }
  let list_part = [];
  if (grammartopic && grammartopic.list_part) {
    list_part = grammartopic.list_part;
  }
  return (
    <div className="grid wide">
      <div className="learn-grammar-page">
        <div className="learn-grammar-page__header">
          <div className="learn-grammar-page__header-content">
            <div className="learn-grammar-page__header-content-title">
              <h1>{grammartopic.name}</h1>
            </div>
          </div>
        </div>
        <div className="learn-grammar-page-content">
          <div className="news-content">
            {list_part.map((item, index) => {
              return (
                <div className="item-content">
                  <div className="first-content">
                    <p className="first-content-title" id={index + 1}>
                      {index + 1}. {item.name}
                    </p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
              );
            })}
          </div>
          <div className="nav-bar-content">
            {list_part && list_part.length > 0 ? (
              <div className="table-content">
                <p className="toc_title">Mục lục</p>
                <ul>
                  {list_part.map((item, index) => {
                    return (
                      <li>
                        <a href={`#${index + 1}`}>
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

export default LearnGrammarPage;
