import { App, Stack } from 'aws-cdk-lib';
// Public package
import { McpServerOnLambda } from 'mcp-server-on-lambda-cdk-construct';
// For a private repo in the same org, use:
// import { McpServerOnLambda } from '@org/mcp-server-on-lambda-cdk-construct';

const app = new App();
const stack = new Stack(app, 'ExampleStack');

new McpServerOnLambda(stack, 'Mcp', {
  entry: require.resolve('./handler'),
  environment: {
    NODE_ENV: 'production',
  },
});

app.synth();
