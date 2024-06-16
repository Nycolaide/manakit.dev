import { translateList } from './translations';

import commonEn from './en/common.json';
import homepageEn from './en/homepage.json';

export default {
	en: translateList({
		common: commonEn,
		homepage: homepageEn
	})
};
