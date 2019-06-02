
module.exports = {
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORGANIZATION_SLUG: process.env.SENTRY_ORGANIZATION_SLUG,
    SENTRY_PROJECT_SLUG: process.env.SENTRY_PROJECT_SLUG,
    SENTRY_PROJECT_ID: process.env.SENTRY_PROJECT_ID,
  },
  target: 'serverless',
};