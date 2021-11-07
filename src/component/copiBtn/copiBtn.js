
import React, { useState } from 'react';
import './copiBtn.css'

const CopiBtn = ({ src }) => {
  const [isVariant, setIsVariant] = useState(false);

  return (
    <>
      <div className="container_copi_btn">
        <img src={src} alt="icon" />
      </div>
    </>

  )
}

export default CopiBtn;