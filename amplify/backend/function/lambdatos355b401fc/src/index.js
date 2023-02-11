/* Amplify Params - DO NOT EDIT
	AUTH_LAMBDATOS3FFE2FF05_USERPOOLID
	ENV
	REGION
	STORAGE_S33C3F5F05_BUCKETNAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event) => {
    s3.getObject(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
        /*
        data = {
         AcceptRanges: "bytes", 
         ContentLength: 3191, 
         ContentType: "image/jpeg", 
         ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
         LastModified: <Date Representation>, 
         Metadata: {
         }, 
         TagCount: 2, 
         VersionId: "null"
        }
        */
    });
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};


var params = {
    Bucket: "lambdatos3b7d8b7312f8741f7859b45bd7e6cb760145442-dev",
    Key: "HappyFace.png"
};
