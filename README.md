# mars-rover-photos
This is a simple web app created with LitElement components for consuming NASA's API and visualize photos from Rovers Curiosity, Opportunity and Spirit.

This project was created using only Lit for the creation of four web components, and Vite for bundling dependencies for deployment.

Instructions:

The app is very simple:

1. Select among one of the rovers available.
2. Then select an earth date, this means, the date was in earth when photos were taken.
3. Finally, select one of the cameras from that rover and click on search button.

The app will show the photos which it took with the specified camera.

Special considerations:
- Curiosity is the only active mission currently, so it is the only which will return photos with recent dates. Opportunity and spitit are completed missions, and they are no longer sending information to earth.
- Opportunity was active for a period of almost 15 years from 2004 to 2018.
- Spirit was active from 2004 to 2010.

These are some cool dates you can search:

Curiosity
- 6/08/2010 Landing date

Spirit
- 4/01/2004 Landing date (photos available from January 5)

Opportunity
- 10/06/2018 This is the official date of the last transmission Opportunity made, but it is registered in 11/06/2018 with the Panoramic camera. "The last image sent is a partial full-frame image of a dark sky." (https://mars.nasa.gov/resources/22340/last-images-opportunity-took/).



