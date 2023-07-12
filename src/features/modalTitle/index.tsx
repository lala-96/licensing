import React from "react";
import InterfaceTitle from "./type";
import './style.css'

const ModalTitle:React.FC<InterfaceTitle> = (props) => {
  return(
      <div className='title-style'>
          {props.text}
      </div>
  )
}
export default ModalTitle