let btn = document.querySelector('.btn');
let ul = document.querySelector('.list');


btn.addEventListener('click', () => {
 fetch('https://catfact.ninja/fact')
 .then((res) => {
  // console.log(res)
  return res.json();
 })
 .then((data) => {
  console.log(data.fact);
  let op = data.fact;
  let li = document.createElement('li');
  li.innerText = op;
  ul.appendChild(li);
 })
 .catch(err => {
  console.log(err);
 })
})