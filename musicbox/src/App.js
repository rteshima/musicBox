import React, {useState} from 'react';
import {storage} from "./firebase/firebase";

function UploadForm() {
  const allInputs = {audioUrl: ''}
  const [audioAsFile, setAudioAsFile] = useState('');
  const [audioAsUrl, setAudioAsUrl] = useState(allInputs);

  console.log(audioAsFile)
  const handleAudioAsFile = (e) => {
  const audio = e.target.files [0]
  setAudioAsFile (audioFile => (audio))
  }
  return (
  <div className="App">
    <form>
      <input type="file" onChange={handleAudioAsFile}></input>
    </form>
  </div>
);
}



export default UploadForm;
