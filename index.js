import { Header, Nav, Main, Footer } from "./components";

//console.log(Header, Footer, Main, Nav);

document.querySelector("#root").innerHTML = `
${Header}
${Nav}
${Main}
${Footer}`;
