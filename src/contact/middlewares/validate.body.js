function validateBody(request, response, next) {
    const body = request.body;
    const validator = { errors: {}, isValid: true };
    if (!body.nom) {
      validator.errors.nom = "le nom ne peut pas être vide";
    }

    if (!body.prenom) {
      validator.errors.prenom = "le prénom ne peut pas être vide";
    }

    if (!body.numeros_de_telephone.fixe && !body.numeros_de_telephone.portable && !body.numeros_de_telephone.bureau) {
        validator.errors.prenom = "Veuillez renseigner au moins un numéro de téléphone";
    }

    if (!body.mail) {
        validator.errors.mail = "le mail ne peut pas être vide";
    }

    if (!body.poste_occupe) {
        validator.errors.poste_occupe = "le poste occupé ne peut pas être vide";
    }

    if (!body.entreprise) {
        validator.errors.entreprise = "l'entreprise associé à ce contact ne peut pas être vide";
    }

    if (!body.adresse_de_l_entreprise) {
        validator.errors.adresse_de_l_entreprise = "l'adresse de l'entreprise associé à ce contact ne peut pas être vide";
    }

    if (validator.errors.nom || validator.errors.prenom || validator.errors.mail || validator.errors.poste_occupe || validator.errors.entreprise || validator.errors.adresse_de_l_entreprise) {
      validator.isValid = false;
    }

    if (!validator.isValid) {
      return response.status(422).send(validator);
    }

    next();
}

module.exports.validateBody = validateBody;