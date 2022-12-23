
import './App.css';
import Adjustmenttool from './HocComponents/Adjustmenttool';
import './HocComponents/adjustmentTool.css'
// import Adjustcontent from './HocComponents/Adjustcontent';
import { useState } from 'react';
import Hoccomponent from './HocComponents/Hoccomponent';
function App() {
// content scaling
  const [count,setCount]=useState(1);
  let scale1={transform: "scale("+count+")"};
  const increment=()=>{
      setCount(count+0.1);
      setReadfont("");
    
  }
  const decrement=()=>{
    setCount(count-0.1);
    setReadfont("");
 }
// content font readable readablfont
   const[readfont,setReadfont]=useState("");
   const readableFont=()=>{
    setReadfont("readablfont");
   }
// highlight titles
  const[title,setTitle]=useState();
  const highlightTitle=()=>{
    setTitle("hightlight");
  }
  // highlight link
  const[link,setLink]=useState();
  const highlightLink=()=>{
    setLink("hightlight");
  }
  // megnify Content
    
     const magnifier=()=>{
      setCount(1.2);
     }
// font size
const [textsize,setTextsize]=useState(24);
let fontSize={fontSize:textsize+"px"};
const fontSizeInc=()=>{
     setTextsize(textsize+2);
    //  setCount(1);
}
const fontSizeDec=()=>{
     setTextsize(textsize-2);
    //  setCount(1);
}
// line height
   
   const[lineHeight,setLineheight]=useState(1.2);
   let textHieght={lineHeight: lineHeight}
   const textLineHeight=()=>{
    setLineheight(lineHeight+.2);
   }
   const textLineHeightDec=()=>{
    setLineheight(lineHeight-.2);
   }
  //  letter spacing
  const [letteSpace,setLetterSpace]=useState(0);
  let space={ letterSpacing: letteSpace+"px"};
  const letterSpaceInc=()=>{
    setLetterSpace(letteSpace+1);
     
  }
  const letterSpaceDec=()=>{
    setLetterSpace(letteSpace-1);
  }
  // alignment left
  const [alignleft,setAlignleft]=useState("");
  const alignmentLeft=()=>{
    setAlignleft("left_alignment");
  }
  // alignment right
  const alignmentRight=()=>{
    setAlignleft("right_alignment");
  }
  // alignment center
  const alignmentCenter=()=>{
    setAlignleft("center_alignment");
  }
  let Hoc=Hoccomponent(Adjustmenttool,increment,scale1 ,decrement,readfont,readableFont,title,highlightTitle ,link,highlightLink,magnifier,fontSize,fontSizeInc,fontSizeDec,textHieght,textLineHeight,textLineHeightDec,
    space,letterSpaceInc,letterSpaceDec,alignleft,alignmentLeft,alignmentRight, alignmentCenter);
  return (
    <>
    <h1>Content Adjustment Tool</h1>
    <div className='outer'>
    <Hoc/>
    </div>
    </>
  );
}

export default App;
