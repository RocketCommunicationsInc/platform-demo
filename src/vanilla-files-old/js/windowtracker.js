//add window unload listener
addEventListener('beforeunload', () => saveChildWindows());

//{link, window}
const openWindows = [];

function saveChildWindows() {
  //we will save windows in local storage to reopen later
  openWindows.map((entry) => {
    //first check if it is still open.. if not, do nothing
    if (entry.window.closed) return;
    //else lets get some info
    console.log(entry.window);
  });
}
