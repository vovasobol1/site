const openPopUp = document.getElementById('pop_up_open');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

// обработчик кликa  на кнопку редактировать профиль

openPopUp.addEventListener('click' , ()=>{
    popUp.classList.remove('hidden');
    })


    // обработчик кликa  на кнопку закрыть поп up 
closePopUp.addEventListener('click', ()=> {
   popUp.classList.add('hidden');
})