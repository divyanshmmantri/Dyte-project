import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import Main from '../hooks/Main'
import FileExp from './FileExplorer';

function App() {
  const [html, setHtml] = Main('html', '')
  const [css, setCss] = Main('css', '')
  const [js, setJs] = Main('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [sel,setSel] = useState('index.html')
  console.log(sel)
  const Selhandler = (value)=>{
    setSel(value)
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <FileExp onSelection={Selhandler}></FileExp>
        {
          sel === "index.html" && 
          <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}/>
        }
        {
          sel === "index.js" && 
          <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
        }
        {
          sel === "index.css" && 
          <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        }

      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
