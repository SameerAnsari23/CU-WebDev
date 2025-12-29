let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let taskList = document.querySelector('.taskList');

btn.addEventListener('click', () => {
 // console.log(inp.value)
 let taskName = inp.value;
 // console.log(taskName);

 let li = document.createElement('li');

 li.classList.add('taskText');

 li.innerHTML = `
   ${taskName}
   <button class="upBtn">👆</button>
   <button class="downBtn">👇</button>
   <button class="delete">⚔</button>
   `
 taskList.appendChild(li);
 
 inp.value = '';
})


taskList.addEventListener('click', (ev) => {
 console.log(ev.target)
 let item = ev.target;
 if (item.classList.contains('upBtn')) {
  // console.log("upBtn");
  let parentElement = item.parentElement;
  let previousElement = parentElement.previousElementSibling;
  console.log(parentElement);
  console.log(previousElement);
  taskList.insertBefore(parentElement, previousElement);
 }
 else if(item.classList.contains('downBtn')) {
  let parentElement = item.parentElement;
  let nextElement = parentElement.nextElementSibling;
  console.log(parentElement);
  console.log(nextElement);
  taskList.insertBefore(nextElement, parentElement)
 }
 else if(item.classList.contains('delete')) {
  let parentElement = item.parentElement;
  parentElement.remove();
 }
})