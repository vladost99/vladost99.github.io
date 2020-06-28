//елменты блока входа
const blockLogin = document.querySelector('#login'), //block login
    btnLogin = document.querySelector('#btnLogin'), //button login
    email = document.querySelector('#email'), //input email
    password = document.querySelector('#password'), //input password
    txtEmail = document.querySelector('#txtEmail'), //text email
    txtPassw = document.querySelector('#txtPass');  //text password
    
 // block modal window   
const blocksModal = document.querySelector('.blocks-modal'); //block modal window


// елемены блока toDoList
const blockToDo = document.querySelector('#blockTodo'); //block toDoList

    //при клике проверяет логин и пароль,если правильно скрывает блок
btnLogin.addEventListener('click', function() {
    checkEmail();
    checkPassword();

    if (checkEmail()  &&  checkPassword()) {
        blockLogin.classList.add('hide');
        blockToDo.classList.add('active');
        blocksModal.classList.add('active');
    }
});















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

