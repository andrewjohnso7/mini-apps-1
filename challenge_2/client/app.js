/*
Use Express to build a client-server app that generates CSV reports from JSON data.

Use Express to serve up an index.html file and its associated assets

The client app should be able to submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge).

Implement all the report generation logic on the server. Do not use any external libraries (such as via npm). You may use jQuery on the client.


The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.

You may also assume that child records in the JSON will always be in a property called `children`.

*/


/* Submitting
  When the user clicks submit, POST the form data to the server. The form submission process should use the default browser action/behavior. DO NOT use jQuery/AJAX functions in the submission process.



*/