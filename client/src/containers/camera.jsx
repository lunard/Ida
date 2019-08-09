import React from 'react';
import $ from 'jquery';

var params = {
  returnFaceId: 'false',
  returnFaceLandmarks: 'false',
  returnFaceAttributes: 'age,gender,emotion',
};

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: null, loading: false };
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
    const canvas = document.createElement('canvas');
    canvas.width = this.video.current.offsetWidth;
    canvas.height = this.video.current.offsetHeight;
    const context = canvas.getContext('2d');
    context.drawImage(this.video.current, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL('image/jpeg');
    this.setState({ img: data });
    const faceAPIKey = new URLSearchParams(window.location.search).get(
      'faceAPIKey'
    );
    this.video.current.pause();
    this.setState({ loading: true });
    fetch(data)
      .then(res => res.blob())
      .then(blobData => {
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
          .done(function(data) {
            var faceResult = {
              peopleCount: data.length,
            };
            next();
            console.log('Face API result: ', faceResult, data);
          })
          .fail(function(err) {
            this.setState({ loading: false });
            console.error('Face API error');
          });
      });
  }

  render() {
    const { img, loading } = this.state;
    return (
      <div>
        <video className="camera-video" ref={this.video} id="video" autoPlay />
        {!loading ? <div className="camera-button" onClick={this.take}>
          TAKE
        </div> : <div>loading</div>}
      </div>
    );
  }
}

export default Camera;
