var header = [
    "i wont be UI designer :)",
    "i will be full stack developer",
    "Im Fran, and Im not a Designer."
];
var random = Math.floor(Math.random() * 3);

const title = document.getElementById("title");

title.innerHTML = header[random];
