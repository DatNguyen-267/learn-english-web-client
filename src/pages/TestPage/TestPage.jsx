import React from 'react'
import './TestPage.scss'
// https://helios-i.mashable.com/imagery/articles/04cF4TrnWjhse8QkjBplRsv/hero-image.fill.size_1200x1200.v1639565666.jpg

export const TestPage = () => {
  return (
    <div className='test-pg'>
      <div className='grid wide'>
        <div className="base__page-heading">
          <h1>Luyện thi</h1>
          <span>Cung cấp các đề thi sát với đề thi thật, nâng cao khả năng làm bài</span>
        </div>
        <div className='base__group'>
          <div className="base__group-title">Full test</div>
          <div className='test-ls'>
            <div className='row'>
              <div className="col l-4 m-6 c-12">
                <div className="test-item">
                  {/* tên, số câu, -> bao điểm -> kết quả lần trước */}
                  <div className='test-item__img'
                    style={{ backgroundImage: "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_2_sky6j0.png')" }}></div>
                  <div className='test-item__gr'>
                    <div className='test-item__name'>Test 1</div>
                    <div className="test-item__info">
                      <div className='test-item__time'>Thời gian</div>
                      <div className='test-item__ques'>Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-6 c-12">
                <div className="test-item">
                  {/* tên, số câu, -> bao điểm -> kết quả lần trước */}
                  <div className='test-item__img'
                    style={{ backgroundImage: "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_2_sky6j0.png')" }}></div>
                  <div className='test-item__gr'>
                    <div className='test-item__name'>Test 1</div>
                    <div className="test-item__info">
                      <div className='test-item__time'>Thời gian</div>
                      <div className='test-item__ques'>Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-6 c-12">
                <div className="test-item">
                  {/* tên, số câu, -> bao điểm -> kết quả lần trước */}
                  <div className='test-item__img'
                    style={{ backgroundImage: "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_2_sky6j0.png')" }}></div>
                  <div className='test-item__gr'>
                    <div className='test-item__name'>Test 1</div>
                    <div className="test-item__info">
                      <div className='test-item__time'>Thời gian</div>
                      <div className='test-item__ques'>Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className='base__group'>
          <div className="base__group-title">Mini test</div>
          <div className='test-ls'>
            <div className='row'>
              <div className="col l-4 m-6 c-12">
                <div className="test-item">
                  {/* tên, số câu, -> bao điểm -> kết quả lần trước */}
                  <div className='test-item__img'
                    style={{ backgroundImage: "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_cz1js8.png')" }}></div>
                  <div className='test-item__gr'>
                    <div className='test-item__name'>Test 1</div>
                    <div className="test-item__info">
                      <div className='test-item__time'>Thời gian</div>
                      <div className='test-item__ques'>Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-6 c-12">
                <div className="test-item">
                  {/* tên, số câu, -> bao điểm -> kết quả lần trước */}
                  <div className='test-item__img'
                    style={{ backgroundImage: "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_cz1js8.png')" }}></div>
                  <div className='test-item__gr'>
                    <div className='test-item__name'>Test 1</div>
                    <div className="test-item__info">
                      <div className='test-item__time'>Thời gian</div>
                      <div className='test-item__ques'>Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-6 c-12">
                <div className="test-item">
                  {/* tên, số câu, -> bao điểm -> kết quả lần trước */}
                  <div className='test-item__img'
                    style={{ backgroundImage: "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_cz1js8.png')" }}></div>
                  <div className='test-item__gr'>
                    <div className='test-item__name'>Test 1</div>
                    <div className="test-item__info">
                      <div className='test-item__time'>Thời gian</div>
                      <div className='test-item__ques'>Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-6 c-12">
                <div className="test-item">
                  {/* tên, số câu, -> bao điểm -> kết quả lần trước */}
                  <div className='test-item__img'
                    style={{ backgroundImage: "url('https://res.cloudinary.com/drwse3wye/image/upload/v1652241913/test_img/unnamed_cz1js8.png')" }}></div>
                  <div className='test-item__gr'>
                    <div className='test-item__name'>Test 1</div>
                    <div className="test-item__info">
                      <div className='test-item__time'>Thời gian</div>
                      <div className='test-item__ques'>Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
