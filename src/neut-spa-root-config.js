// import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";

// const routes = constructRoutes(document.querySelector("#single-spa-layout"));
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();


import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@neut-spa/single-spa-demo-nav",
  () => System.import("@neut-spa/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@thawkin3/single-spa-demo-page-1",
  () => System.import("@thawkin3/single-spa-demo-page-1"),
  isActive.page1,
  { domElement: document.getElementById('page-1-container') }
);

registerApplication(
  "@neut-spa/single-spa-demo-page-2",
  () => System.import("@neut-spa/single-spa-demo-app-2"),
  isActive.page2,
  { domElement: document.getElementById('page-1-container') }
);
registerApplication(
  "@neut-spa/neut-spa",
  () => System.import("@neut-spa/neut-spa"),
  isActive.page3,
  { domElement: document.getElementById('page-1-container') }
);
start();