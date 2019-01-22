module.exports = function (context, req) {
    // Update kudos and update it in Cosmos DB
    // Kudos id is in path attribute (context.bindingData.id)
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
    //         "href": "/kudos/1"
    //     }
    // }
    
    context.log('Received querykudos request');

    var kudos={
        "id": context.bindingData.id,
        "giver": "user1",
        "receiver": "user2",
        "category": "Helping others",
        "description": "Kudos for helping me setting up my pc",
        "link": {
            "rel": "kudos",
            "href": "/kudos/"+context.bindingData.id
        }
    }

    context.res = {
        status: 201,
        body: kudos
    };

    context.done();
};