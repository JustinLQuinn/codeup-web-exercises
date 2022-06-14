const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// const languagesAll = users.filter(function (user) {
//     return user.languages.length >= 3
// });

// const Emails = users.map(function(user){
//     return user.email
// });

// var totalYearsExperience = users.reduce((total,user)=>{
//     return  total + user.yearsOfExperience;
// }, 0);
//
// var averageYears = totalYearsExperience / users.length

// console.log(averageYearsExperience);

const longestEmail = users.reduce(function(longestEmailSoFar, user){
    if(user.email.length > longestEmailSoFar.length) {
    return user.email;
}
return longestEmailSoFar;
}, "");

users.reduce(function(allUserNamesSoFar,user){
    return allUserNamesSoFar + user.name + ", ";
});
allUserNames = allUserNames.substr(0,allUserNames.length -2);

console.log(allUserNames);
