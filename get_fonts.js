#!/usr/bin/env node

const fontManager = require('font-manager');
const fs = require('fs');

/*
{ path: '/Library/Fonts/Arial Bold.ttf',
  postscriptName: 'Arial-BoldMT',
  family: 'Arial',
  style: 'Bold',
  weight: 700,
  width: 5,
  italic: false,
  monospace: false }
*/

const fonts = fontManager.getAvailableFontsSync().map((item, id) => {
  item.id = id;
  return item;
});

fs.writeFile('./js/data/fontList.json', JSON.stringify(fonts, null, 2), (err) => {
  if (err) throw err;
  console.log(`
List of fonts saved at ./js/data/fontList.json

you can execute:

./servo

to run a localhost server now at http://localhost:8080/
`);
});
