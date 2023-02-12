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
    var params = {
        Bucket: "lambdatos3b7d8b7312f8741f7859b45bd7e6cb760145442-dev",
        Key: "HappyFace.png"
    };

    const data = await s3.getObject(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };
    return response;
};



