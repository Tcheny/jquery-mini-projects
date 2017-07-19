$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
        var firstName = $('#first').val();
        var lastName = $('#last').val();
        var email = $('#email').val();
        var password = $('#password').val();
          //var lastName;
          //var email;
          //var password;

        //vérifier la valeur de l'input first-name
        //si c'est vide, j'affiche msg erreur
        if (firstName === "") {
            $('.first-name-error').html('Please enter your first name');
        };
        //vérifier la valeur de l'input last-name
        //si c'est vide, j'affiche msg erreur

        if (lastName === "") {
             $('.last-name-error').html('Please enter your last name');
         };
        //vérifier la valeur de l'input email
        //si c'est vide, j'affiche msg erreur
        if (email === "") {
             $('.email-error').html('Please enter your email');
         };

        //vérifier la valeur de l'input password
        //si c'est vide, j'affiche msg erreur
        //si password length < 8, j'affiche msg erreur
        if (password === ""){
            $('.password-error').html('Please enter your password')
        } else if (password.length < 8) {
            $('.password-error').html('Please enter 8 characters')
        };
    });
    });
