//********************************
// タイピングアニメーションのコード
//********************************

const typingText = document.querySelector('.typingText');
const text = 'Welcome to portfolio!';
let index = 1;

setTimeout(typeText, 1000);

// 一文字ずつ表示する関数
function typeText() {
  typingText.textContent = text.slice(0, index);
  if (index < text.length) {
    index++;
    const randomInterval = Math.floor(Math.random() * 350) + 50;
    setTimeout(typeText, randomInterval);
  } else{
    setTimeout(eraseText, 1500);
  } 
}

// 一文字ずつ消去する関数
// function eraseText() {
//   index--;
//   typingText.textContent = text.slice(0, index);
//   if (index > 1) {
//     setTimeout(eraseText, 100);
//   } else {
//     setTimeout(typeText, 1500);
//   }
// }