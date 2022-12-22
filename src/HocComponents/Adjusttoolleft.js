import React from 'react'

const Adjusttoolleft = (props) => {
  return (
    <div className="adjusttool__left">
        <p>
          <i className={props.icon}></i> {props.content}
        </p>
        <div className="adjusttool__bottom">
          <button className="adjusttool__arrow">
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="adjusttool__mid">Default</div>
          <button className="adjusttool__arrow adjusttool__arrow--up" onClick={props.clickhandler}>
            <i className="bi bi-chevron-up"></i>
          </button>
        </div>
      </div>
  )
}

export default Adjusttoolleft