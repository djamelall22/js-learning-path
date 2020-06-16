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
// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//     }
//     login(){
//         console.log(this.email, 'just logged in');
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//     }
// }

// var userOne = new User('ryu@ninjas.com', 'Ryu');
// var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

// userOne.login();
// userTwo.logout();

// ////////////////////////////////////////////////////////////////////

// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }

// var userOne = new User('ryu@ninjas.com', 'Ryu');
// var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

// userOne.login().updateScore().updateScore().logout();

// console.log(userOne);

// --------------------Class Inheritance---------------------

// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//     this.score = 0;
//   }
//   login() {
//     console.log(this.email, 'just logged in');
//     return this;
//   }
//   logout() {
//     console.log(this.email, 'just logged out');
//     return this;
//   }
//   updateScore() {
//     this.score++;
//     console.log(this.email, 'score is now', this.score);
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(user) {
//     users = users.filter((u) => {
//       return u.email != user.email;
//     });
//   }
// }

// var userOne = new User('ryu@ninjas.com', 'Ryu');
// var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
// var admin = new Admin('shaun@ninjas.com', 'Shaun');

// var users = [userOne, userTwo, admin];

// // admin.deleteUser(userTwo);
// userTwo.deleteUser(userOne); // won't work

// console.log(users);

// -----------------------------------------under the hood------------------------------

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, 'has logged in');
  };
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();
