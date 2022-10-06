import '../styles/Index.css';
import '../styles/Main.css';
import imgHTML from '../images/html.png'
import imgCSS from '../images/CSS.png'
import imgJS from '../images/js.png'
import imgREACT from '../images/react.png'


function Mysection1() {
  return ( 
    <>
      <section>
        <div><img src={imgHTML} alt="HTML" /></div>
        <div>
          <h1>HTML</h1>
          <p>HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용</p>
        </div>
      </section>
    </>
 );
}

export default Mysection1;