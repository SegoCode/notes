// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://segocode.github.io',
  	base: 'notes',
    image: {
        service: passthroughImageService(),
    },
	integrations: [
		starlight({
			title: 'Mis notas',
			customCss: ['./src/style/index.css'],
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/SegoCode/notes' },
            ],
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
						{ slug: 'maven/errores' },
						{ slug: 'maven/wrapper' },
					],
				},
				{
					label: 'Java',
					items: [
						{ slug: 'java/ssl' },
						{ slug: 'java/ifelse' },
						{ slug: 'java/sdkman' },
						{ slug: 'java/docker' },
						{ slug: 'java/dockersize' },
						{ slug: 'java/jboss' },
					],
				},

				{
					label: 'Despliegues',
					items: [
						{ slug: 'despliegues/syncthing' },
						{ slug: 'despliegues/portainer' },
						{ slug: 'despliegues/puppeter' },
						{ slug: 'despliegues/jetbrains' },
					],
				},
			],
		}),
	],
});
