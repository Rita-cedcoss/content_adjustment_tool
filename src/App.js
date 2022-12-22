import logo from './logo.svg';
import './App.css';
import Adjustmenttool from './HocComponents/Adjustmenttool';
import './HocComponents/adjustmentTool.css'
import Adjustcontent from './HocComponents/Adjustcontent';
function App() {
  return (
    <>
    <h1>Content Adjustment Tool</h1>
    <div className='outer'>
      
    <Adjustmenttool/>
    <Adjustcontent/>
    </div>
 
    </>
  );
}

export default App;
