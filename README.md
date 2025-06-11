# mcp-server-on-lambda-cdk-construct

[![NPM version](https://badge.fury.io/js/mcp-server-on-lambda-cdk-construct.svg)](https://badge.fury.io/js/mcp-server-on-lambda-cdk-construct)

Level-3 CDK construct that deploys an MCP server as an AWS Lambda function
fronted by an API Gateway REST API.

## Installation

```bash
npm install mcp-server-on-lambda-cdk-construct
```

## Usage

```ts
import { App, Stack } from 'aws-cdk-lib';
import { McpServerOnLambda } from 'mcp-server-on-lambda-cdk-construct';

const app = new App();
const stack = new Stack(app, 'McpStack');

new McpServerOnLambda(stack, 'Mcp', {
  entry: require.resolve('../path/to/handler'),
  environment: {
    NODE_ENV: 'production',
  },
});
```

## Environment variables

Pass key/value pairs via the `environment` prop. These values are made available
at runtime inside the Lambda function.

## Deployment action

Use the reusable GitHub Action from this repository to deploy your CDK app:

```yaml
jobs:
  deploy:
    uses: owner/mcp-server-on-lambda-cdk-construct/.github/workflows/deploy.yml@v1
    with:
      aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
      aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      aws-region: us-east-1
```

See the [`example/`](./example) directory for a minimal app.
