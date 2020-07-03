//елменты блока входа
const blockLogin = document.querySelector('#login'), //block login
    btnLogin = document.querySelector('#btnLogin'), //button login
    email = document.querySelector('#email'), //input email
    password = document.querySelector('#password'), //input password
    txtEmail = document.querySelector('#txtEmail'), //text email
    txtPassw = document.querySelector('#txtPass');  //text password
    

// елемены блока toDoList
const blockToDo = document.querySelector('#blockTodo'),  //block toDoList
      inputTask = document.querySelector('#addinput'),  //input task
      btnAddTodo = document.querySelector('#btnAddTask'),  //add task
      blockFilter = document.querySelector('.blockFilter'); // block filter
      listToDo = document.querySelector('#todoList'),  //ul list
      textEdit = document.querySelector('.textEdit'), //text edit
      searchInput = document.querySelector('#search-input'); // search input
     

// modal window     
const modalDelete = document.querySelector('.modal-delete'),  //modal delete
      modalEdit = document.querySelector('.modal-edit'); // modal edit


//при клике проверяет логин и пароль,если правильно скрывает блок
btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
    checkEmail();
    checkPassword();

    if (checkEmail()  &&  checkPassword()) {
        blockLogin.classList.add('hide');
        blockToDo.classList.add('active');
    }
});




let list = [];
if (localStorage.getItem('TODO')) {
    list = JSON.parse(localStorage.getItem('TODO'));
    addToDo();
}
//при нажатие на кнопку додается toDo
btnAddTodo.addEventListener('click', function() {
    const  date = new Date();
    if(!inputTask.value) {
        return;
    }
    
    const  newToDo = {
            todo: inputTask.value,
            fullYear: date.getFullYear(),
            day: date.getDate(),
            month: date.getMonth(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            milliseconds: date.getTime(),
            check: false,
            priority: 1
    };

    list.push(newToDo);
    addToDo();
    localStorage.setItem('TODO', JSON.stringify(list));
    inputTask.value = '';
    
});


// открывает модальные окна, и проверяет check
listToDo.addEventListener('click', function(event) {
    let id =  event.target.closest('li').getAttribute('id');
   // показывает  модалные окна
    showModals(event.target, id);
    
    // изменяет значение check
    check(event.target, id);

    // изменение приоритета
    changePriority(event.target, id);
    
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
                modalDelete.style.visibility = 'hidden';
                list.splice(i, 1);
                
            } 
                
        }
        if(event.target.getAttribute('data-delete') == 'no') {
            modalDelete.style.visibility = 'hidden';
        }

    });
    addToDo();
    localStorage.setItem('TODO', JSON.stringify(list));
});

// редакт  текста
modalEdit.addEventListener('click', function(event) {
    let id = this.getAttribute('data-edit');
    editText(event.target, id);
    localStorage.setItem('TODO', JSON.stringify(list));
    addToDo();
});

//  при клике сортирует
blockFilter.addEventListener('click', function(e) {
    sort(e.target);
    localStorage.setItem('TODO', JSON.stringify(list));
    addToDo();
});

// пошук
searchInput.addEventListener('input', function() {
   let value = this.value.trim();
   let liText = document.querySelectorAll('#todoList .textValue');
   if( value != '') {
       liText.forEach(item => {
        if(item.textContent.search(value) == -1) {
            item.parentElement.classList.add('hide');
            item.innerHTML = item.innerText;
        } else {
            item.parentElement.classList.remove('hide');
            let str = item.innerText;
            item.innerHTML = insertMark(str, item.textContent.search(value), value.length);
        }
       });
    }
    else {
        liText.forEach(item => {
            item.parentElement.classList.remove('hide');
            item.innerHTML = item.innerText;
        });
    }
});










// <!--                    Функции                  -->


//подсветка при поиске
function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos +len)+ '</mark>' + string.slice(pos + len);
}


// функция сортирует по дате,приоритету,check
function sort(target) {
    // сортирует по check
    if(target.classList.contains('fa-filter')) {
        if(target.getAttribute('data-check') == 'true') {
            list.sort((a, b) => {
              return  b.check - a.check;
            });
            target.setAttribute('data-check', 'false');
        }
         else {
            list.sort((a, b) => {
                return  a.check - b.check;
            });
            target.setAttribute('data-check', 'true');
         }
    }

    // sort Priority
    if(target.classList.contains('fa-sort-numeric-down')) {
        if(target.getAttribute('data-sortprioity') == 'true') {
            list.sort((a, b) => {
              return  a.priority>b.priority?1:-1;
            });
            target.setAttribute('data-sortprioity', 'false');
        }
         else {
            list.sort((a, b) => {
                return  b.priority>a.priority?1:-1;
            });
            target.setAttribute('data-sortprioity', 'true');
         }
    }
    // sort Date 
    if(target.classList.contains('fa-sort')) {
        if(target.getAttribute('data-sortdate') == 'true') {
            list.sort((a, b) => {
              return  a.milliseconds<b.milliseconds?1:-1;
            });
            target.setAttribute('data-sortdate', 'false');
        }
         else {
            list.sort((a, b) => {
                return  a.milliseconds>b.milliseconds?1:-1;
            });
            target.setAttribute('data-sortdate', 'true');
         }
    }

}




// функция для check
function check(target,id) {
    if(target.classList.contains('fa-check-circle')) {
        list[id].check = !list[id].check;
    }
}



//функция редактирут текст
function editText(target, id) {
    if(target.getAttribute('data-edit') == 'save') {
        if(!textEdit.value) return;
        list[id].todo = textEdit.value;
        modalEdit.style.visibility = 'hidden';
        modalEdit.removeAttribute('data-edit');
    }
    
    if(target.getAttribute('data-edit') == 'no') {
        modalEdit.style.visibility = 'hidden';
        modalEdit.removeAttribute('data-edit');
    }
}


// функкия показывает окна
function showModals(target,id) {
    // модальное окно для удаление елемента из списка
    if (target.classList.contains('fa-trash')) { 
        modalDelete.style.visibility = 'visible';
        modalDelete.setAttribute('data-del', id);
    }
    // модальное окно для редактирование текста
   if(target.classList.contains('fa-edit')) { 
        textEdit.value = list[id].todo;
        modalEdit.setAttribute('data-edit', id);
        modalEdit.style.visibility = 'visible';
    }
}


//функция для изменения приоритета
function changePriority(target,id) {
  if(target.classList.contains('fa-arrow-up')) {
      list[id].priority++;
  } 
  if(target.classList.contains('fa-arrow-down')) {
      list[id].priority--;
  } 
  if( list[id].priority <= 1) {
      list[id].priority = 1;
  }

}



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
        <div class="prioritet">${item.priority}</div>
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

