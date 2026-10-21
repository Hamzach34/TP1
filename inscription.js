const formulaire = document.getElementById("formulaire");
const message = document.getElementById("message");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const motdepasse = document.getElementById("motdepasse").value;
    const confirmation = document.getElementById("confirmation").value;

    if (!nom || !prenom || !email || !motdepasse || !confirmation) {
        message.style.color = "red";
        message.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    if (motdepasse.length < 8) {
        message.style.color = "red";
        message.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
        return;
    }

    if (motdepasse !== confirmation) {
        message.style.color = "red";
        message.textContent = "Les mots de passe ne correspondent pas.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Inscription réussie !";

    formulaire.reset();
});