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
			social: {
				github: 'https://github.com/withastro/starlight',
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
					label: 'Marcadores',
					items: [
						{ slug: 'marcadores/devtools' },
						{ slug: 'marcadores/software' },
						{ slug: 'marcadores/blog' },
					],
				},
				{
					label: 'SVN',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Compilaciones',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Despliegues',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Certificados',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Snippeds',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Guias',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
