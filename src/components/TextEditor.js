
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const TextEditor = ({_content, handleEditorChange}) => {

  return (
     <div className="w-full py-3 mt-3">
      <ReactQuill value={_content} onChange={handleEditorChange} />
    </div>
  )
}

export default TextEditor