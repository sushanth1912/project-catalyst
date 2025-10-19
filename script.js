const projectName = 'Project Catalyst';
console.log(projectName);
const userAge = 24;
let isNewUser = true;

const pageTitle = document.querySelector('h1');
pageTitle.textContent = 'A New Title is yet to come';

const applyButton = document.querySelector('.btn');

applyButton.addEventListener('click', function(){
    console.log('The button was clicked!');
})

const profileTitle = document.querySelector('h1');
const aboutMeParagraph = document.querySelector('p');

profileTitle.addEventListener('click', function(){
    aboutMeParagraph.textContent = 'This is my new bio';
});