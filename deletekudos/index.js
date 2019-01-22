module.exports = function (context, req) {
    // Delete kudos in Cosmos DB
    // Kudos id is in path attribute (context.bindingData.id)
    
    context.log('Received deletekudos request');

    context.res = {
        status: 204,
        body: ""
    };

    context.done();
};