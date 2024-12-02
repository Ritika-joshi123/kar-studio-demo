import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export class S3FilesService {
  private static _bucketName = process.env.REACT_APP_AWS_S3CLIENT_BUCKET;
  private static _endPoint = process.env.REACT_APP_AWS_S3CLIENT_API_URL;
  private static _region = process.env.REACT_APP_AWS_REGION;
  private static _accesskey = process.env.REACT_APP_AWS_S3CLIENT_ACCESS_KEY;
  private static _secretAccesskey =
    process.env.REACT_APP_AWS_S3CLIENT_SECRET_KEY;

  private static _client: S3Client = new S3Client({
    endpoint: this._endPoint!,
    region: this._region!,
    credentials: {
      accessKeyId: this._accesskey!,
      secretAccessKey: this._secretAccesskey!,
    },
  });

  public static async upload(file: File) {
    try {
      await this._client.send(
        new PutObjectCommand({
          Body: file,
          ACL: 'public-read',
          Bucket: this._bucketName,
          Key: `static/${file.name}`,
        })
      );
      const uploadedUrl = `${this._endPoint}/assets.karstudio/static/${file.name}`;
      return uploadedUrl;
    } catch (err) {
      console.error('Error uploading file to S3', err);
      return null;
    }
  }
}
