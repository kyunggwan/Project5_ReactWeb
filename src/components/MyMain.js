import '../styles/Index.css';
import '../styles/Main.css';
import Mysection1 from './Mysection1';
import Mysection2 from './Mysection2';
import Mysection3 from './Mysection3';
import Mysection4 from './Mysection4';

function MyMain() {
  return ( 
   <div className='Main'>
   {/*!--h1이라는 속성값이 달렷다 */}
   <Mysection1 h1="HTML" />
   <Mysection1 h1="CSS" />
   <Mysection1 h1="JavaScript" />
   <Mysection1 h1="React" />
   </div>
 );
}

export default MyMain;
