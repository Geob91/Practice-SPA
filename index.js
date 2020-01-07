import { Header, Nav, Main, Footer } from "./components";

//console.log(Header, Footer, Main, Nav);

const state = {
  Home: {
    heading: "Home"
  },
  Form: {
    heading: "Form"
  },
  Blog: {
    heading: "Blog"
  },
  Gallery: {
    heading: "Gallery"
  }
};

document.querySelector("#root").innerHTML = `
${Header()}
${Nav()}
${Main()}
${Footer()}`;
