import React from 'react'

const Adjusttoolright = (props) => {
  return (
    <div className="adjusttool__right" onClick={props.parameter}>
        <p>
          <i class={props.icon} style={{ fontSize: "30px" }}></i>
        </p>
        <h3>{props.content}</h3>
      </div>
  )
}

export default Adjusttoolright