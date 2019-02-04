module.exports = function (context, req) {
    
    context.bindings.outputDocument = JSON.stringify({
        author: req.body.author,
        receiver: req.body.receiver,
        description: req.body.description,
        category: req.body.category
      });

    context.res = {
        status: 201,
        body: req.body
    };

    context.done();
};