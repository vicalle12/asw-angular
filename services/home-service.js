// Este servicio lo vamos a utilizar para registrar nuevos usuarios,
// loguear (autenticar) usuarios, y para obtener la información
// del usuario que haya autenticado.

// $http y $q están explicados en tareas-service.js
// $window es un servicio que nos da angular y que utilizaremos
// para guardar el token cuando autentiquemos un usuario
HomeService = function($http, $q, $window) {
    var SERVER_URL_AUTH = "http://localhost:8080/authenticate";
    var SERVER_URL_USERS = "http://localhost:8080/usuarios";

    var user = null;
}

angular.module('HackerNewsApp').service('HomeService', ['$http', '$q', '$window', HomeService]);