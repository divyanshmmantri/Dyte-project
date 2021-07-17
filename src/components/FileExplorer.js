import React, { useState, useEffect } from 'react';
export default function FileExp(props)
{   
    return(
       <div className="file-container">
           <div className="title">File Explorer</div>
           <div onClick={() => props.onSelection("index.html")} className="file-title" >index.html</div>
           <div onClick={() => props.onSelection("index.css")} className="file-title">index.css</div>
           <div onClick={() => props.onSelection("index.js")} className="file-title">index.js</div>
      
       </div>
    );
}