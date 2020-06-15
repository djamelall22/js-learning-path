// var userOne = {
//   email: 'ryu@ninjas.com',
//   name: 'Ryu',
//   login() {
//     console.log(this.email, 'has logged in');
//   },
//   logout() {
//     console.log(this.email, 'has logged out');
//   },
// };




// var prop = 'name'

// // userOne.email = 'ryu2k18@ninjas.com';
// // userOne['email'] = 'ryu2k18@ninjas.com';
// // userOne[prop] = 'Ryuke';

// // console.log(userOne);

// userOne.age = 25;
// userOne.logInfo = function(){
//     console.log(this.name, this.age, this.email);
// };

// userOne.logInfo();
// userOne.login();
// userOne.logout();


// ---------------classes-----------------------------/ 
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

userOne.login();
userTwo.logout();