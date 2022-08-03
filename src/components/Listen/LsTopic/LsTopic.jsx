import LsCourse from '~/components/Listen/LsCourse/LsCourse';
import './LsTopic.scss';
function LsTopic({ topic }) {
  const listcourse = topic.list_course;
  console.log('list_course:', listcourse);
  return (
    <div className="topic__item">
      {/* <div className="topic__item__header">
                <div className="topic__item__header__title">
                    <h2>
                        {topic.name}
                    </h2>
                </div>
            </div> */}
      <div className="topic__item__list row">
        {listcourse.map((item) => {
          return <LsCourse course={item} />;
        })}
      </div>
    </div>
  );
}

export default LsTopic;
