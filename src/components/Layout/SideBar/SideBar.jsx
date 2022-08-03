import './SideBar.scss';
function SideBar() {
  return (
    <div className="app__sidebar">
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item ">
            <a href="">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="" className="active">
              <i className="fas fa-book"></i>
              <span>Khóa học</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="">
              <i className="fas fa-vial"></i>
              <span>Luyện Thi</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="">
              <i className="fas fa-user-cog"></i>
              <span>Của Tôi</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
