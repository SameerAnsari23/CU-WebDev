let btn = document.querySelector('.btn')
let ul = document.querySelector('ul');

function getData(url) {
 return new Promise((resolve, reject) => {
  // 1] create XMLHttpRequest
  let xml = new XMLHttpRequest();

  // 2] create a setup for request
  xml.open('GET', url);

  // 3] Success 
  xml.onload = (res) => {
   // console.log(res.target)
   let data = JSON.parse(res.target.responseText);
   console.log(data.data.content)
   resolve(data.data.content)
  }


   // 4] Failure
  xml.onerror = (err) => {
   reject(err);
  } 

  xml.send();
 })
}

btn.addEventListener('click', () => {
 getData('https://api.animechan.io/v1/quotes/random')
 .then((data) => {
  let li = document.createElement('li');
   li.innerText = data;
   ul.appendChild(li);
 })
 .catch((err) => {
  console.log(err);
 })
})