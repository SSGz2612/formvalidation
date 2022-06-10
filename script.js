document.querySelector('#firstName').addEventListener('blur', validateFirstName);
document.querySelector('#lastName').addEventListener('blur', validateLastName);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

const expresions = {
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    emailRule2: /^[a-zA-Z0-9_.+-]+[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // there is not @
    emailRule3: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/, // there is not .
    phone: /[0-9]/,
	phoneRule2: /^\d{7,14}$/ // to 7 until 14 digits
}

function validateFirstName() {
    const fn = document.querySelector("#firstName");

    if(expresions.name.test(fn.value)) {
        fn.classList.remove("is-invalid");
        return true;
    } else {
        fn.classList.add("is-invalid");
        document.getElementById("firstNameValid").textContent = "Name must be without numbers or special characters and must insert 2 or more characters";
        return false;
    }
}

function validateLastName() {
    let ln = document.querySelector("#lastName");

    if(expresions.name.test(ln.value)) {
        ln.classList.remove("is-invalid");
        return true;
    } else {
        ln.classList.remove("valid");
        ln.classList.add("is-invalid");
        document.getElementById("lastNameValid").textContent = "Surname must be without numbers or special characters and must insert 2 or more characters";
        return false;
    }
}

function validateEmail() {
    let e = document.querySelector("#email");

    if(expresions.email.test(e.value)) {
        e.classList.remove("is-invalid");
        return true;
    } else if(expresions.emailRule2.test(e.value)) {
        e.classList.add("is-invalid");
        document.getElementById("emailValid").textContent = "Don't forget to insert @";
        return false;
    } else if(expresions.emailRule3.test(e.value)) {
        e.classList.add("is-invalid");
        document.getElementById("emailValid").textContent = "Don't forget to insert .";
        return false;
    }else {
        e.classList.add("is-invalid");
        document.getElementById("emailValid").textContent = "Please fill correctly";
        return false;
    }
}

function validatePhone(e) {
    let dataNum = String.fromCharCode(e.which);
    let p = document.querySelector("#phone");

    if(!expresions.phone.test(dataNum) && !expresions.phoneRule2.test(p.value)) {
        e.preventDefault();
        p.classList.add("is-invalid");
        document.getElementById("phoneValid").textContent = "Phone number must just to be to 7 from 14 digits";
        return true;
    } else {
        p.classList.remove("is-invalid");
        return false;
    }
}

// bootstrap code
(function() {
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
    .forEach( function(form) {
        form.addEventListener("submit", function(e) {
            if(
                !form.checkValidity()
                || !validateFirstName
                || !validateLastName
                || !validateEmail
                || !validatePhone
            ) {
                e.preventDefault();
                e.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    })
})()

// fetch("https://restcountries.com/v3.1/all")
// .then((response) => {
//     if(!response.ok) {
//         throw error("error");
//     }
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))