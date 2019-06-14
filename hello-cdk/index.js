const cdk = require('@aws-cdk/cdk');
const s3 = require('@aws-cdk/aws-s3');
const ec2 = require('@aws-cdk/aws-ec2');
const sns = require('@aws-cdk/aws-sns');

class MyStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

		const vpc = new ec2.VpcNetwork(this, 'GreetingVpc', { maxAZs: 2 });

		new s3.Bucket(this, 'MyFirstBucket', {
		    versioned: true,
		    encryption: s3.BucketEncryption.KmsManaged
		});

		new sns.Topic(this, 'MyTopic');

    }
}