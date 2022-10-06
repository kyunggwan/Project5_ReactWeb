import '../styles/Index.css';
import '../styles/Nav.css';

function Nav() {
  return ( //표현되는 것은 div 태그 하나
    <div className="Nav">

      <div className="nav_logo">mylogo</div>
      <ul className="nav_menu">
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">React</a></li>        
      </ul>
      <ul className="nav_icon">
        <li>페이스북 로고</li>
        <li>인스타 로고</li>
        {/* <li><i class="fa-brands fa-square-facebook"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li> */}
      </ul>
     
    </div>
  );
}
//class 속성은 className
export default Nav;
