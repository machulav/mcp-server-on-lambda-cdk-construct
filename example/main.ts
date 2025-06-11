import { App, Stack } from 'aws-cdk-lib';
// Public package
import { McpServerOnLambda } from 'mcp-server-on-lambda-cdk-construct';
// After installing via `npm install github:owner/mcp-server-on-lambda-cdk-construct`
// or `npm install git+ssh://git@github.com/ORG/mcp-server-on-lambda-cdk-construct.git`

const app = new App();
const stack = new Stack(app, 'ExampleStack');

new McpServerOnLambda(stack, 'Mcp', {
  entry: require.resolve('./handler'),
  environment: {
    NODE_ENV: 'production',
  },
});

app.synth();
