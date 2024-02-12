const cardLinks = [...document.querySelectorAll('a.appLink')];
//add mousedown listeners
cardLinks.map((link) => link.addEventListener('click', (e) => windowHandler(e)));

//add window unload listener
addEventListener('beforeunload', () => saveChildWindows());

//{link, window}
const openWindows = [];

function windowHandler(e) {
  e.preventDefault();
  const { target } = e;
  const { href } = target;

  //check to see if the window is already open
  const arrayItem = openWindows.find((element) => element.target === target);
  if (arrayItem) {
    const window = arrayItem.window;
    //if this window exists in array but is closed, update array
    if (window.closed) {
      const index = openWindows.indexOf(arrayItem);
      if (index > -1) openWindows.splice(index, 1);
      addEntry(target, href);
    } else {
      window.focus();
    }
  } else {
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

function saveChildWindows() {
  //we will save windows in local storage to reopen later
  openWindows.map((entry) => {
    //first check if it is still open.. if not, do nothing
    if (entry.window.closed) return;
    //else lets get some info
    console.log(entry.window);
  });
}
