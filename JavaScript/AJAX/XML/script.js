let btn = document.querySelector('.btn')
  let ul = document.querySelector('ul');
  
  // 1] create XMLHttpRequest
  let xml = new XMLHttpRequest();

  // 2] create a setup for request
  let url = 'https://api.animechan.io/v1/quotes/random';
  xml.open('GET', url);

  // 3] Success 
  xml.onload = (res) => {
   // console.log(res.target)
   let data = JSON.parse(res.target.responseText);
   console.log(data.data.content)
   let op = data.data.content;
   let li = document.createElement('li');
   li.innerText = op;
   ul.appendChild(li);
  }

  // 4] Failure
  xml.onerror = (err) => {
   console.log(err);
  } 

  btn.addEventListener('click', () => {
   xml.send()
  })