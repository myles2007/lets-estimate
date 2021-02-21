import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as LetsEstimate from '../lib/lets-estimate-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new LetsEstimate.LetsEstimateStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
