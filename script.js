/*Модальное окно*/
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});

//Валидация 
function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        alert("Пароль и подтверждение пароля не совпадают");
        return false;
    }
    
    var inputs = document.forms["registrationForm"].getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checkValidity() === false) {
            alert("Пожалуйста, заполните все поля корректно");
            return false;
        }
    }
    
    return true;
}

//Вывод сообщения об успешной валидации
document.getElementById("confirmButton").addEventListener("click", function() {
    if (validateForm()) {
        alert("Спасибо за ваше обращение!");
    }
});

//Кнопка видимости пароля
function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

