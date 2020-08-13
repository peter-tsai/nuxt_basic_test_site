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
			appId: process.env.ONESIGNAL_APP_ID || '0828e60c-c9b9-4ac0-a8c9-be89d67a9dd2',
			allowLocalhostAsSecureOrigin: true,
			welcomeNotification: {
				disable: true,
			},
		},
	}
}
