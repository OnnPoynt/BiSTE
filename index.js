function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "charansupriya@gmail.com",
//         Password: "fqbqzobkhycpyfhv",
//         To: 'reddycharan173@gmail.com',
//         From: document.getElementById("email").value,
//         Subject: "New contact form entry",
//         Body: 
//         "Name:" + document.getElementById("name").value + 
//         "<br> Company:" + document.getElementById("company").value + 
//         "<br> Email:" + document.getElementById("email").value + 
//         "<br> Phone no:" + document.getElementById("phone").value + 
//         "<br> Message:" + document.getElementById("message").value
//     }).then(
//         message => alert("message sent successfully")
//     );

// }

document.querySelector('.submitbutton')
    .addEventListener('submit', () => {
        window.location.href = 'https://app.netlify.com/sites/biste/overview';
    });
