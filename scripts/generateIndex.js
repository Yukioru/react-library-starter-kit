const fs = require('fs');

const ignores = ['test.js'];

function every(array, predicate) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

let arr = fs.readdirSync('src');

arr = arr
  .map((str) => `./${str}`)
  .filter((path) => !every(ignores, (e) => path.includes(e)));

const content = `
${arr.map(path => `import ${path.substr(2)} from '${path}';`)}

export {
  ${arr.map(path => path.substr(2)).join(`,\n`)}
};
`.trim();

fs.writeFileSync('src/index.js', content);
