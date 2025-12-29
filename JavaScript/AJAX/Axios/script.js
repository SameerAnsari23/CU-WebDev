let btn = document.querySelector('.btn');
let ul = document.querySelector('.list');

btn.addEventListener('click', () => {
 axios('https://catfact.ninja/fact')
 .then((res) => {
  console.log(res.data.fact);
  let op = res.data.fact;
  let li = document.createElement('li');
  li.innerText = op;
  ul.appendChild(li);
 })
 .catch((err) => {
  console.log(err);
 })
})


