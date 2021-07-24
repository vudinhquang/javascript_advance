let x = 0;
async function test() {
 x = x + await 3
 console.log('Line 4:', x);
}
test();
x += 1;
console.log('Line 8:', x);
