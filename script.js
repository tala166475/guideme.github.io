
document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
  });
});

function openModal(){
  let modal= document.querySelector('#modal-window');
  modal.classList.add("showModal");
}
function openModal1(){
  let modal= document.querySelector('#modal1');
  modal.classList.add("showModal");
}
function openModal2(){
  let modal= document.querySelector('#modal2');
  modal.classList.add("showModal");
}
function openModal3(){
  let modal= document.querySelector('#modal3');
  modal.classList.add("showModal");
}

function openModal4(){
  let modal= document.querySelector('#modal4');
  modal.classList.add("showModal");
}

function openModal5(){
  let modal= document.querySelector('#modal5');
  modal.classList.add("showModal");
}

function openModal6(){
  let modal= document.querySelector('#modal6');
  modal.classList.add("showModal");
}
function openModal7(){
  let modal= document.querySelector('#modal7');
  modal.classList.add("showModal");
}
function openModal8(){
  let modal= document.querySelector('#modal8');
  modal.classList.add("showModal");
}
function openModal9(){
  let modal= document.querySelector('#modal9');
  modal.classList.add("showModal");
}
function openModal10(){
  let modal= document.querySelector('#modal10');
  modal.classList.add("showModal");
}
function openModal11(){
  let modal= document.querySelector('#modal11');
  modal.classList.add("showModal");
}
function openModal12(){
  let modal= document.querySelector('#modal12');
  modal.classList.add("showModal");
}
function openModal13(){
  let modal= document.querySelector('#modal13');
  modal.classList.add("showModal");
}
function openModal14(){
  let modal= document.querySelector('#modal14');
  modal.classList.add("showModal");
}
function openModal15(){
  let modal= document.querySelector('#modal15');
  modal.classList.add("showModal");
}
function openModal16(){
  let modal= document.querySelector('#modal16');
  modal.classList.add("showModal");
}
function openModal17(){
  let modal= document.querySelector('#modal17');
  modal.classList.add("showModal");
}
function openModal18(){
  let modal= document.querySelector('#modal18');
  modal.classList.add("showModal");
}
function closeM(){
    let m= document.querySelector('#modal-window');
  m.classList.remove("showModal");
}

function closeM1(){
  let m= document.querySelector('#modal1');
m.classList.remove("showModal");
}

function closeM2(){
  let m= document.querySelector('#modal2');
m.classList.remove("showModal");
}

function closeM3(){
  let m= document.querySelector('#modal3');
m.classList.remove("showModal");
}

function closeM4(){
  let m= document.querySelector('#modal4');
m.classList.remove("showModal");
}

function closeM5(){
  let m= document.querySelector('#modal5');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}

function closeM6(){
  let m= document.querySelector('#modal6');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM7(){
  let m= document.querySelector('#modal7');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM8(){
  let m= document.querySelector('#modal8');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM9(){
  let m= document.querySelector('#modal9');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM10(){
  let m= document.querySelector('#modal10');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM11(){
  let m= document.querySelector('#modal11');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM12(){
  let m= document.querySelector('#modal12');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM13(){
  let m= document.querySelector('#modal13');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM14(){
  let m= document.querySelector('#modal14');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM15(){
  let m= document.querySelector('#modal15');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM16(){
  let m= document.querySelector('#modal16');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM17(){
  let m= document.querySelector('#modal17');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
function closeM18(){
  let m= document.querySelector('#modal18');
m.classList.remove("showModal");}
document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}
const cards = document.querySelectorAll('.card-wrapper');

cards.forEach((card, index) => {
  const comments = card.querySelector('.card-wrapper-comment');
  card.addEventListener('click', () => {
    comments.style.display = 'block';
  });
});



const select = document.getElementById('filter-select');

select.addEventListener('change', () => {
  const selectedFilter = select.value;
  
  cards.forEach((card, index) => {
    if (selectedFilter === "all" || card.dataset.filter === selectedFilter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});



const cardItems = document.querySelectorAll('.main-card');
const modalHeader = document.querySelector('.modalHeader-js');
const modalCardPrice = document.querySelector('.amount');
const modalCardAddress = document.querySelector('.map');
const modalCardRate = document.querySelector('.star');


cardItems.forEach((cardItem) => {
  cardItem.addEventListener('click', function () {
    const cardHeader = cardItem.querySelector('.cardText-js');
    const cardPrice = cardItem.querySelector('.card-price');
    const cardAddress = cardItem.querySelector('.address');
    const cardRate = cardItem.querySelector('.rate');

    modalHeader.innerText = cardHeader.innerText;
    modalCardPrice.innerText = cardPrice.innerText;
    modalCardAddress.innerText = cardAddress.innerText;
    modalCardRate.innerText = cardRate.innerText;
  });
});

window.onkeydown = function (event) {
  if(event.keyCode == 20) {
    closeM();
  }
}

var modal =  document.querySelector('#modal-window');
window.onclick = function (event) {
  if(event.target == modal) {
    closeM();
  }
}






