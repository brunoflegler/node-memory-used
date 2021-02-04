const someStringsArray = Array(1e8).fill("some string");
const memoryUsed = process.memoryUsage();

someStringsArray.reverse();

console.log('Memory Usage')
for (let key in memoryUsed) {
  console.log(`${key} = ${Math.round(memoryUsed[key] / 1024 / 1024 * 100) / 100} MB`);
}