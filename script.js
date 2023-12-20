`use strict`;
// alert('yo')
// selecting all element 
const button = document.querySelector('.show-modal');
const closeButton = document.querySelector('.fa-solid');

// // adding an event listener to the button element 
button.addEventListener('click', function () {
   document.querySelector('div').classList.remove('hidden');
   document.getElementsByClassName('hidden-content')[0].classList.remove('hidden')
})

closeButton.addEventListener('click', function () {
    document.querySelector('div').classList.add('hidden');
    document.getElementsByClassName('hidden-content')[0].classList.add('hidden');
});
// document.querySelector('.hide').addEventListener('click', ()=> {
//     document.querySelector('div').classList.add('hidden');
//     document.getElementsByClassName('hidden-content')[0].classList.add('hided');
// })

document.addEventListener('keydown', (Event)=>{
    if(Event.key==='Escape') {
        document.querySelector('div').classList.add('hidden');
    }
});