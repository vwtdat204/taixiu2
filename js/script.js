// --- Carousel Controls ---
const carousel = document.querySelector('.games-carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click',()=>{carousel.scrollBy({left:-240,behavior:'smooth'})});
nextBtn.addEventListener('click',()=>{carousel.scrollBy({left:240,behavior:'smooth'})});

// --- Auto Carousel every 5s ---
setInterval(()=>{carousel.scrollBy({left:240,behavior:'smooth'})},5000);

// --- Popup Modal ---
const modal = document.getElementById('gameModal');
const gameFrame = document.getElementById('gameFrame');
document.querySelectorAll('.game-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const game = card.dataset.game;
    if(game==='taixiu'){
      gameFrame.src='taixiu.html';
      modal.classList.add('open');
    }else{
      alert('Demo game '+game);
    }
  });
});
document.getElementById('closeModal').addEventListener('click',()=>{modal.classList.remove('open'); gameFrame.src='';});

// --- Tài Xỉu Demo ---
const diceImgs = [
  'assets/dice1.png',
  'assets/dice2.png',
  'assets/dice3.png',
  'assets/dice4.png',
  'assets/dice5.png',
  'assets/dice6.png'
];

let timerEl = document.getElementById('timer');
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let totalEl = document.getElementById('total');
let outcomeEl = document.getElementById('outcome');

function rollDice(){
  // --- random dice 1-6 ---
  let d1 = Math.floor(Math.random()*6)+1;
  let d2 = Math.floor(Math.random()*6)+1;
  let d3 = Math.floor(Math.random()*6)+1;
  
  dice1.querySelector('img').src=diceImgs[d1-1];
  dice2.querySelector('img').src=diceImgs[d2-1];
  dice3.querySelector('img').src=diceImgs[d3-1];
  
  let sum = d1+d2+d3;
  totalEl.textContent='Tổng: '+sum;
  outcomeEl.textContent=(sum>=11)?'Tài':'Xỉu';
}

// --- Countdown & Auto Roll every 30s ---
let countdown = 30;
function startCountdown(){
  if(!timerEl) return;
  timerEl.textContent=countdown;
  let interval = setInterval(()=>{
    countdown--;
    if(countdown<=0){
      rollDice();
      countdown=30;
    }
    timerEl.textContent=countdown;
  },1000);
}
startCountdown();

// --- Bet Buttons ---
document.querySelectorAll('.bet-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    alert('Đặt cược '+btn.dataset.amt);
  });
});
