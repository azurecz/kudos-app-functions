module.exports = function (context, req) {
    // Give kudos and write it Cosmos DB
    // Input JSON string:
    // {
    //     "giver": "user1",
    //     "receiver": "user2",
    //     "category": "Helping others",
    //     "description": "Kudos for helping me setting up my pc"
    // }

    // Return result with id and HATEOAS link
    // {
    //     "id": 1,
    //     "giver": "user1",
    //     "receiver": "user2",
    //     "category": "Helping others",
    //     "description": "Kudos for helping me setting up my pc",
    //     "link": {
    //         "rel": "kudos",
    //         "href": "./kudos/1"
    //     }
    // }
    
    context.log('Received querykudos request');

    var kudos={
        "id": 1,
        "giver": "user1",
        "receiver": "user2",
        "category": "Helping others",
        "description": "Kudos for helping me setting up my pc",
        "link": {
            "rel": "kudos",
            "href": "./kudos/1"
        }
    }

    context.res = {
        status: 201,
        body: kudos
    };

    context.done();
};