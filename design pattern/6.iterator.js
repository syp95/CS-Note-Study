const mp = new Map();
mp.set('a', 1);
mp.set('b', 2);
mp.set('cccc', 3);
const st = new Set();
st.add(1);
st.add(2);
st.add(3);
const a = [];
for (let i = 0; i < 10; i++) a.push(i);

console.log(mp);
console.log(st);
console.log(a);

for (let aa of a) console.log(aa);
for (let a of mp) console.log(a);
for (let a of st) console.log(a);
