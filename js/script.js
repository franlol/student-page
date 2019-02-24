var header = [
    "Im not a Designer.",
    "Im just a MERN stack developer."
];
var random = Math.floor(Math.random() * header.length);

const title = document.getElementById("title");

title.innerHTML = header[random];
