//елменты блока входа
const blockLogin = document.querySelector('#login'), //block login
    btnLogin = document.querySelector('#btnLogin'), //button login
    email = document.querySelector('#email'), //input email
    password = document.querySelector('#password'), //input password
    txtEmail = document.querySelector('#txtEmail'), //text email
    txtPassw = document.querySelector('#txtPass');  //text password
    


//при клике проверяет логин и пароль,если правильно скрывает блок
btnLogin.addEventListener('click', function() {
    checkEmail();
    checkPassword();

    if (checkEmail()  &&  checkPassword()) {
        blockLogin.classList.add('hide');
        blockToDo.classList.add('active');
    }
});

// елемены блока toDoList
const blockToDo = document.querySelector('#blockTodo'),  //block toDoList
      inputTask = document.querySelector('#addinput'),  //input task
      btnAddTodo = document.querySelector('#btnAddTask'),  //add task
      listToDo = document.querySelector('#todoList'),  //ul list
      textEdit = document.querySelector('.textEdit'); //text edit

 //modal window     
const modalDelete = document.querySelector('.modal-delete'),  //modal delete
      modalEdit = document.querySelector('.modal-edit'); // modal edit


let list = [];
if (localStorage.getItem('TODO')) {
    list = JSON.parse(localStorage.getItem('TODO'));
    addToDo();
}
//при нажатие на кнопку додается toDo
btnAddTodo.addEventListener('click', function() {
    const  date = new Date();

    const   newToDo = {
        todo: inputTask.value,
        fullYear: date.getFullYear(),
        day: date.getDate(),
        month: date.getMonth(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        milliseconds: date.getTime(),
        check: false
    };

    list.push(newToDo);
    addToDo();
    localStorage.setItem('TODO', JSON.stringify(list));

});


// открывает модальные окна, и проверяет check
listToDo.addEventListener('click', function(event) {
   let id =  event.target.closest('li').getAttribute('id');
    // при клике на кнопку открывает modal-delete  и ставит ей атрибут для удаление
    if (event.target.classList.contains('fa-trash')) { 
        modalDelete.style.visibility = 'visible';
        modalDelete.setAttribute('data-del', id);
    }

    // при клике открывает modal-edit и вставляет текст из блока для редагування
    if(event.target.classList.contains('fa-edit')) {
        textEdit.textContent = list[id].todo; 
        modalEdit.setAttribute('data-edit', id);
        modalEdit.style.visibility = 'visible';
    }


    //при клике меняет значение на check(true)  або на check(false)
    if(event.target.classList.contains('fa-check-circle')) {
        list[id].check = !list[id].check;
    }
    id = '';
    addToDo();
    localStorage.setItem('TODO', JSON.stringify(list));
});



// удаляет toDo из списка
modalDelete.addEventListener('click', function(event) {
    let id = this.getAttribute('data-del');
    list.forEach( (item, i) => {
        // удаление toDo из localStorage
        if(event.target.getAttribute('data-delete') == 'yes') {
            if(item.id == id) {
                list.splice(i, 1); 
                modalDelete.style.visibility = 'hidden';
                
            } 
            addToDo();
            localStorage.setItem('TODO', JSON.stringify(list));      
        }
        if(event.target.getAttribute('data-delete') == 'no') {
            modalDelete.style.visibility = 'hidden';
        }

    });
});

// редакт  текста
modalEdit.addEventListener('click', function(event) {
    let id = this.getAttribute('data-edit');
        if(event.target.getAttribute('data-edit') == 'save') {
            if(list[id].todo == textEdit.textContent) {
               list[id].todo = textEdit.value;
               modalEdit.style.visibility = 'hidden';
               modalEdit.removeAttribute('data-edit');
            }
        }
        if(event.target.getAttribute('data-edit') == 'no') {
            modalEdit.style.visibility = 'hidden';
            modalEdit.removeAttribute('data-edit');
        }
   addToDo();
   localStorage.setItem('TODO', JSON.stringify(list));
});
















//функция добавление toDo
function addToDo() {
    let todo = '';
    if(list.length === 0) {
        listToDo.innerHTML =  '';
    }
    list.forEach((item,i) => {
        item.id = i;
        todo += `<li class="list-item" id="${i}">
        <div class="date">
            <span>${(item.day<10?'0':false) + item.day}.${(item.month+1)<10?'0'+(item.month + 1):false}.${item.fullYear}</span>
            <span>${(item.hours<10?'0':false) + item.hours}:${(item.minutes<10?'0':false) + item.minutes}</span>
        </div>
        <div class="prioritet">0</div>
        <div class="arrows">
            <span id="arrowUp">
                <i class="fas fa-arrow-up"></i>
            </span>
            <span id="arrowDown">
                <i class="fas fa-arrow-down"></i>
            </span>
        </div>
        <div class="textValue ${item.check?'check':''}">
            ${item.todo}   
        </div>
        <div class="block-icon">
            <span class="icon edit">
                <i class="fas fa-edit"></i>
            </span>
            <span class="icon check">
                <i class="fas fa-check-circle ${item.check?'checkButton':''}"></i>
            </span>
            <span class="icon trash">
                <i class="fas fa-trash"></i>
            </span>
        </div>
    </li>  `;
    listToDo.innerHTML =  todo;
    });
}

// Функции для входа на странцицу

    //функция проверяет email
    function checkEmail() {
        const emailo = 'testuser@todo.com';
        if( email.value == emailo) {
            txtEmail.innerHTML = '';
            return true;
        } else {
            txtEmail.innerHTML = 'Wrong email';
            txtEmail.style.color = 'red';
            return false;
        }
    }


    //функция проверяет пароль
    function checkPassword() {
        const parol = '12345678';
        if(password.value == parol) {
            txtPassw.innerHTML = '';
            return true;
        } else {
            txtPassw.innerHTML = 'Wrong password';
            txtPassw.style.color = 'red';
            return false;
        }
    }

