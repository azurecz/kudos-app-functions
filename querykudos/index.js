module.exports = function (context, req) {

    context.res = {
        status: 200,
        body: context.bindings.inputDocument
    };
    context.done();
};