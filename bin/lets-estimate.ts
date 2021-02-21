#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LetsEstimateStack } from '../lets-estimate/stack/lets-estimate-stack';

const app = new cdk.App();
new LetsEstimateStack(app, 'LetsEstimateStack');
