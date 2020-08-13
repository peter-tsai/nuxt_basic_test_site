require('dotenv').config();

export default {
	
	components: true,

	buildModules: [
		'@nuxtjs/dotenv',
	],

	modules: [
		'@nuxtjs/onesignal',
		'@nuxtjs/pwa',
		'vue-web-cam/nuxt',
	],

	plugins: [
		{ src: '~plugins/buefy.js' },
		{ src: '~plugins/utility.js' },
	],

	oneSignal: {
		init: {
			appId: process.env.ONESIGNAL_APP_ID,
			allowLocalhostAsSecureOrigin: true,
			welcomeNotification: {
				disable: true,
			},
		},
	}
}
