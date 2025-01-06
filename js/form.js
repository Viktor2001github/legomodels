const form = document.querySelector('#form');
const launchBtn = document.querySelector('#launch-btn');
const goToFormButton = document.querySelector('#go-to-form-btn');
const userEmailField = document.querySelector('#user-email');
const userNameField = document.querySelector('#user-name');

goToFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.scrollIntoView();
});

function clearFormFields() {
    userEmailField.value = '';
    userNameField.value = '';
}

function addGooseElement() {
    const targetContainer = document.querySelector('#form');
    const gooseEl = document.createElement('img');
    gooseEl.classList.add('stars-anim');
    gooseEl.style.display = 'none'; // Спочатку ховаємо елемент

    targetContainer.appendChild(gooseEl);
}

function showGooseAnim() {
    const gooseEl = document.querySelector('.stars-anim');
    gooseEl.setAttribute('src', './img/stars.gif');
    gooseEl.style.display = 'block';

    setTimeout(() => {
        gooseEl.removeAttribute('src');
        gooseEl.style.display = 'none';
    }, 4000);
}

addGooseElement();

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    // Перевірка довжини Email
    if (userEmailField?.value?.length > 30) {
        alert('Email має містити не більше 30 символів.');
        return;
    }

    console.log('Імʼя користувача: ', userNameField.value);
    console.log('Email користувача: ', userEmailField.value);

    launchBtn.setAttribute('disabled', true);
    launchBtn.style.opacity = '0.7';

    showGooseAnim();

    setTimeout(() => {
        launchBtn.removeAttribute('disabled'); // Дозволяємо знову натискати кнопку
        launchBtn.style.opacity = '1';
        clearFormFields(); // Очищення полів після відправки
    }, 4000);
});