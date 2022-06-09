document.querySelector('#firstName').addEventListener('blur', validateFirstName);
// document.querySelector('#firstName').addEventListener('keyup', validateFirstName);

document.querySelector('#lastName').addEventListener('blur', validateLastName);
// document.querySelector('#lastName').addEventListener('keyup', validateLastName);

document.querySelector('#email').addEventListener('blur', validateEmail);
// document.querySelector('#email').addEventListener('keyup', validateEmail);

const expresions = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	// password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/
}

function validateFirstName() {
    const fn = document.querySelector("#firstName");

    if(expresions.name.test(fn.value)) {
        fn.classList.remove("is-invalid");
        return true;
    } else {
        fn.classList.add("is-invalid");
        return false;
    }
}

function validateLastName() {
    let ln = document.querySelector("#lastName");

    if(expresions.name.test(ln.value)) {
        ln.classList.remove("is-invalid");
        return true;
    } else {
        ln.classList.add("is-invalid");
        return false;
    }
}

function validateEmail() {
    let e = document.querySelector("#email");

    if(expresions.email.test(e.value)) {
        e.classList.remove("is-invalid");
        return true;
    } else {
        e.classList.add("is-invalid");
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
            ) {
                e.preventDefault();
                e.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    })
})()