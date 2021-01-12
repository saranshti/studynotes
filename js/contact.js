function sleep(ms) {
    return new Promise(resolver => setTimeout(resolver, ms));
};
function submitForm() {
    let name = document.getElementById("name").value;
    let facc = document.getElementById("facc").value;
    let iacc = document.getElementById("iacc").value;
    let gacc = document.getElementById("gacc").value;
    let about = document.getElementById("about").value;
    if (name == "" || facc == "" || iacc == "" || gacc == "" || about == "") {
    } else {
        swal("Wait", "We are Processing the Request.(Don't close the window.)", "info");
        sendEmail(name, facc, iacc, gacc, about);
        sleep(3000).then(() => {
            document.getElementById("name").value="";
            document.getElementById("facc").value="";
            document.getElementById("iacc").value="";
            document.getElementById("gacc").value="";
            document.getElementById("about").value="";
            window.location.href="index.html";
        });
    }
}

function sendEmail(name, facc, iacc, gacc, about) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'saransht086867@gmail.com',
        Password: "soicdoscfoedhklb",
        To: 'saransht086867@gmail.com',
        From: 'saransht086867@gmail.com',
        Subject: `${name} send you a message`,
        Body: `Name:${name} <br/> FAcc:${facc} <br/> IAcc:${iacc} <br/> GAcc:${gacc} <br/> About:${about}`
    }).then(
        (message) => swal("Requset is Send", "Wait for some hours our Team Member will contact to you.", "success")
    );
}