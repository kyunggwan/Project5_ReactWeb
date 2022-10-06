import '../styles/Index.css';
import '../styles/Header.css';

function Header() {
   return ( //표현되는 것은 div 태그 하나
    <div className="Header">
      <section>
        <div className="header_left">
          <p>프론트엔드</p>
          FrontEnd                
        </div>
        <div className="header_right">
          웹에서 사용자에게 시각적으로 보여지는 부분을 의미한다. 프론트엔드쪽에서는 주로 HTML, CSS, 자바스크립트가 쓰이며, 요즘은 페이스북에서 개발한 자바스크립트에서 파생된 싱글 페이지 애플리케이션 형태의 리액트가 많이 사용된다.
        </div>
      </section>
    </div>
  );
}
//class 속성은 className
export default Header;
