// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://segocode.github.io',
  	base: 'notes',
	integrations: [
		starlight({
			title: 'Mis notas',
			customCss: ['./src/style/index.css'],
			social: {
				github: 'https://github.com/SegoCode/notes',
			},
			sidebar: [
				{
					label: 'Git',
					items: [
						{ slug: 'git/instalar' },
						{ slug: 'git/firmar' },
						{ slug: 'git/githooks' },
						{ slug: 'git/conventional' },
						{ slug: 'git/herramientas' },
					],
				},
				{
					label: 'Subversion',
					items: [
						{ slug: 'svn/instalar' },
					],
				},
				{
					label: 'Maven',
					items: [
						{ slug: 'maven/instalar' },
						{ slug: 'maven/compile' },
					],
				},
				{
					label: 'Java',
					badge: { text: '🚧', variant: 'caution' },
					items: [
						{ slug: 'java/sdkman' },
						{ slug: 'java/docker' },
						{ slug: 'java/versiones' },
						{ slug: 'java/ssl' },
						{ slug: 'java/jboss' },
						{ slug: 'java/ifelse' },
						{ slug: 'java/microservices' },
					],
				},

				{
					label: 'Despliegues',
					badge: { text: '🚧', variant: 'caution' },
					items: [
						{ slug: 'despliegues/syncthing' },
						{ slug: 'despliegues/portainer' },
						{ slug: 'despliegues/systemmd' },
						{ slug: 'despliegues/puppeter' },
						{ slug: 'despliegues/raspberry' },
					],
				},
				{
					label: 'Marcadores',
					badge: { text: '🚧', variant: 'caution' },
					items: [
						{ slug: 'marcadores/devtools' },
						{ slug: 'marcadores/formacion' },
						{ slug: 'marcadores/visualizacion' },
						{ slug: 'marcadores/mocking' },
						{ slug: 'marcadores/referencias' },

					],
				},
			],
		}),
	],
});
