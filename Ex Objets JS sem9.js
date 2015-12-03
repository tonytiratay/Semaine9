Contacts = [{
    prenom: "James",
  	nom: "Smith",
  	numero: "0101010101"
		},
            {
    prenom: "John",
    nom: "Doe",
    numero: "020202020202"
            }];


function textContacts(contact) {
  return contact.prenom + " " + contact.nom + " " + contact.numero ;
}

alert(textContacts(Contacts[0]));

