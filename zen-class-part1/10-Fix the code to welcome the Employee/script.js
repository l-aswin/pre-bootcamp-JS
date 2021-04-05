let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings Employee':
  (login == 'Director') ? 'Greetings Director' :
  (login == '') ? 'No login' :
  '';
console.log(message);