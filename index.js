const input = document.getElementById("num");
const container = document.getElementById("container");
const para = document.getElementById("para");

const generateletters = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * letters.length);
    text += letters.charAt(random);
  }
  return text;
};

const generateWord = () => {
  let num = input.value;
  let data = "";

  for (let i = 0; i < num; ++i) {
    data += generateletters(Math.floor(Math.random() * 15));
    data += " ";
  }

  para.innerText = data;
};

document.getElementById("button").addEventListener("click", generateWord);
