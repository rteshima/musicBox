import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { storage } from "./firebase/firebase";


// // function UploadForm() {
// //     const allInputs = {audioUrl: ''}
// //     const [audioAsFile, setAudioAsFile] = useState('');
// //     const [audioAsUrl, setAudioAsUrl] = useState(allInputs);

// //     console.log(audioAsFile)
// //     const handleAudioAsFile = (e) => {
// //         const audio = e.target.files [0]
// //         setAudioAsFile (audioFile => (audio))
// //     }
// //     return (
// //     <div className="App">
// //       <form>
// //         <input type="file" onChange={handleAudioAsFile}></input>
// //       </form>
// //     </div>
// //   );
// // }

// import React from "react";
// import ReactDOM from "react-dom";
// import firebase from "firebase";
// import FileUploader from "react-firebase-file-uploader";

// class MediaPool extends React.Component {
//     state = {
//         filenames: [],
//         downloadURLs: [],
//         isUploading: false,
//         uploadProgress: 0
//     };

//     handleUploadStart = () =>
//     this.setState ({
//         isUploading: true,
//         uploadProgress: 0
//     });

//     handleProgress = progress =>
//     this.setState ({
//         uploadProgress: progress
//     });

//     handleUploadError = error =>
// }

// function MediaPool() {
//     return (
//         <div className="App">
//             <div className="Title">
//                 <Container>
//                     <h1>Media Pool</h1>
//                     <Row>
//                         <Col md = "auto">Upload media here:</Col>
//                         <Button variant="primary" onClick= {UploadForm}>Upload File</Button>{' '}
//                         <Col>
//                             <ListGroup></ListGroup>

//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </div>
//     );
// }

// // export default MediaPool;

class AudioUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const audio = e.target.files[0];
      this.setState(() => ({ audio }));
    }
  };

  handleUpload = () => {
    const { audio } = this.state;
    const uploadTask = storage.ref(`audio/${audio.name}`).put(audio);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("audio")
          .child(audio.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };
  render() {
    return (
      <div className="MediaPool">
        <Container>
          <div className="center">
            <br />
            <h2 className="green-text">musicBox Media Pool</h2>
            <br />
            <br />
            <div className="row">
              <progress value={this.state.progress} max="100" className="progress" />
            </div>
            <br>
            </br>
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input type="file" onChange={this.handleChange} />
              </div>
            </div>
            <br />
            <br />
          </div >
        </Container>
      </div>
    );
  }
}

export default AudioUpload;


