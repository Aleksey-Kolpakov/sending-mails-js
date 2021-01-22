import './styles.css';
import Email from './js/smtp.js'

const formRef = document.querySelector('.js-form');
formRef.addEventListener('submit', sendEmail);

function formDataCollect(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const submitData = {};
    formData.forEach((value, key) => {
        submitData[key] = value;
    });

    console.log(submitData);
    return submitData;
}



function sendEmail(event) {
    const formData = formDataCollect(event);
    Email.send({
        SecureToken: '4f96d848-d964-49a0-89fd-37b9ba572800',
        To: 'kolpakov87@ukr.net',
        From: "alekseykopov874@gmail.com",
        Subject: "Заявка с сайта www.Aleksey-Kolpakov.com",
        Body: `Имя:${formData.name}
        Телефон:${formData.pfone}
        email:${formData.mail}
        Коментарий:${formData.coments}
        Согласен с условиями:${formData.agreements}
         `,
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}