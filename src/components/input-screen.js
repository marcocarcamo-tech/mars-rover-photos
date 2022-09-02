import {LitElement, css, html} from 'lit';
import './rover-selection.js'

export class InputScreen extends LitElement {
  static get properties() {
    return {
        url: {type: String},
        date: {type: String},
        camera: {type: String},
        data: {type: String},
        roverCamsInfo: {type: Object}
    }
  };
  // Define scoped styles right with your component, in plain CSS
  static get styles()  {
    return css`
    :host {
      color: #E6D5B8;
      
      
    }
    form{
      display: flex;
      justify-content: center;
    }
    div{
      width: 15%;
      display: flex;
      flex-direction: column;
      margin: 16px 16px 16px 0;
    }
    input, select{
      margin-bottom: 16px;
      height: 25px;
    }
    
    label{
      margin-bottom: 6px;
    }
    button{
      background-color: #E45826;
      width: 10%;
      height: 40px;
      margin: auto 0; 
      color: #1B1A17;
      font-weight: 500;
    }
    button:hover {
      background-color: #F0A500;
      cursor: pointer;
    }
  `;
}


  constructor() {
    super();
    // Declare reactive properties
    this.data = ''
    this.addEventListener('rover-cams-info', (e) => {
      this.clearCameras()
      console.log("recieving")      
      this.roverCamsInfo = (e.detail.currentRoverCamInfo);
      console.log(this.roverCamsInfo)
      this.setRenderedCams();
      
  })
    
  }

  // Render the UI as a function of component state
  render() {
    return html`
    <h1>Look for a photo from a Mars Rover!</h1>
    <p>Please select a Rover</p>
    <slot></slot> 
    <form>
      <div>
        <label for="date">Photo Earth Date</label>
        <input id="date" type="date">
      </div>

      <div>
          <label for="camera">Camera</label>
          <select id="camera"></select>
      </div>
       
        
        <button type="button" @click=${this.sendURL}>Search</button>
    </form>
    <img src=${this.url}>
    
    `;
  }

  getInput() {
    
    let date = this.renderRoot.getElementById('date').value;
    let camera = this.renderRoot.getElementById('camera').value;
    this.date = date;
    this.camera = camera;
  }

  setURL(){
    
    this.getInput();

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.roverCamsInfo.name}/photos?` + "earth_date=" +this.date  + "&camera=" + this.camera + `&api_key=DEMO_KEY`
    console.log(url)
    return url

  }

  sendURL() {
    let url = this.setURL()
    this.dispatchEvent(new CustomEvent('api-url',
      {
        detail: {url},
        bubbles: true,
        composed: true     
    }));
    
  }

  setRenderedCams() {
    
    let cameraList = this.roverCamsInfo.cameras;
    let cameras = this.renderRoot.getElementById('camera');
    cameraList.forEach(camera => {
      let cameraKey = camera.key;
      let cameraName = camera.name;
      let cameraElement = document.createElement('option')
      cameraElement.setAttribute('id', cameraKey);
      cameraElement.setAttribute('value', cameraKey);
      cameraElement.innerHTML = cameraName;
      cameras.appendChild(cameraElement);
    })
  }  

  clearCameras(){
    let cameras = this.renderRoot.getElementById('camera');
    cameras.innerHTML = '';
  }
}
customElements.define('input-screen', InputScreen);