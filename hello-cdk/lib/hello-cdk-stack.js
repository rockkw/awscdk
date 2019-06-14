const cdk = require('@aws-cdk/cdk');
const s3 = require('@aws-cdk/aws-s3');
const ec2 = require('@aws-cdk/aws-ec2');
const sns = require('@aws-cdk/aws-sns');

class HelloCdkStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new s3.Bucket(this, 'MyFirstBucket', {
        versioned: true,
        encryption: s3.BucketEncryption.KmsManaged
    });

    new sns.Topic(this, 'MyTopic');

    this.vpc = new ec2.Vpc(this, 'VPC');


  }
}

module.exports = { HelloCdkStack }
