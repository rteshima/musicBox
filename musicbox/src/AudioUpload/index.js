
import React, { Component } from "react";
import storage from "../Firebase/index";

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
      <div className="center">
          <br/>
          <h2 className="green-text">React Firebase audio Uploader</h2>
          <br/>
          <br/>
        <div className="row">
          <progress value={this.state.progress} max="100" className="progress" />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Audio"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default AudioUpload;