import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const sponsors: {}[] = [
        
    ];

    return json(sponsors);
};