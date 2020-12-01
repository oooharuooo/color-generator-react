import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ list }) => {
  const [copy, setCopy] = useState(false);

  const copyHandler = () => {
    setCopy(true);
    navigator.clipboard.writeText(hex)
  }
  useEffect(() => {
    const timeOut = setTimeout(() => setCopy(false), 2000);
    return () => clearTimeout(timeOut);
    
  },[copy])

  const { rgb, type, weight } = list;
  const hex = rgbToHex(...rgb);
  const fontColor = type === 'shade' ? 'color-light' : null
 
  
	return (
			<article
				className={`color ${fontColor}`}
				style={{ backgroundColor: `rgb(${rgb})` }}
				onClick={copyHandler}
			>
				<p className="percent-value">{weight}%</p>
				<p className="color-value">{hex}</p>
				{copy && <p className="alert">Copied to clipboard</p>}
			</article>
	)
}

export default SingleColor
