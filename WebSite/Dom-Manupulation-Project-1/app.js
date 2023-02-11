// Dom Manupulation() :- 

// const title = document.querySelector('#main-heading')
// title.style.color = 'red'

// const listItems1 = document.querySelectorAll('list-items')

// for (let i of listItems1) {
//     i.style.fontSize = '5rem';
// }

// console.log(listItems1);

// Create Element:-

// const ul = document.querySelector('ul')
// const li = document.createElement('li')

// // Adding Element
// ul.append(li)

// // Modifying the text:-

// const firstListItem = document.querySelector('.list-items')
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// li.innerText = 'X-men'

// // Modifying Attribute and Classes:-

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id')

// const title = document.querySelector('#main-heading')
// console.log(title.getAttribute('id'));


// li.classList.add('list-items')
// // li.classList.remove('list-items')

// console.log(li.classList.contains('list-items'));  // true , when add() is called and false, when remove() is called

// // Remove Elements:-

// // li.remove()


// // GetElementById() :-

// const title1 = document.getElementById('main-heading')
// console.log(title1);


// // GetElementByClassName() :-

// const listItems1 = document.getElementsByClassName('list-items')
// console.log(listItems1);

// // GetElementByTagName() :-

// const listItems2 = document.getElementsByTagName('li')
// console.log(listItems2);

// // querySelector() :-

// const container = document.querySelector('div')
// console.log(container);

// // qauerySelectorAll() :- 

// const allContainer = document.querySelectorAll('div')
// console.log(allContainer);


// Dom Manipulation :- 


// Traverse the DOM :-


// Parent Node Traversal :-

// let ul = document.querySelector('ul')

// console.log(ul.parentNode.parentNode);   // <body></body>
// console.log(ul.parentElement.parentElement); // <body></body>

// const html = document.documentElement;

// console.log(html.parentNode);    // #Object
// console.log(html.parentElement);   // null

// Child Node Traversal :-

// let ul = document.querySelector('ul')

// console.log(ul.childNodes);
// console.log(ul.firstChild);  // text
// console.log(ul.lastChild);   // text

// ul.childNodes[1].style.backgroundColor = 'blue'
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal :-

// let ul = document.querySelector('ul')
// let div = document.querySelector('div')

// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


// Event Listeners:---

// element.addEventListner('click', function);


// const buttonTwo = document.querySelector('.btn-2')
// const buttonThree = document.querySelector('.btn-3')
// function alertBtn() {
//     alert('I also love Javascript')
// }

// buttonTwo.addEventListener('click', alertBtn)
// buttonThree.addEventListener('click', alertBtn)


// // MouseOver:----

// const newBackGroundColor = document.querySelector('.box-3')

// function changeColor() {
//     newBackGroundColor.style.backgroundColor = 'blue'
// }

// newBackGroundColor.addEventListener('mouseover', changeColor)


// // reveal text

// const revealBtn = document.querySelector('.reveal-btn')
// const hiddenContent = document.querySelector('.hidden-content')

// function revealContent() {
//     if (hiddenContent.classList.contains('reveal-btn')) {
//         // hiddenContent.classList.remove('reveal-btn')
//         revealBtn.style.border = '1px solid azure'
//     } else {
//         hiddenContent.classList.add('reveal-btn')
//         revealBtn.style.border = '1px solid azure'
//         hiddenContent.style.border = '1px solid azure'
//     }
// }

// revealBtn.addEventListener('click', revealContent)

// Event Propagation:---

// window.addEventListener('click', function () {
//     console.log('window');
// }, false)

// document.addEventListener('click', function () {
//     console.log('Document');
// }, false)


// document.querySelector('.div-2').addEventListener('click', function (e) {
//     // e.stopPropagation()
//     console.log('Div-2');
// }, { once: true })

// document.querySelector('.div-1').addEventListener('click', function () {
//     console.log('Div-1');
// }, false)

// document.querySelector('.btn-clk').addEventListener('click', function (e) {
//     // console.log(e);
//     // console.log(e.target);
//     e.preventDefault()
//     console.log(e.target.innerText = 'Clicked');
// }, false)


// Event Delegation:---

// document.querySelector('#football').addEventListener('click', function(e){
//     console.log('Football is Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#basketball').addEventListener('click', function(e){
//     console.log('Basketball is Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#boxing').addEventListener('click', function(e){
//     console.log('Boxing is Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#tennis').addEventListener('click', function(e){
//     console.log('Tennis is Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#golf').addEventListener('click', function(e){
//     console.log('Golf is Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#sports').addEventListener('click', function (e) {
//     console.log(e.target.getAttribute('id') +' '+ 'is Clicked!');

//     const target = e.target
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// const sports = document.querySelector('#sports')
// const newSport = document.createElement('li')

// newSport.innerText = 'rugby'

// newSport.setAttribute('id', 'rugby')
// sports.appendChild(newSport)

// newSport.classList.add('li')
// sports.append(newSport)


// Dom-Manipulation - part-2

// variable:---

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote:`"The best way to find yourself is to lose yourself in the 
    service of others."`,
    person:`Mahatma Gandhi`
},{
    quote:`"If you want to live a happy life, tie it to a goal, not
    to people or things."`,
    person:`Albert Einstein`
},{
    quote:`"At his best, man is the noblest of all animals; separated
    from law and justice he is the worst."`,
    person:`Aristotle`
},{
    quote:`"Your time is limited, so don't waste it living someone
    else's life."`,
    person:`Steve Jobs`
},{
    quote:`"Tell me and I forget. Teach me and I remember. Involve me
    and I learn."`,
    person:`Benjamin Franklin`
},{
    quote:`"If you look at what you have in life, you'll 
    always have more. If you look at what 
    you don't have oin life, you'll never 
    have enough."`,
    person:`Oprah Winfrey`
},{
    quote:`"t does not matter how slowly you go as long as you do not stop."`,
    person:`Confucius`
},{
    quote:`"Our lives begin to end the day we become silent about
    things that matter."`,
    person:`Martin Luther King, Jr.`
},{
    quote:`"Remember that not getting what you want is sometimes a
    wonderful stroke of luck."`,
    person:`Dalai Lama`
},{
    quote:`"The journey of a thousand miles begins with one step."`,
    person:`Lao Tzu`
}]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})
