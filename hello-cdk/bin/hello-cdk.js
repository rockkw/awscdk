#!/usr/bin/env node

// @ts-ignore: Cannot find declaration file
require('source-map-support/register');
const cdk = require('@aws-cdk/cdk');
const { HelloCdkStack } = require('../lib/hello-cdk-stack');

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack');
app.run();
