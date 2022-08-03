import { Link } from 'react-router-dom';
import './LsPart.scss';

function LsPart({ part }) {
  return (
    <div className="col l-4 m-6 c-12">
      <Link to={`/practice-listen/part/${part._id}`}>
        <div className="part">
          <div className="part__header">
            {/* <div className="part__name">{part.name}</div> */}
            <div className="part__name">
              <div className="name__icon">
                <i className="fas fa-book"></i>
              </div>
              <div className="name__content">
                <span>{part.name}</span>
              </div>
            </div>
          </div>
          <div className="part__body">
            <div className="part__info">
              <div className="part__question-number">
                <span>{part.amount_question}</span> questions
              </div>
              {/* <div className="part__person-number">
                                <i className="fas fa-users"></i>
                                <span>{part.follow}</span>
                            </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LsPart;
