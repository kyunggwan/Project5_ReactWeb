import '../styles/Index.css';
import '../styles/Main.css';
import imgHTML from '../images/html.png'
import imgCSS from '../images/CSS.png'
import imgJS from '../images/js.png'
import imgREACT from '../images/react.png'


function Mysection2() {
  return ( 
    <>
      <section>
        <div><img src={imgCSS} alt="CSS" /></div>
        <div>
          <h1>CSS</h1>
          <p>Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어</p>
        </div>
      </section>
    </>
 );
}

export default Mysection2;