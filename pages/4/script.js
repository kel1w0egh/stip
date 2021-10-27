function exercise2() {
    let form = document.forms.formSearchStr.addEventListener("submit", (e) => {
        e.preventDefault();
        let str = e.target.str.value;
        let strings = Array.from(str.matchAll(/a[b]{2,4}a/g));
        // document.querySelector(".result-search-str").classList.toggle("hide-field");
        document.querySelector(".result-search-str span").innerHTML = strings.join(" ");
    });
}

function exercise1() {
    let valid = true;
    document.forms.formTestValidate.addEventListener("submit", (e) => {
        e.preventDefault();
        // Имя
        if (e.target.firstname.value.match(/[0-9]+/g) !== null || e.target.firstname.value === "") {
            e.target.firstname.classList.add("invalid-field");
            valid = false;
        } else {
            e.target.firstname.classList.remove("invalid-field");
            valid = true;
        }
        // Фамилия
        if (e.target.surname.value.match(/[0-9]+/g) !== null || e.target.surname.value === "") {
            e.target.surname.classList.add("invalid-field");
            valid = false;
        } else {
            e.target.surname.classList.remove("invalid-field");
            valid = true;
        }
        // Телефон
        if (e.target.phoneNumber.value.match(/\+380[0-9]{9}$/g) === null || e.target.phoneNumber.value === "") {
            e.target.phoneNumber.classList.add("invalid-field");
            valid = false;
        } else {
            e.target.phoneNumber.classList.remove("invalid-field");
            valid = true;
        }
        // Компания
        if (e.target.email.value === "") {
            e.target.company.classList.add("invalid-field");
            valid = false;
        } else {
            e.target.company.classList.remove("invalid-field");
            valid = true;
        }
        // Карта
        if (e.target.bankCard.value.match(/[0-9]{16}/g) === null || e.target.email.value === "") {
            e.target.bankCard.classList.add("invalid-field");
            valid = false;
        } else {
            e.target.bankCard.classList.remove("invalid-field");
            valid = true;
        }
        // Почта
        if (e.target.email.value.match(/^.+@.+$/g) === null || e.target.email.value === "") {
            e.target.email.classList.add("invalid-field");
            console.log("test");
            valid = false;
        } else {
            e.target.email.classList.remove("invalid-field");
            valid = true;
        }

        if (valid === true) {
            alert("🤓Форма прошла валидацию!🤓");
        }
    });
}

exercise1();
exercise2();