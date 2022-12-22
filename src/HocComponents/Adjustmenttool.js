import React from "react";
import Adjusttoolleft from "./Adjusttoolleft";
import Adjusttoolright from "./Adjusttoolright";
const Adjustmenttool = () => {
  const clickhandler=(e)=>{
    console.log(e.target);
  }
  return (
      <div className="outerLeft">
        <div className="adjusttool">
          <Adjusttoolleft icon="bi bi-arrows-fullscreen" content="Content Scalling" clickhandler={clickhandler}/>
          <Adjusttoolright icon="bi bi-fonts" content="Readable Font"/>
        </div>
        <div className="adjusttool">
          <Adjusttoolright icon="bi bi-fonts" content="Highlight Titles"/>
          <Adjusttoolright icon="bi bi-link" content="Highlight Links"/>
          <Adjusttoolright icon="bi bi-zoom-in" content="Text Magnifier"/>
        </div>
        <div className="adjusttool">
          <Adjusttoolleft icon="bi bi-arrow-down-up" content="Adjust Font Sizing" clickhandler={clickhandler}/>
          <Adjusttoolright icon="bi bi-text-center" content="Align center"/>
        </div>
        <div className="adjusttool">
          <Adjusttoolleft icon="bi bi-justify" content="Adjust line height" clickhandler={clickhandler}/>
          <Adjusttoolright icon="bi bi-text-left" content="Align left"/>
        </div>
        <div className="adjusttool">
          <Adjusttoolleft icon="bi bi-arrow-left-right" content="Adjust Letter Spacing" clickhandler={clickhandler}/>
          <Adjusttoolright icon="bi bi-text-right" content="Align Right"/>
        </div>
      </div>
  );
};

export default Adjustmenttool;
