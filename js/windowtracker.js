const cardLinks = [...document.querySelectorAll('a.appLink')];
console.log(cardLinks);
//add mousedown listeners
cardLinks.map((link) => link.addEventListener('click', (e) => windowHandler(e)));

//{link, window}
const openWindows = [];

function windowHandler(e) {
  e.preventDefault();
  const { target } = e;
  const { href } = target;
  console.log(href);

  //check to see if the window is already open
  console.log(openWindows);
  const arrayItem = openWindows.find((element) => element.target === target);
  if (arrayItem) {
    console.log('it does', arrayItem);
    const window = arrayItem.window;
    //if this window exists in array but is closed, update array
    if (window.closed) {
      console.log('but it was closed');
      const index = openWindows.indexOf(arrayItem);
      if (index > -1) openWindows.splice(index, 1);
      addEntry(target, href);
      console.log(openWindows);
    } else {
      window.focus();
    }
  } else {
    console.log("it doesn't");
    addEntry(target, href);
  }
}

function addEntry(target, href) {
  const newWindow = window.open(href, target.target);
  const entry = {
    target,
    window: newWindow,
  };
  openWindows.push(entry);
}
