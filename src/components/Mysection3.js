import '../styles/Index.css';
import '../styles/Main.css';
import imgHTML from '../images/html.png'
import imgCSS from '../images/CSS.png'
import imgJS from '../images/js.png'
import imgREACT from '../images/react.png'


function Mysection3() {
  return ( 
    <>
      <section>
        <div><img src={imgJS} alt="JavaScript" /></div>
        <div>
          <h1>JavaScript</h1>
          <p>웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원</p>
        </div>
      </section>
    </>
 );
}

export default Mysection3;