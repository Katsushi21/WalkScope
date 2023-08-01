import type { PageServerLoad, Actions } from './$types';
import { fetchCities } from '$lib/server/fetchCities';

export const load = (async ({ fetch }) => {
	return fetchCities(fetch);
}) satisfies PageServerLoad;

// export const actions = {
// 	search: async ({ cookies, request }) => {
// 		const data = await request.formData();
// 		const email = data.get('email');
// 		const password = data.get('password');

// 		const user = await db.getUser(email);
// 		cookies.set('sessionid', await db.createSession(user));

// 		return { success: true };
// 	}
// } satisfies Actions;
