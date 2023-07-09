import type { PageServerLoad, Actions } from './$types';
import { cityListMock } from './cityListMock';
import { OFFICIAL_PREFECTURE_API } from '$env/static/private';
import type { CityList, CityApiResponse } from '$lib/types';

export const load = (async () => {
	const cityList: CityList = cityListMock;
	if (OFFICIAL_PREFECTURE_API !== 'true') return { props: { cityList } };

	for (let num = 1; num <= 47; num++) {
		const numString = String(num);
		const code = numString.length === 1 ? '0' + numString : numString;

		const res = await fetch(`https://www.land.mlit.go.jp/webland/api/CitySearch?area=${code}`);
		const data: CityApiResponse = await res.json();

		if (data.status === 'OK') {
			const cities = data.data.map((d) => {
				return d.name;
			});
			cityList[code] = cities;
		}
	}
	return { props: { cityList } };
}) satisfies PageServerLoad;

export const actions = {
	search: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const user = await db.getUser(email);
		cookies.set('sessionid', await db.createSession(user));

		return { success: true };
	}
} satisfies Actions;
