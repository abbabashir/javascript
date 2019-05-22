import { jsdom } from 'jsdom';

function createDocument() {
  const document = jsdom(undefined);
  const window = document.defaultView;
  global.document = document;
  global.window = window;

  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });

  return document;
}

export default createDocument;

window.addEventListener('load', yourFunction, false);
// ..... or 
window.addEventListener('DOMContentLoaded', yourFunction, false);

yourFunction () {
  // some ocde

}

{
  "scripts": {
    "test": "mocha --compilers js:babel-register --require src/test/testHelper.js src/**/*.test.js"
  }
}





var icons = document.getElementsByClassName('fa');

for(var i = 0; i < icons.length; i++){
    console.log(icons[i])
}

var iconsArr = Array.from(icons);
console.log(iconsArr);
console.log(icons);