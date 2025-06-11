import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { McpServerOnLambda } from '../src';

const entry = require.resolve('./fixtures/handler');

test('lambda and api created', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new McpServerOnLambda(stack, 'Mcp', { entry });

  const template = Template.fromStack(stack);
  const functions = template.findResources('AWS::Lambda::Function');
  expect(Object.keys(functions).length).toBeGreaterThan(0);
  template.resourceCountIs('AWS::ApiGateway::RestApi', 1);
});
