// import React, { Component } from 'react'
import Adjustcontent from './Adjustcontent'

const Hoccomponent = (Component,increment,scale1,decrement,readfont,readableFont,title,highlightTitle,
    link,highlightLink,magnifier,fontSize,fontSizeInc,fontSizeDec,textHieght,
    textLineHeight,textLineHeightDec,space,letterSpaceInc,letterSpaceDec,
    alignleft,alignmentLeft,alignmentRight, alignmentCenter) => {
return () => {
  return (
    <>
    <Component increment={increment} decrement={decrement} readableFont={readableFont} 
    highlightTitle={highlightTitle} highlightLink={highlightLink} magnifier={magnifier}
     fontSizeInc={fontSizeInc} fontSizeDec={fontSizeDec} textLineHeight={textLineHeight} 
     textLineHeightDec={textLineHeightDec} letterSpaceInc={letterSpaceInc}
      letterSpaceDec={letterSpaceDec} alignmentLeft={alignmentLeft} alignmentRight={alignmentRight} alignmentCenter={alignmentCenter}/>
    <Adjustcontent count={scale1} readfont={readfont} title={title} link={link} fontSize={fontSize} 
    textHieght={textHieght} letterSpace={space}
    alignleft={alignleft} 
    />
    </>
  )
}
}

export default Hoccomponent