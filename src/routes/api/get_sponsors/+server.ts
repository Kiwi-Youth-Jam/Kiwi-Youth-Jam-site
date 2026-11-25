import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { CDN_URL } from '$app/env/public';

export const GET: RequestHandler = async ({ url }) => {
    const sponsors: {}[] = [
        {name: 'Jay\'s awesome art', image: `${CDN_URL}/people/jai.jpg`}
    ];

    return json(sponsors);
};