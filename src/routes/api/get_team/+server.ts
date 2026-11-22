import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { CDN_URL } from '$app/env/public';

export const GET: RequestHandler = async ({ url }) => {
    const team: {}[] = [
        {
			name: "Jai Janse",
			image: `${CDN_URL}/people/jai.jpg`,
			description: "Jai Janse is a massive gooner"
		},
		{
			name: "Drew Fitzgerald",
			image: `${CDN_URL}/people/drew.jpg`,
			description: "Drew Fitzgerald is awesome"
		},
		{
			name: "Santoso Winatan",
			image: `${CDN_URL}/people/santoso.jpg`,
			description: "Awesome Haven guy"
		},
		{
			name: "Lewie Dudding",
			image: `${CDN_URL}/people/lewie.jpg`,
			description: "Funky car enjoyer"
		},
		{
			name: "Brendan Laking",
			image: `${CDN_URL}/people/brendan.jpg`,
			description: "Awesome dude"
		}
    ];

    return json(team);
};