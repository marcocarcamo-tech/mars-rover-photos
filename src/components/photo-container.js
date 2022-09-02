import {LitElement, css, html} from 'lit';
import './fetch-api.js'


export class PhotoContainer extends LitElement {
  static get properties() {
    return {
        photosArray: {type: Array},
        
    }
  };
  // Define scoped styles right with your component, in plain CSS
  static get styles()  {
    return css`
    :host {
      display: block;
      color: #E6D5B8;
      width: 80%;
      margin: 0 auto;
      text-align: center;
      
    }

    img{
        display: block;
        width:600px;
        object-fit: cover;
        padding-bottom: 15px;
        margin: 0 auto;
    }
  `;
}


  constructor() {
    super();
    // Declare reactive properties
    this.addEventListener('photos-array', (e) => {
        console.log("I've received array")
        console.log(e);
        this.photosArray = (e.detail.photosArray);
        console.log(this.photosArray);
        this.showImages(this.photosArray);
    })
    
    
  }
  
  // Render the UI as a function of component state
  render() {
    return html`
    <slot></slot>
    <div id="photos"></div>
    `;
  }

 showImages(photos) {

    this.clearPhotos();

    let div = this.renderRoot.getElementById("photos");

    photos.forEach(photoURL => {
        let img = document.createElement('img')
        img.setAttribute('src', photoURL);
        div.appendChild(img);
        
    });
 } 

 clearPhotos() {
    let div = this.renderRoot.getElementById("photos");
    div.innerHTML = ""
 }

}
customElements.define('photo-container', PhotoContainer);