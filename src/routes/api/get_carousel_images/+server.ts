import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { CDN_URL } from '$app/env/public';

export const GET: RequestHandler = async ({ url }) => {
	const query_dir = await fetch(`${CDN_URL}?ls`);
	const query_json = await query_dir.json();

	let images: string[] = [];

	for (let image of query_json.files) {
		if (image.ext !== 'jpg')
			continue;

		images.push(`${CDN_URL}/${image.href}`);
	}

	return json(images);
};