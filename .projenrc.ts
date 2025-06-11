import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Codex',
  authorAddress: 'you@example.com',
  authorName: 'Your Name',
  cdkVersion: '2.137.0',
  defaultReleaseBranch: 'main',
  deps: ['@types/aws-lambda'],
  description: 'L3 CDK construct for deploying MCP server on Lambda behind API Gateway',
  jsiiVersion: '~5.8.0',
  name: 'mcp-server-on-lambda-cdk-construct',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/owner/mcp-server-on-lambda-cdk-construct.git',

  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
