let cards = [
  //  Add your card in this section
  //  Follow this example format:
  //  ["Your Name", "Image URL(./img/username.png)", "Bio", "Your Github Link"],
  //  Bio should no longer than 50 characters, avoid using quotes(") to guarantee the format remains the same.

  [
    "Meghal Bisht",
    "./img/MeghalBisht.png",
    "Developer",
    "https://github.com/MeghalBisht",
  ],
  [
    "Your Name",
    "./img/username.png",
    "Your Bio",
    "https://github.com/letskhabar",
  ],
  [
    "Your Name",
    "./img/username.png",
    "Your Bio",
    "https://github.com/MasterBrian99",
  ],
  [
    "Your Name",
    "./img/username.png",
    "Your Bio",
    "https://github.com/MasterBrian99",
  ],
  [
    "Mohammad Reza",
    "./img/mohammadreza.png",
    "I build responsive website and E-commerce site ",
    "https://github.com/rzadev",
  ],
  [
    "Irvin",
    "./img/irvine09.png",
    "I support enterprise applications.",
    "https://github.com/irvine09",
  ],
  [
    "Tahirih",
    "./img/ctahirih.jpg",
    "Hello, I'm frontend web developer from Perú",
    "https://github.com/ctahirih",
  ],
  [
    "Courtney",
    "./img/Courtney.png",
    "Hello, I am an associate software engineer from the United States",
    "https://github.com/courtneyoverby",
  ],
  [
    "Rishav",
    "./img/Courtney.png",
    "Hello, I am Software Developer from India",
    "https://github.com/rishavjaiss",
  ],
];

// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

let contents = [];
Shuffle(cards).forEach((c) => {
  contents.push([
    `<li class="card">` +
      `<img class="user-image" src='${c[1]}' alt='${c[0]}' />` +
      `<div class="flex-content">` +
      `<h3 class="bio">${c[2]}</h3>` +
      `<h3 class='user'><a href="${c[3]}" target="_blank"><i class="fab fa-github"></i> ${c[0]}</a> </h3>` +
      `</div>` +
      `</li>`,
  ]);
});

document.getElementById("users").innerHTML = contents;

function Shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}
