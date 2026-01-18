export interface Experience {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	description: string;
	logo?: string;
}

export interface Education {
	institution: string;
	degree: string;
	field?: string;
	year: string;
	logo?: string;
}

export interface Certification {
	name: string;
	issuer: string;
	year: string;
	logo?: string;
}

export interface Award {
	name: string;
	organization: string;
	year: string;
	description?: string;
}

export const experiences: Experience[] = [
	{
		company: 'Civics Lab',
		role: 'Founder & Lead Developer',
		startDate: '2023',
		endDate: 'Present',
		description: 'Building a suite of tools and resources designed for political campaigns and political parties. Leading product development, UI/UX design, and full-stack engineering.',
		logo: '/images/companies/civics-lab.png'
	},
	{
		company: 'Freelance',
		role: 'Senior Frontend Developer',
		startDate: '2020',
		endDate: '2023',
		description: 'Worked with various clients to build modern web applications using React, Svelte, and Next.js. Specialized in responsive design and performance optimization.',
	},
	{
		company: 'Tech Startup',
		role: 'Frontend Developer',
		startDate: '2018',
		endDate: '2020',
		description: 'Developed and maintained customer-facing web applications. Collaborated with design and backend teams to deliver seamless user experiences.',
	},
	{
		company: 'Digital Agency',
		role: 'Junior Developer',
		startDate: '2016',
		endDate: '2018',
		description: 'Started career building websites and web applications for small businesses. Learned fundamentals of web development and client communication.',
	}
];

export const education: Education[] = [
	{
		institution: 'University of Utah',
		degree: 'Bachelor of Science',
		field: 'Computer Science',
		year: '2016',
	},
];

export const certifications: Certification[] = [
	{
		name: 'AWS Certified Developer',
		issuer: 'Amazon Web Services',
		year: '2022',
	},
	{
		name: 'Google UX Design Certificate',
		issuer: 'Google',
		year: '2021',
	},
];

export const awards: Award[] = [
	{
		name: 'Best Web Application',
		organization: 'Utah Tech Awards',
		year: '2023',
		description: 'Recognized for exceptional user experience and technical innovation.'
	},
	{
		name: 'Rising Developer Award',
		organization: 'Dev Community',
		year: '2021',
		description: 'Awarded for contributions to open source projects and community mentorship.'
	},
];
