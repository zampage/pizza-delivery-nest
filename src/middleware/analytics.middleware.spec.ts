import { AnalyticsMiddleware } from './analytics.middleware';

describe('AnalyticsMiddleware', () => {
  it('should be defined', () => {
    expect(new AnalyticsMiddleware()).toBeDefined();
  });
});
