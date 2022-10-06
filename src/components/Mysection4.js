import '../styles/Index.css';
import '../styles/Main.css';
import imgHTML from '../images/html.png'
import imgCSS from '../images/CSS.png'
import imgJS from '../images/js.png'
import imgREACT from '../images/react.png'


function Mysection4() {
  return ( 
    <>
      <section>
        <div><img src={imgREACT} alt="React" /></div>
        <div>
          <h1>REACT</h1>
          <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
        </div>
      </section>
    </>
 );
}

export default Mysection4;