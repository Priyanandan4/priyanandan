function sendmail(){
    let parms={
        name:document.getElementById("floatingInput").value,
        email:document.getElementById("floatingEmail").value,
        subject:document.getElementById("floatingPassword").value,
        message:document.getElementById("floatingMessage").value,
    }
    emailjs.send("service_csxzd6t","template_uysw29o",parms).then(alert("Email Sent!!"))
}