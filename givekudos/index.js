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
    //     "id": 348e93ca-2bf9-47ac-bc31-ff39fbbf9feb,
    //     "giver": "user1",
    //     "receiver": "user2",
    //     "category": "Helping others",
    //     "description": "Kudos for helping me setting up my pc",
    //     "link": {
    //         "rel": "kudos",
    //         "href": "/kudos/348e93ca-2bf9-47ac-bc31-ff39fbbf9feb"
    //     }
    // }
    
    context.log('Received givekudos request');

    var kudos={
        "id": "348e93ca-2bf9-47ac-bc31-ff39fbbf9feb",
        "giver": "user1",
        "receiver": "user2",
        "category": "Helping others",
        "description": "Kudos for helping me setting up my pc",
        "link": {
            "rel": "kudos",
            "href": "/kudos/348e93ca-2bf9-47ac-bc31-ff39fbbf9feb"
        }
    }

    context.res = {
        status: 201,
        body: kudos
    };

    context.done();
};