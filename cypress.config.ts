import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalRunAllSpecs: true,
    specPattern: "cypress/integration/*.feature",
    async setupNodeEvents(on, config) {
			await addCucumberPreprocessorPlugin(on, config);
			on(
				"file:preprocessor",
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				})
			);
			return config;
    },
    baseUrl: 'https://www.saucedemo.com/'
  },
  env: {

		TAGS: 'not @manual and not @skip'
	},
  retries: 0
});
