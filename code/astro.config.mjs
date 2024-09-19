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
					badge: { text: '🚧', variant: 'caution' },
					items: [
						{ slug: 'maven/instalar' },
					],
				},
				{
					label: 'Despliegues',
					badge: { text: '🚧', variant: 'caution' },
					items: [
						{ slug: 'despliegues/syncthing' },
						{ slug: 'despliegues/portainer' },
					],
				},
				{
					label: 'Marcadores',
					badge: { text: '🚧', variant: 'caution' },
					items: [
						{ slug: 'marcadores/devtools' },
						{ slug: 'marcadores/software' },
						{ slug: 'marcadores/blog' },
					],
				},
				{
					label: 'Compilaciones',
					badge: { text: '🚧', variant: 'caution' },
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Certificados',
					badge: { text: '🚧', variant: 'caution' },
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Snippeds',
					badge: { text: '🚧', variant: 'caution' },
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Windows',
					badge: { text: '🚧', variant: 'caution' },
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Guias',
					badge: { text: '🚧', variant: 'caution' },
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
