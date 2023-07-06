import React from "react";
import './Sample-box.css'

const SampleBox = ({bkColor,iconColor,color,title,bColor,icon, desc}) => {
  return (
    <div className="box" style={{backgroundColor:bkColor}} >
      <div className="box-title" style={{color}} >
        <div className="icon-container" style={{backgroundColor:iconColor}} >
            <img src={icon} alt="search"/>
        </div>
        <h3>{title}</h3>
      </div>

      <p className="p-box" style={{color,borderColor:bColor}}>
      {desc}
      </p>
    </div>
  );
};

export default SampleBox;
