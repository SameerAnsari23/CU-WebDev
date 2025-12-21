let h1 = $('<h1>')
let body = $('body')

body
   .append(
    h1.text('Hello world!!!').css('color', 'red').addClass('first')
   )
   .append(
    $('<button>')
    .text('Click')
    .click(ev => {
     console.log("clicked");
    })
    .dblclick(ev =>{
     console.log("doubled click");
    })
    
   )
   .append(
     $('<ul>')
     .html(
      '<li>Rafeeq</li> <li>Manihas</li>'
     )
    )