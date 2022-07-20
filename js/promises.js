(async function() {
    "use strict"
    let options = {
        method: "GET",
        headers: {
            'Authorization': `token ${GITHUB_API_KEY}`
        }
    };

    function getLastCommitForUser(userName) {

        // let options = {headers: {
        //         'Authorization': `token ${GITHUB_API_KEY}`
        //     }
        //
        //  fetch('https://api.github.com/users/JustinLQuinn/events/public', options)
        //     .then(response => response.json());
        // console.log(response);

        return fetch('https://api.github.com/users/' + userName + '/events/public', options)
            .then(function (response) {
                return response.json();
            }).then(function (events) {
                // console.log(events);
                for (let i = 0; i < events.length; i++) {
                    // console.log(events[i]);
                    if (events[i].type === "PushEvent")
                        return events[i].created_at;
                    //"Zulu_time = Central_Standard_Time(CST) + 6 hours"
                }
            })
    }
    console.log(await getLastCommitForUser("JustinLQuinn"));

})();
