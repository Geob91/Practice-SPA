function createListHTML(links) {
  return links
    .map(link => `<li class ="button"><a href ="/">${link}</li>`)
    .join("");
}

export default st => {
  console.log(st);
  return `​
<nav>
  <ul>
  ${createListHTML(st)}
  </ul>
</nav>`;
};
