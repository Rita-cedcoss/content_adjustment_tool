import React from "react";
import Adjusttoolleft from "./Adjusttoolleft";
import Adjusttoolright from "./Adjusttoolright";
const Adjustmenttool = ({increment,decrement ,readableFont,highlightTitle,highlightLink,magnifier,
  fontSizeInc,fontSizeDec,textLineHeight,textLineHeightDec,letterSpaceInc, letterSpaceDec,alignmentLeft,alignmentRight,alignmentCenter}) => {
    return (
      <div className="outerLeft">
        <div className="adjusttool">
          <Adjusttoolleft icon="bi bi-arrows-fullscreen" content="Content Scalling" increment={increment} decrement={decrement} />
          <Adjusttoolright icon="bi bi-fonts" content="Readable Font" parameter={readableFont}/>
        </div>
        <div className="adjusttool">
          <Adjusttoolright icon="bi bi-fonts" content="Highlight Titles" parameter={highlightTitle} />
          <Adjusttoolright icon="bi bi-link" content="Highlight Links" parameter={highlightLink}/>
          <Adjusttoolright icon="bi bi-zoom-in" content="Text Magnifier" parameter={magnifier}/>
        </div>
        <div className="adjusttool">
          <Adjusttoolleft icon="bi bi-arrow-down-up" content="Adjust Font Sizing" increment={fontSizeInc} decrement={fontSizeDec}/>
          <Adjusttoolright icon="bi bi-text-center" content="Align center" parameter={alignmentCenter}/>
        </div>
        <div className="adjusttool">
          <Adjusttoolleft icon="bi bi-justify" content="Adjust line height" increment={textLineHeight} decrement={textLineHeightDec} />
          <Adjusttoolright icon="bi bi-text-left" content="Align left" parameter={alignmentLeft}/>
        </div>
        <div className="adjusttool">
          <Adjusttoolleft icon="bi bi-arrow-left-right" content="Adjust Letter Spacing" increment={letterSpaceInc} decrement={letterSpaceDec}/>
          <Adjusttoolright icon="bi bi-text-right" content="Align Right" parameter={alignmentRight}/>
        </div>
      </div>
  );
};

export default Adjustmenttool;
