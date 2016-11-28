process.argv.splice(0, 2);
console.log(process.argv.reduce((prev, cur) => Number(prev) + Number(cur)));

/*
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
*/
