let  $ = document;
let  h1Element = $.querySelector('.title');
let  Icon = $.querySelector('i');
let  inputElement = $.querySelector('#NoteInput');
let  NotesContent = $.querySelector('.Notes');
let  colorIcons = $.querySelectorAll('.colorIcons');
let  AddBtn    = $.querySelector('.AddBtn');
let  DeleteBtn  = $.querySelector('.DeleteBtn');
let  themeFlag = 1 ;
$.body.style.backgroundColor = '#eee';
// change theme by firing click event
Icon.addEventListener('click' , function(){
    if(themeFlag){
         $.body.style.backgroundColor = 'rgb(36,36,35)';
         Icon.style.transition = 'all 0.7s';
         Icon.classList.remove('fa-sun');
         Icon.setAttribute('class' , 'moon fas fa-moon fa-2x  mr-5');
         themeFlag = 0 ;
    }else{
        $.body.style.backgroundColor = '#eee';
        Icon.style.transition = 'all .4s';
        Icon.classList.remove('fa-moon');
        Icon.setAttribute('class' , 'fas fa-sun fa-2x text-warning  mr-5');
        themeFlag = 1;
    }
}) 
// change the color of input background by firing click event on circles
colorIcons.forEach(function(item){
    item.addEventListener('click' , function(){
        inputElement.style.backgroundColor = item.style.color;
    })
})
// adding Note content to DOM by firing keyup event (pressing Enter) on input Element
inputElement.addEventListener('keyup',function(event){
      if(event.key === 'Enter'){
         let InputValue = inputElement.value;
         if(InputValue){
            let note = $.createElement('div');
            note.setAttribute('class' ,'text-center p-5 my-3 w-50 border rounded shadow');
            note.style.backgroundColor = inputElement.style.backgroundColor;
            let spanElement = $.createElement('span');
            spanElement.innerHTML = InputValue;
            note.append(spanElement);
            note.addEventListener('click',function(){
             note.style.display = 'none';
            })
            NotesContent.append(note);
         }
      }
})
//// adding Note content to DOM by firing click event  on AddBtn
AddBtn.addEventListener('click' , function(){
   let InputValue =  inputElement.value;
   if(InputValue){
    let note = $.createElement('div');
    note.setAttribute('class' ,'text-center py-5 my-3 w-50 border rounded shadow-lg');
    note.style.backgroundColor = inputElement.style.backgroundColor;
    let spanElement = $.createElement('span');
    spanElement.innerHTML = InputValue;
    note.append(spanElement);
    note.addEventListener('click',function(){
     note.style.display = 'none';
    })
    NotesContent.append(note);
   }
})
// remove the input value by firing click event on DeleteBtn
DeleteBtn.addEventListener('click' , function(){
        inputElement.value = '';
        inputElement.style.backgroundColor = '#fff';

})
