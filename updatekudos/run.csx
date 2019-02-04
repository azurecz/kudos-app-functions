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
    HttpResponseMessage response = new HttpResponseMessage();

       string pKey = req.GetQueryNameValuePairs()
            .FirstOrDefault(q => string.Compare(q.Key, "pKey", true) == 0)
            .Value;

    dynamic data = await req.Content.ReadAsAsync<object>();

    try {
        RequestOptions options = new RequestOptions();
        options.PartitionKey = new PartitionKey(pKey);
        await outputDocument.UpsertDocumentAsync(UriFactory.CreateDocumentCollectionUri("kudos","kudos"),
            data,options);
        response.StatusCode = HttpStatusCode.OK;
        log.Info($"Updated kudo with id: {id}");
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
