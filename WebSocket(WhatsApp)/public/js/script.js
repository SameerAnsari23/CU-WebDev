const socket = io();
let loginb = document.querySelector('#login-btn');
let login = document.querySelector('#login');
let chatApp = document.querySelector('.chat-application');
let allUsers= document.querySelector('.all-user-status');


loginb.addEventListener('click', function(){
 let usernameInput = document.querySelector('#username');
 // console.log(usernameInput.value.trim());
 const username = usernameInput.value.trim();
//  console.log(username);
 socket.emit('login', {username, socketId: socket.id});
 
 usernameInput.value = "";
 login.style.display = 'none';
 chatApp.style.display = 'block';
})

socket.on('useradded', ({msg, username, clientsCount}) => {
 if(clientsCount) document.querySelector('.active-users').innerText = clientsCount;
 let curUser = document.querySelector('.current-user');
 curUser.innerText = username;
})

socket.on('updatedetails', ({msg, clients, clientsCount}) => {
 if(clientsCount) document.querySelector('.active-users').innerText = clientsCount;
 allUsers.innerText = '';
 clients.forEach(c => {
   if(c.id != socket.id) {
    let li = document.createElement('li');
    li.innerText = c.name;
    allUsers.appendChild(li);
   }
 });
})

document.querySelector('.send-button').addEventListener('click', () => {
 let messageInput = document.querySelector('.message-input');
 let message = messageInput.value;
 if(message.length > 0) {
  socket.emit('newmessage', {
   message: message,
   socketId: socket.id
  })
 }
 messageInput.value = '';
})

socket.on('messagerecieved', ({message, socketId, username}) => {
 let chats = document.querySelector('.chats');
 let chat = document.createElement('div');
 chat.classList.add('chat');
 let chatMessage = document.createElement('div');
 chatMessage.classList.add('chat-message')
 
 if(socketId === socket.id) {
  chatMessage.innerText = `${message}`;
  chatMessage.classList.add('my-chat')
 }else {
  chatMessage.innerText = `${username} : ${message}`;
  chatMessage.classList.add('another-chat')
 }
 chat.appendChild(chatMessage)
 chats.appendChild(chat);
})