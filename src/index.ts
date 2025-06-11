import { aws_apigateway as apigw, aws_lambda as lambda, aws_logs as logs, RemovalPolicy } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export interface McpServerOnLambdaProps {
  readonly entry: string;
  readonly environment?: { [key: string]: string };
}

export class McpServerOnLambda extends Construct {
  public readonly function: NodejsFunction;
  public readonly api: apigw.RestApi;

  constructor(scope: Construct, id: string, props: McpServerOnLambdaProps) {
    super(scope, id);

    this.function = new NodejsFunction(this, 'Handler', {
      runtime: lambda.Runtime.NODEJS_20_X,
      entry: props.entry,
      handler: 'handler',
      environment: props.environment,
      logRetention: logs.RetentionDays.ONE_WEEK,
    });

    // Create explicit log group to control removal and retention
    new logs.LogGroup(this, 'LogGroup', {
      logGroupName: `/aws/lambda/${this.function.functionName}`,
      retention: logs.RetentionDays.ONE_WEEK,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    this.api = new apigw.RestApi(this, 'Api', {
      defaultCorsPreflightOptions: {
        allowHeaders: apigw.Cors.DEFAULT_HEADERS,
        allowOrigins: apigw.Cors.ALL_ORIGINS,
        allowMethods: apigw.Cors.ALL_METHODS,
      },
    });

    const integration = new apigw.LambdaIntegration(this.function);

    this.api.root.addMethod('ANY', integration);
    this.api.root.addResource('{proxy+}').addMethod('ANY', integration);
  }
}
