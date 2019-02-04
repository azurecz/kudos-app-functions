module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
        var doc = context.bindings.inputDocument
        context.log('doc: ', doc);
        context.log('document: ', doc);
        context.res =  {
            // status: 200, /* Defaults to 200 */
            body: doc,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        context.done();

};