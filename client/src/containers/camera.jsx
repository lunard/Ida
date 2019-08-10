import React from 'react';
import $ from 'jquery';

import faceAnalysis from '../utils/face-analysis';
import langSrc from '../assets/camera.svg';
import buttonSrc from '../assets/button.png';

var params = {
  returnFaceId: 'false',
  returnFaceLandmarks: 'false',
  returnFaceAttributes: 'age,gender,emotion',
};

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: null, loading: false, w: 640, h: 480 };
    this.video = React.createRef();
    this.take = this.take.bind(this);
  }

  componentDidMount() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.current.srcObject = stream;
        this.video.current.play();
      });
    } else {
      console.error('No media devices found');
    }
  }

  take() {
    const next = this.props.next;
    const setState = this.setState;
    const canvas = document.createElement('canvas');
    canvas.width = this.state.w;
    canvas.height = this.state.h;

    ////////////////
    const context = canvas.getContext('2d');
    context.drawImage(this.video.current, 0, 0, canvas.width, canvas.height);
    const faceAPIKey = new URLSearchParams(window.location.search).get(
      'faceAPIKey'
    );
    this.video.current.pause();
    this.setState({ loading: true });
    canvas.toBlob((blobData) => {
      $.post({
        url:
          'https://westeurope.api.cognitive.microsoft.com/face/v1.0/detect?' +
          $.param(params),
        contentType: 'application/octet-stream',
        headers: {
          'Ocp-Apim-Subscription-Key': '1d33abc84bdb49d5b34870cda25e724b',
        },
        processData: false,
        data: blobData,
      })
        .done((data) => {
          const faceResult = faceAnalysis(data);
          $.post({
            dataType: 'json',
            contentType: 'application/json',
            url: 'https://lunard.ddns.net/NOI_Hackathon_Summer_Edition_2019/api/api/tourist/questionTree',
            data: JSON.stringify(faceResult),
          })
            .done((questions) => {
              this.props.done(questions, faceResult);
            })
            .fail((err) => {
              this.setState({ loading: false });
              console.error('Face API error');
            });
        })
        .fail((err) => {
          this.setState({ loading: false });
          console.error('Face API error');
        });
    });
  }

  render() {
    const { img, loading, w, h } = this.state;
    return (
      <div className="video-page" style={{backgroundImage: `url('${langSrc}')`}}>
        <div className="video-cont">
          <video width={w} height={h} className="camera-video" ref={this.video} id="video" autoPlay />
          {!loading ? (
            <img className="camera-button" src={buttonSrc} onClick={this.take} />
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    );
  }
}

export default Camera;
