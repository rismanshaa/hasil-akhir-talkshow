const titleElement = document.getElementById("title");
const commentBox = document.getElementById("commentBox");
const player = document.getElementById("player");


const titles = [
  " ",
  "This Never Happened, But I Think About It Every Night",
  "How Often Do You Create Imaginary Situations Before Going to Sleep?",
  "If Your Fake Scenario Turned Into a Movie, What Genre Would It Be?",
  "What Is Your Favorite Scenario?",
  "See You!!"
];

let currentIndex = 0;

function updateTitle() {
  titleElement.innerText = titles[currentIndex];
}

function changeTitle(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = titles.length - 1;
  if (currentIndex >= titles.length) currentIndex = 0;
  updateTitle();
}

// Inisialisasi awal
updateTitle();


const comments = {
  1: ["icelll", "queen of halu akhirnya diundang juga", "wah ada dokter", "icel somniaaa", "so excited!", "OMG!! OUR QUEENNNN"],
  2: [ "seru banget weh", "Plot twist: Nevin yang gali kubur karena kesel belum di bayar", "dikira campaign air putih", "kebangkitan dia lebih niat dari skripsi gueee", "bayangin hana di grebek polisi gara gara bantuin ngubur lo","dia ga fake death, tp soft rebranding"],
  3: ["my genre is definitely horror. its me checking my bank account at 2 am", "fantasy adventure but never leaving my bed", "documentary, about me being broke  but making it aesthetic", "Action thriller, me fighting sleep paralys demons"]
};

let commentIndex = 0;
let currentList = [];


function playSound(index) {
  const sounds = [
    "assets/sound1.mp3",
    "assets/kucingketawa.mp3",
    "assets/sambutan.mp3",
    "assets/tokdalang.mp3",
    "assets/tepuktangan.mp3"
  ];
 if (index >= 1 && index <= sounds.length) {
    player.src = sounds[index - 1];
    player.play();
  }
}


function addComment(buttonNum) {
  const list = comments[buttonNum];
  if (!list || list.length === 0) return;

  commentBox.innerHTML = "";
  commentBox.style.display = "block";
  commentBox.classList.add("show");

  let index = 0;

  const interval = setInterval(() => {
    const bubble = document.createElement("div");
    bubble.innerText = list[index];
    bubble.style.marginBottom = "10px";
    commentBox.appendChild(bubble);

    index++;

    if (index >= list.length) {
      clearInterval(interval);

      // Tunggu 5 detik setelah semua komentar muncul
      setTimeout(() => {
        commentBox.classList.remove("show");
        commentBox.style.display = "none";
        commentBox.innerHTML = "";
      }, 10000);
    }
  }, 1500); // jeda antar komentar (1 detik)
}



function showComment(text) {
  commentBox.innerText = text;
  commentBox.classList.add("show");
  commentBox.style.display = "block";
  
  setTimeout(() => {
    commentBox.classList.remove("show");
    commentBox.style.display = "none";
  }, 5000); 
}
