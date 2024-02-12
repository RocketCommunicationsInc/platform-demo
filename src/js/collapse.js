const sideBar = document.querySelector('#navigation');
const collapseBtn = sideBar.querySelector('#collapseBtn');

function checkOpen() {
  const isOpen = new URLSearchParams(window.location.search).get('nav');
  if (isOpen === 'open' || isOpen === 'Open') {
    sideBar.classList.remove('collapsed');
  }
}

function toggleCollapse() {
  sideBar.classList.toggle('collapsed');
}

checkOpen();

const homePage = document.querySelector('#home-content');
const frame = document.querySelector('#frame');
let isHome = true;

function goHome(e) {
  if (!e.target.closest('a') && !e.target.closest('button')) return;
  isHome = e.target.closest('button') ? true : false;
  frame.hidden = isHome;
  if (isHome) frame.src = '';
  homePage.hidden = !isHome;
}
