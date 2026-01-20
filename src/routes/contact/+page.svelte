<script lang="ts">
	import { socialLinks, contactEmail, location } from '$lib/config/contact';
	import Email from '$lib/icons/email.svelte';
	import MapPin from '$lib/icons/map.pin.svelte';

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);

	let isFormValid = $derived(
		name.trim() !== '' && email.trim() !== '' && message.trim() !== ''
	);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate form submission delay
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Reset form and show success
		name = '';
		email = '';
		subject = '';
		message = '';
		isSubmitting = false;
		isSubmitted = true;

		// Hide success message after 5 seconds
		setTimeout(() => {
			isSubmitted = false;
		}, 5000);
	}
</script>

<svelte:head>
	<title>Contact | Perez Studio</title>
	<meta
		name="description"
		content="Get in touch with Kevin Perez. Have a question or want to work together? I'd love to hear from you."
	/>
</svelte:head>

<div>
	<!-- Header Section -->
	<header class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<h1 class="text-5xl font-extrabold text-slate-900">Get In Touch</h1>
			<p class="max-w-2xl text-lg text-slate-600">
				Have a question or want to work together? I'd love to hear from you. Fill out the form
				below or reach out through any of my social channels.
			</p>
		</div>
	</header>

	<!-- Banner Section -->
	<section class="flex w-full justify-center pb-10 lg:px-4">
		<div class="w-full max-w-312 overflow-hidden bg-slate-100 lg:rounded-xl">
			<img
				src="/contact-header.png"
				alt="Contact banner"
				class="w-full object-cover"
				loading="lazy"
				decoding="async"
			/>
		</div>
	</section>

	<!-- Contact Info & Form Section -->
	<section class="flex w-full flex-col items-center gap-8 px-4 pb-16">
		<div class="grid w-full max-w-[1248px] gap-12 md:grid-cols-2 md:px-6">
			<!-- Contact Info -->
			<div class="flex flex-col gap-8">
				<div class="flex flex-col gap-6">
					<h2 class="text-2xl font-bold text-slate-900">Contact Information</h2>

					<!-- Email -->
					<a
						href="mailto:{contactEmail}"
						class="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
					>
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
							<Email className="w-6 fill-cyan-500" />
						</div>
						<div>
							<p class="text-sm font-medium text-slate-500">Email</p>
							<p class="font-medium text-slate-900 transition-colors group-hover:text-cyan-600">
								{contactEmail}
							</p>
						</div>
					</a>

					<!-- Location -->
					<div class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
							<MapPin className="w-6 fill-slate-500" />
						</div>
						<div>
							<p class="text-sm font-medium text-slate-500">Location</p>
							<p class="font-medium text-slate-900">{location.full}</p>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-semibold text-slate-900">Follow Me</h3>
					<div class="flex flex-wrap gap-2">
						{#each socialLinks.filter((s) => s.label !== 'Email') as social (social.label)}
							{@const IconComponent = social.icon}
							<a
								href={social.href}
								aria-label={social.label}
								class="group flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 hover:bg-slate-100 hover:shadow-md"
							>
								<IconComponent className="w-6 fill-slate-500 transition-colors duration-300 group-hover:fill-cyan-500" />
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="flex flex-col gap-6">
				<h2 class="text-2xl font-bold text-slate-900">Send a Message</h2>

				{#if isSubmitted}
					<div class="rounded-xl border border-green-200 bg-green-50 p-6">
						<h3 class="font-semibold text-green-800">Message Sent!</h3>
						<p class="mt-1 text-green-700">
							Thank you for reaching out. I'll get back to you as soon as possible.
						</p>
					</div>
				{/if}

				<form onsubmit={handleSubmit} class="flex flex-col gap-4">
					<!-- Name -->
					<div class="flex flex-col gap-2">
						<label for="name" class="text-sm font-medium text-slate-700">
							Name <span class="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							bind:value={name}
							placeholder="Your name"
							class="rounded-lg border border-slate-200 px-4 py-3 text-base transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
						/>
					</div>

					<!-- Email -->
					<div class="flex flex-col gap-2">
						<label for="email" class="text-sm font-medium text-slate-700">
							Email <span class="text-red-500">*</span>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							bind:value={email}
							placeholder="your@email.com"
							class="rounded-lg border border-slate-200 px-4 py-3 text-base transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
						/>
					</div>

					<!-- Subject -->
					<div class="flex flex-col gap-2">
						<label for="subject" class="text-sm font-medium text-slate-700">Subject</label>
						<input
							type="text"
							id="subject"
							name="subject"
							bind:value={subject}
							placeholder="What's this about?"
							class="rounded-lg border border-slate-200 px-4 py-3 text-base transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
						/>
					</div>

					<!-- Message -->
					<div class="flex flex-col gap-2">
						<label for="message" class="text-sm font-medium text-slate-700">
							Message <span class="text-red-500">*</span>
						</label>
						<textarea
							id="message"
							name="message"
							required
							bind:value={message}
							placeholder="Your message..."
							rows="5"
							class="resize-none rounded-lg border border-slate-200 px-4 py-3 text-base transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
						></textarea>
					</div>

					<!-- Submit Button -->
					<button
						type="submit"
						disabled={!isFormValid || isSubmitting}
						class="mt-2 rounded-lg px-4 py-2 font-medium transition-all duration-200 {!isFormValid || isSubmitting
							? 'cursor-not-allowed bg-slate-100 text-slate-400'
							: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 hover:text-cyan-800'}"
					>
						{#if isSubmitting}
							Sending...
						{:else}
							Send Message
						{/if}
					</button>
				</form>
			</div>
		</div>
	</section>
</div>
