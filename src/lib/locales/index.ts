import { translateList } from './translations';

import commonEn from './en/common.json';
import homepageEn from './en/homepage.json';
import consentEn from './en/consent.json';

export default {
	en: translateList({
		common: commonEn,
		homepage: homepageEn,
		consent: consentEn
	})
};
