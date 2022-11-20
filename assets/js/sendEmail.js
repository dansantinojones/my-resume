function sendMail(contactForm) {
    console.log(contactForm)
    emailjs.send("service_hbs8s8p", "my-resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
        return false;
}