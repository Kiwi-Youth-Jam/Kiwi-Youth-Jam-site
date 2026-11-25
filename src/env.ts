import { defineEnvVars } from '@sveltejs/kit/hooks';

export const variables = defineEnvVars({
    CDN_URL: { public: true },
    ESP_DOCUMENT_ID: {},
    GOOGLE_REFRESH_TOKEN: {},
    GOOGLE_CLIENT_ID: {},
    GOOGLE_CLIENT_SECRET: {}
});