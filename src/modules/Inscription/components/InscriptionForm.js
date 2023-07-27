import React, { useState } from "react";
import InscriptionFormStyle from "../Style/InscriptionFormStyle";

function InscriptionForm() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
    const [pays, setPays] = useState("");
    const [numeroTel, setNumeroTel] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleNomChange = (e) => {
        setNom(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMotDePasseChange = (e) => {
        setMotDePasse(e.target.value);
    };

    const handleConfirmationMotDePasseChange = (e) => {
        setConfirmationMotDePasse(e.target.value);
    };

    const handlePaysChange = (e) => {
        setPays(e.target.value);
    };

    const handleNumeroTelChange = (e) => {
        setNumeroTel(e.target.value);
    };

    const handleDateNaissanceChange = (e) => {
        setDateNaissance(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifier si les champs obligatoires sont remplis
        if (nom === "" || email === "" || motDePasse === "" || confirmationMotDePasse === "" || pays === "" || numeroTel === "" || dateNaissance === "") {
            setErrorMessage("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        // Vérifier si les mots de passe correspondent
        if (motDePasse !== confirmationMotDePasse) {
            setErrorMessage("Les mots de passe ne correspondent pas.");
            return;
        }

        // Effectuer des actions supplémentaires, comme l'envoi des données d'inscription au serveur

        // Réinitialiser le formulaire après la soumission
        setNom("");
        setEmail("");
        setMotDePasse("");
        setConfirmationMotDePasse("");
        setPays("");
        setNumeroTel("");
        setDateNaissance("");
        setErrorMessage("");
    };

    return (
        
        <div style={InscriptionFormStyle.container}>
            <h2 style={InscriptionFormStyle.title}>Inscription</h2>
            {errorMessage && <p style={InscriptionFormStyle.error}>{errorMessage}</p>}
            <form style={InscriptionFormStyle.form} onSubmit={handleSubmit}>
                <div>
                    <label style={InscriptionFormStyle.label} htmlFor="nom">Nom :</label>
                    <input
                        style={InscriptionFormStyle.input}
                        type="text"
                        id="nom"
                        value={nom}
                        onChange={handleNomChange}
                        required
                    />
                </div>
                <div>
                    <label style={InscriptionFormStyle.label} htmlFor="email">Email :</label>
                    <input
                        style={InscriptionFormStyle.input}
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label style={InscriptionFormStyle.label} htmlFor="motDePasse">Mot de passe :</label>
                    <input
                        style={InscriptionFormStyle.input}
                        type="password"
                        id="motDePasse"
                        value={motDePasse}
                        onChange={handleMotDePasseChange}
                        required
                    />
                </div>
                <div>
                    <label style={InscriptionFormStyle.label} htmlFor="confirmationMotDePasse">Confirmer le mot de passe :</label>
                    <input
                        style={InscriptionFormStyle.input}
                        type="password"
                        id="confirmationMotDePasse"
                        value={confirmationMotDePasse}
                        onChange={handleConfirmationMotDePasseChange}
                        required
                    />
                </div>
                <div>
                    <label style={InscriptionFormStyle.label} htmlFor="pays">Pays :</label>
                    <input
                        style={InscriptionFormStyle.input}
                        type="text"
                        id="pays"
                        value={pays}
                        onChange={handlePaysChange}
                        required
                    />
                </div>
                <div>
                    <label style={InscriptionFormStyle.label} htmlFor="numeroTel">Numéro de téléphone :</label>
                    <input
                        style={InscriptionFormStyle.input}
                        type="tel"
                        id="numeroTel"
                        value={numeroTel}
                        onChange={handleNumeroTelChange}
                        required
                    />
                </div>
                <div>
                    <label style={InscriptionFormStyle.label} htmlFor="dateNaissance">Date de naissance :</label>
                    <input
                        style={InscriptionFormStyle.input}
                        type="date"
                        id="dateNaissance"
                        value={dateNaissance}
                        onChange={handleDateNaissanceChange}
                        required
                    />
                </div>
                <button style={InscriptionFormStyle.button} type="submit">S'inscrire</button>
            </form>
        </div>
    );
}


export default InscriptionForm;
