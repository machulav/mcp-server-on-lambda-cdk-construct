import { App, Stack } from 'aws-cdk-lib';
import { McpServerOnLambda } from '../src';

const app = new App();
const stack = new Stack(app, 'ExampleStack');

new McpServerOnLambda(stack, 'Mcp', {
  entry: require.resolve('./handler'),
  environment: {
    NODE_ENV: 'production',
  },
});

app.synth();
