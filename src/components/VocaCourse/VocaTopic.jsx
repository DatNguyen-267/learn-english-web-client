import React from 'react'
import './VocaTopic.scss'
import { Link } from 'react-router-dom'
export const VocaTopic = ({ data, index, vocaCourseId, vocaCourseName }) => {
  return (
    <div className="col l-2 m-4 c-6">
      <Link to={`/learning/voca?course-id=${vocaCourseId}&topic-id=${data._id}&voca-course-name=${vocaCourseName}`}>
        <div className="voca-topic-item">
          {/* <div className="voca-topic-item__img"
          style="background-image: url('https://www.voca.vn/assets/file_upload/images/excited.jpg')">
        </div> */}
          <div className="voca-topic-info">
            <div className="voca-topic-name">{index} - {data.name}</div>
            <div className="voca-topic-number">18 từ</div>
          </div>
        </div>
      </Link>

    </div>
  )
}
