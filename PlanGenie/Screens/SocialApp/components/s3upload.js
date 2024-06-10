// awsConfig.js
import AWS from 'aws-sdk';

const region= 'eu-north-1';
const accessKeyId = 'AKIA47CRZLCVI4RSOBXV';
const secretAccessKey = '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';
const bucketname="plangeniebucket"

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion:'v4'
});

export async function generateUploadURL(){
  const imageName = "name8"

  const params = ({
    Bucket: bucketname,
    Key: imageName,
    Expires: 60
  })

  const uploadURL = await s3.getSignedUrlPromise('putObject',params);
  return uploadURL
}