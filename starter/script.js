'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
const openModal = function () {
  modal.classList.remove('hidden'); //*do not use class selector
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  //opens the modal window calling to the openModal function
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); //calling to the closeModal function to effect the classes because the operations are similar.
//! do not closeModal(); if you do it will run as soon as the script runs.
overlay.addEventListener('click', closeModal); //calling to the closeModal function to effect the classes because the operations are similar.

document.addEventListener('keydown', function (e) {
  //listening for the keydown press event
  //console.log('A key was pressed');
  //console.log(e.key);//log the key pressed to the console
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if !modal does not contain hidden class
    closeModal(); //execute this function to close the modal
  }
});
