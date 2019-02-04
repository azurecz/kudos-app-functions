module.exports = function (context, req) {
    // Read kudos from Cosmos DB
    // Filter based on query string username or fullname
    // Return array of users:
    // [
    //     {
    //         "username": "mnovak",
    //         "fullname": "Martin Novak"
    //     },
    //     {
    //         "username": "jmikula",
    //         "fullname": "Jan Mikula"
    //     }
    // ]

    context.log('Received queryusers request');

    var users=[
        {
            "id": "1",
            "username": "mnovak",
            "fullname": "Martin Novak"
        },
        {
            "id": "2",
            "username": "jmikula",
            "fullname": "Jan Mikula"
        }
    ]

    context.res = {
        status: 200,
        body: users
    };

    context.done();
};