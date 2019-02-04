#r "Microsoft.Azure.Documents.Client"
#r "Newtonsoft.Json"
#r "Microsoft.Azure.WebJobs.Extensions.Http"

using System;
using System.Collections.Generic;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using System.Net;
using System.Net.Http.Formatting;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;
using Microsoft.Azure.WebJobs.Extensions.Http;


public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, string id, TraceWriter log, DocumentClient outputDocument)
{
      //Bulk delete
//       var collectionUri = UriFactory.CreateDocumentCollectionUri("kudos", "kudos");
//       log.Info($"doc: {collectionUri}");
//             log.Info("Displaying Documents details");
//             var query = "SELECT * FROM c";
//             var crossPartition = new FeedOptions { EnableCrossPartitionQuery = true };
//             var documentsList = outputDocument.CreateDocumentQuery(collectionUri, query, crossPartition).ToList();
//          foreach (var document in documentsList)
//             {
//                 await outputDocument.DeleteDocumentAsync(doc._self,options);
//                 log.Info($"Deleted customer with id: {document}");
//             }

    HttpResponseMessage response = new HttpResponseMessage();


     string pKey = req.GetQueryNameValuePairs()
            .FirstOrDefault(q => string.Compare(q.Key, "pKey", true) == 0)
            .Value;

    // for DELETE operation request body is NULL !!!
    // dynamic data = await req.Content.ReadAsAsync<PKObject>();
    // name = name ?? data?.name;
    //     log.Info("msg:" + name);

    try {
        RequestOptions options = new RequestOptions();
        options.PartitionKey = new PartitionKey(pKey);

        await outputDocument.DeleteDocumentAsync(UriFactory.CreateDocumentUri("kudos","kudos", id),options);
        response.StatusCode = HttpStatusCode.OK;
        log.Info($"Deleted kudo with id: {id}");
    }
    catch (DocumentClientException exc)
    {
        log.Info($"exception: {exc}");
        if (exc.StatusCode == HttpStatusCode.NotFound)
        {
            response = req.CreateResponse(HttpStatusCode.NotFound, "There is no item with given ID in our database!");
        }
        else
        {
            response = req.CreateResponse(HttpStatusCode.InternalServerError, "Internal server error. Contact administrator.");
        }
    }
    return response;
}
