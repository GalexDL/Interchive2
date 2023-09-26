const images = ['https://alashack.sirv.com/KOG/kogch1.png', 'https://alashack.sirv.com/KOG/kogch1-1.png', 'https://alashack.sirv.com/KOG/kogch1-1.png', 'https://alashack.sirv.com/KOG/kogch1-1.png'];
const texts = ['', 'Hold on, hold on!', 'We should call it a day soon.\n\xa0\xa0\xa0\xa0We are going to pass out before\nwe leave tomorrow.', '……', "You know, right. There are other demons besides the Black Beast.", "You knew, didn't you...", "We've been together for a long time, haven't we?", "It’s okay… I won't let my personal feelings get in the way of my mission.", "Who said I can't let my personal feelings get in the way?", "Your enemy is my enemy.", "Okay. Let's continue the training!", "All right, let's do this!"];
const characterNamesEN = ['', 'Claude', 'Claude', 'Lea', 'Claude', 'Lea', 'Claude', 'Lea', 'Claude', 'Lea', 'Claude', 'Claude', 'Lea'];
const characterNamesJP = ['', 'クロード', 'クロード', 'リア', 'クロード', 'クロード', 'リア', 'クロード',  'リア',  'クロード',  'リア', 'クロード',  'リア',  'クロード', 'クロード',  'リア'];
const textsJP = ['', 'タンマ、タンマ!', 'いい加減、訓練は終わりにしようぜ。明日の出発の前にぶっ倒れちまうよ。', '……', 'わかってるよな。《黒き獣》だけが魔じゃないんだ。', '知ってたのね・・・・・', 'おまえとも長いからな。', '大丈夫・・・・・任務に私情は挟まないわ。', '・・・・・誰が私情を挟むなっつった?', 'え・・・・・?', 'お前の仇は、俺の仇だ。', 'よっし。んじゃ、訓練の続きだ！', 'ええ——行くわよ！'];

let currentIndex = 0;


////////////////Language///////////////////

let isJapanese = false; // Default to English

function toggleLanguage() {
  isJapanese = !isJapanese;
  updateText();
  updateCharacterName();
}

function updateCharacterName() {
  const characterNameElement = document.getElementById('character-name');
  const nameIndex = currentIndex;
  const name = isJapanese ? characterNamesJP[nameIndex] : characterNamesEN[nameIndex];
  characterNameElement.textContent = `${name}`;
}

function updateText() {
  const textElement = document.getElementById('slider-text');
  if (isJapanese) {
    textElement.innerText = textsJP[currentIndex];
  } else {
    textElement.innerText = texts[currentIndex];
  }
}

// Call updateCharacterNames to set the initial character names
updateCharacterName();

////////////////////////////////////////////




function updateImage() {
  const imageElement = document.getElementById('slider-image');
  const textElement = document.getElementById('slider-text');
  const characterNameElement = document.getElementById('character-name');
  
  imageElement.src = images[currentIndex];
  textElement.innerText = texts[currentIndex];

  updateCharacterName();
  updateText();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// Initialize the first image and text
updateImage();









    //<span>EN</span>
    //<input type="checkbox" id="language-toggle" onclick="toggleLanguage()">
    //<label for="language-toggle">日本語</label>



    
