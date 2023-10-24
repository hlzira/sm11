let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');


let btnModal = document.querySelector('.send');



let wraps = document.querySelector('.input_wraps');
let inputModal = document.querySelector('.inputModal');
let descModal = document.querySelector('.descModal');

let errTitle = document.querySelector('.addTitle');
let errDesc = document.querySelector('.addDesc');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


log = false;


wraps.addEventListener('keyup', function(event){
    if(inputModal.value.length < 8){
        errTitle.innerHTML = '<p class = "error">Не менее 8 символов</p>'
        inputModal.style.border = "1px solid #da2929";
        log = false;
    }else{
        errTitle.innerHTML = '<p class = "error"></p>'
        inputModal.style.border = "1px solid #335b36";
        log = true;
    }
    if(descModal.value.length > 300){
        errDesc.innerHTML = '<p class = "error">Не более 300 символов</p>'
        descModal.style.border = "1px solid #da2929";
        log = false;
    }else{
        errDesc.innerHTML = '<p class = "error"></p>'
        descModal.style.border = "1px solid #335b36";
    }
})


btnModal.onclick = function(event){
    if(inputModal.value.length === 0 ){
        errTitle.innerHTML = '<p class = "error">Введите название</p>';
        inputModal.style.border = "1px solid #da2929";
        log = false;
    }

    if(descModal.value.length === 0){
        errDesc.innerHTML = '<p class = "error">Введите текст</p>'
        descModal.style.border = "1px solid #da2929";
        log = false;
    }
    
    if(log == true){
        Push(inputModal.value,descModal.value);
        showArr (inputModal.value,descModal.value);

        inputModal.value = "";
        descModal.value = "";

        modal.classList.remove('modal_active');

    }
    event.preventDefault();    
}

document.addEventListener('keydown', function(event){

    
    if(event.key.toLowerCase() == 'b'){
        document.body.style.background = '#2f2f2f';
        document.body.style.color = "#fff";
        modal.style.color = "#000";
    }else if(event.key.toLowerCase() == 'w'){
        document.body.style.background = '#fff';
        document.body.style.color = "#000";

    }
})

let arr = [
    {
        title: 'Название',
        description: 'Текст',
    },

]
let wrap = document.querySelector('.news-wrapper')
function showArr (x,y){
        wrap.insertAdjacentHTML('beforeend',
        `<div class="news-item">
        <h3 class="h3">${x}</h3>
        <p class="news-item__p">
            ${y}
        </p>
    </div>`);
}

arr.forEach(element => {
    wrap.insertAdjacentHTML('beforeend',
    `<div class="news-item">
    <h3 class="h3">${element.title}</h3>
    <p class="news-item__p">
        ${element.description}
    </p>
</div>`)
});

function Push(x, y){
    arr.push(
        {
        title: 'x',
        description: 'y',
    }
    )
}




