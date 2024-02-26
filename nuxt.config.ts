// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-primevue'],
	tailwindcss: {
		// add the cssPath
		cssPath: '~/assets/css/layered.tailwind.css'
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	primevue: {
		usePrimeVue: true,
		cssLayerOrder: 'tailwind-base,  primevue, tailwind-utilities', // set the order of layer
		components: {
			include: ['*']
		}
	},
	css: ['primevue/resources/themes/lara-light-blue/theme.css']
});
