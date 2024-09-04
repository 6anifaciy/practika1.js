let lastName = prompt('Ведите вашу фамилию:');
let firstName = prompt('Ведите ваше имя:');
let middleName = prompt('Ведите ваше отчество:');


alert('Фамилия:' + lastName);
alert('Имя:' + firstName);
alert('Отчество:' + middleName);

let isTrue = confirm('Ваше полное имя:' + lastName + ' ' + firstName + ' '+ middleName + '?');
alert('Подтверждение ФИО: ' + isTrue);

