import {LitElement, html} from 'lit';

export class FetchApi extends LitElement {
    
    static get properties() {
        return {
            url: {type: String},
            method: {type: String},
            photos: {type: Array}
        }
    }

    constructor () {
        super();
        
        this.addEventListener('api-url', (e) => {

            
            this.url = (e.detail.url);
            this.fetchApi();
        })
    }

    render() {
        return html`
        <slot></slot>
        `;
      }

    dispatchArray(photosArray){
        this.dispatchEvent(new CustomEvent('photos-array', {
            detail: {photosArray}, bubbles: true, composed: true
        }));
    }

    fetchApi() {
        return new Promise((resolve, reject) => {
            fetch(this.url)
            .then((response) => {
                if(response.status==200){
                    resolve(response.json());
                } else {

                    reject(response);
                }
            });
        })
        .then((data)=> {
            
            const photos = data.photos;
            let photosArray = []
  
            photos.forEach(photo => {

                let photoURL = photo.img_src;

                photosArray.push(photoURL);
            });

            
            this.dispatchArray(photosArray);
            
        })
        .catch((error => console.error(error)))
    }
}

customElements.define('fetch-api', FetchApi);