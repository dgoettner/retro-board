export interface Configuration {
  LICENCE_KEY: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
  REDIS_ENABLED: boolean;
  REDIS_HOST: string;
  REDIS_PORT: number;
  BACKEND_PORT: number;
  SQL_LOG: boolean;
  BASE_URL: string;
  SENTRY_URL: string;
  TWITTER_KEY: string;
  TWITTER_SECRET: string;
  GOOGLE_KEY: string;
  GOOGLE_SECRET: string;
  GITHUB_KEY: string;
  GITHUB_SECRET: string;
  SLACK_KEY: string;
  SLACK_SECRET: string;
  MICROSOFT_KEY: string;
  MICROSOFT_SECRET: string;
  SENDGRID_API_KEY: string;
  SENDGRID_SENDER: string;
  SENDGRID_VERIFICATION_EMAIL_TID: string;
  SENDGRID_RESET_PASSWORD_TID: string;
  STRIPE_SECRET: string;
  STRIPE_WEBHOOK_SECRET: string;
  STRIPE_TEAM_PRODUCT: string;
  STRIPE_TEAM_PRICE: string;
  STRIPE_UNLIMITED_PRODUCT: string;
  STRIPE_UNLIMITED_PRICE: string;
}
