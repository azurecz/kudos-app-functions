module.exports = function (context, req) {
    context.log('Received querykudos request');

    var kudos=[
        {
            "id": 1,
            "giver": "user1",
            "receiver": "user2",
            "category": "Helping others",
            "description": "Kudos for helping me setting up my pc",
            "link": {
                "rel": "kudos",
                "href": "./kudos/1"
            }
        },
        {
            "id": 2,
            "giver": "user1",
            "receiver": "user3",
            "category": "Helping others",
            "description": "Kudos for helping me setting up my phone",
            "link": {
                "rel": "kudos",
                "href": "./kudos/2"
            }
        }
    ]

    context.res = {
        body: kudos
    };

    context.done();
};