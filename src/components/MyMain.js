import '../styles/Index.css';
import '../styles/Main.css';
import Mysection1 from './Mysection1';
import Mysection2 from './Mysection2';
import Mysection3 from './Mysection3';
import Mysection4 from './Mysection4';

function MyMain() {
  return ( 
   <div className='Main'>
   <Mysection1 />
   <Mysection2 />
   <Mysection3 />
   <Mysection4 />
   </div>
 );
}

export default MyMain;
