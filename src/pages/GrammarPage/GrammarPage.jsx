import React, { Component } from 'react';
import './GrammarPage.scss';
import LsTopic from '../../components/Listen/LsTopic/LsTopic';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions/index';

function GrammarPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getGrammarRequest());
  }, [dispatch]);

  const listdata = useSelector((state) => state.grammar.data);

  return (
    <div className="grid wide">
      <div className="grammar-page__header">
        <div className="grammar-page__header-content">
          <div className="grammar-page__header-content-title">
            <h1>Ngữ pháp</h1>
            <p>Tổng hợp toàn bộ kiến thức ngữ pháp tiếng Anh luyện thi TOEIC</p>
          </div>
        </div>
      </div>
      <div className="grammar-page__content">
        <div className="row grammar-list">
          {listdata != undefined
            ? listdata.map((item, index) => {
                return (
                  <div className="col l-12 m-12 c-12">
                    <div className="grammar-item">
                      <Link to={`/grammar/${item._id}`}>
                        <div className="grammar-item__topic">Topic {index + 1}</div>
                        <div className="grammar-item__name">{item.name}</div>
                      </Link>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    </div>
  );
}

export default GrammarPage;
