const editor = document.getElementById("editor");


editor.addEventListener("input", ()=> { // событие input срабатывает каждый раз при ЛЮБЫХ изменениях значений
        localStorage.setItem("text", editor.value); // записывает в localStorage содержимое поля
})

editor.value = localStorage.getItem("text"); //вызываем из localStorage сохраненное содержимое поля

//создем кнопку очистки содержимого поля
let btnClear = document.createElement('button');
btnClear.id = "btn_clear";
btnClear.textContent = "Очистить содержимое";

const mainContent = document.querySelector(".content")
//добавляем кнопку на страницу под <main>
mainContent.insertAdjacentElement('afterend', btnClear) // тут для вставки кнопки нужен Element, а не HTML!!!

//document.body.append(btnClear); //добавляем кнопку на страницу вариант

const btnClearButton = document.getElementById("btn_clear");

btnClearButton.addEventListener("click", ()=> { //обработчик очистки содержимого localStorage
        localStorage.clear();

        //варианты очистки содержимого localStorage
       // localStorage.removeItem("text");
       //editor.value = "";
       //delete localStorage.text;
})


