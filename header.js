import { Application } from '@splinetool/runtime';

//PC - DESIGN
const canvas_design = document.getElementById('canvas3d_design');
const app_design = new Application(canvas_design);
app_design.width = 100;
app_design.height = 100;
app_design.load('https://prod.spline.design/IkR-69MFzuQCJtnm/scene.splinecode');

//POLAROID - PHOTO
const canvas_photo = document.getElementById('canvas3d_photo');
const app_photo = new Application(canvas_photo);
app_photo.load('https://prod.spline.design/gH6eYyw3Z-QJujot/scene.splinecode');

//TYPEWRITER - ABOUT
const canvas_about = document.getElementById('canvas3d_about');
const app_about = new Application(canvas_about);
app_about.load('https://prod.spline.design/A2NwSzZ7-eyfn6RE/scene.splinecode');

//PHONE - CONTACT
const canvas_contact = document.getElementById('canvas3d_contact');
const app_contact = new Application(canvas_contact);
app_contact.load('https://prod.spline.design/UTBu2HcNZR9-xraQ/scene.splinecode');
