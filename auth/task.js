
const form = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const card = document.querySelector(".card");
const signin = document.getElementById("signin");


if (localStorage.getItem("user_id")){ // при наличии в localStorage user_id
        welcomeUser(localStorage.getItem("user_id")) // переход в приветствие пользователя
} else {
        authUser() // иначе запустиь авторизацию
}

function authUser() { // авторизация пользователя
      const URL = "https://students.netoservices.ru/nestjs-backend/auth";
        
        signinBtn.addEventListener("click", (even) => { 
                even.preventDefault();
                let xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.addEventListener("load", () => {  // обрабтывает запрос
                        const success = xhr.response['success']; //вычленяем статус success (true/false)
                        const id = xhr.response.user_id; //вычленяем user_id
                        localStorage.setItem("user_id", id) //записываем user_id в localStorage
                        if (success){ //если статус success true
                                welcomeUser(id); //запускаем приветствие пользователя

                        } else {
                                form.reset(); //очистка формы
                                alert("Неверный логин/пароль!")
                        }
                })
                xhr.open('POST', URL);
                let formData = new FormData(form);
                xhr.send(formData); // отправка запроса на сервер 
                
        })  
               
}

function welcomeUser(id){
        welcome.innerHTML = `Добро пожаловать, пользователь #${id}`; //Добавление в приветствие id
        signin.classList.remove("signin_active"); //убираем форму
        welcome.classList.add("welcome_active"); // подключаем приветствие пользователя
        const button = document.createElement("button"); //создаем кнопку очиски учетной записи
        button.classList.add("btn_out");
        card.appendChild(button);
        button.innerHTML = "Очистить учетную запись";
        const btnOut = document.querySelector(".btn_out");

        btnOut.addEventListener("click", () => { //обработчик кнопки очстки учетной записи
                localStorage.clear(); //очиска localStorage от user_id
                signin.classList.add("signin_active"); //включаем форму на экран
                welcome.classList.remove("welcome_active"); //отключаем приветствие пользователя
                btnOut.remove(); //убираем кнопку с экрана
                document.forms[0].reset(); //очистка первой формы в документе (аналог form.reset())
        })

}

