import Email from '$lib/icons/email.svelte';
import Twitter from '$lib/icons/twitter.svelte';
import Instagram from '$lib/icons/instagram.svelte';
import Dribbble from '$lib/icons/dribbble.svelte';
import Behance from '$lib/icons/behance.svelte';
import GitHub from '$lib/icons/github.svelte';
import LinkedIn from '$lib/icons/linkedin.svelte';
import type { Component } from 'svelte';

export interface SocialLink {
	href: string;
	label: string;
	icon: Component<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
	{ href: '/contact', label: 'Email', icon: Email },
	{ href: 'https://x.com/perezstudioio', label: 'X (Twitter)', icon: Twitter },
	{ href: 'https://www.instagram.com/perezstudioio/', label: 'Instagram', icon: Instagram },
	{ href: 'https://dribbble.com/perezstudioio', label: 'Dribbble', icon: Dribbble },
	{ href: 'https://www.behance.net/perezstudio', label: 'Behance', icon: Behance },
	{ href: 'https://github.com/perezstudio', label: 'GitHub', icon: GitHub },
	{ href: 'https://www.linkedin.com/in/kevinperezut/', label: 'LinkedIn', icon: LinkedIn }
];

export const contactEmail = 'hello@perez.studio';

export const location = {
	city: 'Milwaukee',
	state: 'WI',
	full: 'Milwaukee, WI'
};
