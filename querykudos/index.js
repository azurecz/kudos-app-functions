module.exports = function (context, req) {
    // Read kudos from Cosmos DB
    // Filter based on query string giver, receiver or both
    
    context.log('Received givekudos request');

    var kudos=[
        {
            "id": "348e93ca-2bf9-47ac-bc31-ff39fbbf9feb",
            "giver": "user1",
            "receiver": "user2",
            "category": "Helping others",
            "description": "Kudos for helping me setting up my pc",
            "link": {
                "rel": "kudos",
                "href": "/kudos/348e93ca-2bf9-47ac-bc31-ff39fbbf9feb"
            }
        },
        {
            "id": "348e93ca-2bf9-47ac-bc31-ff39fbbf9aaa",
            "giver": "user1",
            "receiver": "user3",
            "category": "Helping others",
            "description": "Kudos for helping me setting up my phone",
            "link": {
                "rel": "kudos",
                "href": "/kudos/348e93ca-2bf9-47ac-bc31-ff39fbbf9aaa"
            }
        }
    ]

    context.res = {
        status: 200,
        body: kudos
    };

    context.done();
};