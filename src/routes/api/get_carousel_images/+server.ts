import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	let images = [{
		src: 'images/people/jai.jpg',
		alt: 'Just Jai'
	}]

	return json({images: images});
};