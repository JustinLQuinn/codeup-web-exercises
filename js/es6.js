/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'justinQ',
        email: 'justinquinn342@codeup.com',
        languages: ['html', 'css', 'javascript']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array


// // TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'David';
const email = 'skdjf32@mail';
//     let email = "dsg12@email";
const languages = ['hqs', 'sql', 'bootstrap'];
//
// console.log(users[5]);
// console.log(email);
// console.log(users[0]);
// // TODO: rewrite the object literal using object property shorthand
const newUser =
{
    name,
    email,
    languages
};
users.push(newUser);
console.log(users);
//
// // TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];
//
// // TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//     return emails.push(user.email);
// });
// users.forEach(function(user) {
//     return names.push(user.name);
// });
//
// // TODO: replace `var` with `let` in the following declaration
// var developers = [];
// users.forEach(function(user) {
//     // TODO: rewrite the code below to use object destructuring assignment
//     //       note that you can also use destructuring assignment in the function
//     //       parameter definition
//     const name = user.name;
//     const email = user.email;
//     const languages = user.languages;
//
//     // TODO: rewrite the assignment below to use template strings
//     developers.push(`${name}'s email is ${email} knows  ${languages.join(', ')}`);
// }
//
// // TODO: Use `let` for the following variable
// var list = '<ul>';
//
// // TODO: rewrite the following loop to use a for..of loop
// for ()
// developers.forEach(function (developer) {
//
//     // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';