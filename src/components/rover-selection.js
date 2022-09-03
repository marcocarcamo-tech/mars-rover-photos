import {LitElement, css, html} from 'lit';



export class RoverSelection extends LitElement {
  static get properties() {
    return {
        rovers: {type: Array},
        currentRover: {type: Object}
        
    }
  };
  // Define scoped styles right with your component, in plain CSS
  static get styles()  {
    return css`
    :host {
        color: #E6D5B8;
        display: flex;
        justify-content: center;
        height: 300px
    }

    input{
        width: 240px;
        height: 130px;
        object-fit: cover;
        margin-bottom: 6px;
    }
    #curiosity:hover, #opportunity:hover, #spirit:hover{
        width: 250px;
        height: 140px;
    }
    div{
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px 10px;
    }
    
  `;
}


  constructor() {
    super();
    // Declare reactive properties
    this.rovers = [
        {name: 'curiosity', 
        cameras: [
            {
                name: 'Front Hazard Avoidance Camera',
                key: 'fhaz'
            },
            {
                name: 'Rear Hazard Avoidance Camera',
                key: 'rhaz'
            },
            {
                name: 'Mast Camera',
                key: 'mast'
            },
            {
                name: 'Chemistry and Camera Complex',
                key: 'chemcam'
            },
            {
                name: 'Mars Hands Lens Imager',
                key: 'mahli'
            },
            {
                name: 'Mars Descent Imager',
                key: 'mardi'
            },
            {
                name: 'Navigation Camera',
                key: 'navcam'
            }
            ],
        img: 'https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg'
        },
        {name: 'opportunity',
        cameras: [
            {
                name: 'Front Hazard Avoidance Camera',
                key: 'fhaz'
            },
            {
                name: 'Rear Hazard Avoidance Camera',
                key: 'rhaz'
            },
            {
                name: 'Navigation Camera',
                key: 'navcam'
            },
            {
                name: 'Panoramic Camera',
                key: 'pancam'
            },
            {
                name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
                key: 'minites'
            }
            ],
        img: "https://3.bp.blogspot.com/-r0A2uYEyTeI/XNhKhBU93EI/AAAAAAAAXsI/X9tyHDi8CIMEWuxMKQ3wOb7VPILPwIDCACLcBGAs/s1600/800px-Opportunity_in_Endurance_Crater_%2528cropped%2529.jpg"
        },
        {name: 'spirit', 
        cameras: [
            {
                name: 'Front Hazard Avoidance Camera',
                key: 'fhaz'
            },
            {
                name: 'Rear Hazard Avoidance Camera',
                key: 'rhaz'
            },
            {
                name: 'Navigation Camera',
                key: 'navcam'
            },
            {
                name: 'Panoramic Camera',
                key: 'pancam'
            },
            {
                name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
                key: 'minites'
            }
            ],
        img: "https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/mer_art_simulation_opportunity_endurance.jpg?mtime=1585760211"
        },
        this.currentRover = {}
];
    
    
  }
  
  // Render the UI as a function of component state
  render() {
    return html`
    <div><input id="curiosity" type="image" src="${this.rovers[0].img}" value="0" @click="${this.setRover}"></input><label>Curiosity</label></div>
    <div><input id="opportunity" type="image" src="${this.rovers[1].img}" value="1" @click="${this.setRover}"></input><label>Opportunity</label></div>
    <div><input id="spirit" type="image" src="${this.rovers[2].img}" value="2" @click="${this.setRover}"></input><label>Spirityyyyy</label></div>
    
    `;
  }


  setRover(e){
    
    let num = e.target.getAttribute('value')
    
    this.currentRover = this.rovers[parseInt(num)];

    this.sendRoverCamsInfo();
    
  }

  sendRoverCamsInfo () {
    let currentRoverCamInfo = this.currentRover
    console.log("dispatching")
    this.dispatchEvent(new CustomEvent('rover-cams-info',
      {
        detail: {currentRoverCamInfo},
        bubbles: true,
        composed: true     
    }));
  }
}
customElements.define('rover-selection', RoverSelection);