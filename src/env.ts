import { defineEnvVars } from '@sveltejs/kit/hooks';

export const variables = defineEnvVars({
    CDN_URL: { public: true }
});