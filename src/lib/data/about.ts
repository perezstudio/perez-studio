export interface Job {
	role: string;
	startDate: string;
	endDate: string;
	location: string;
	description?: string;
}

export interface Company {
	name: string;
	logo?: string;
	jobs: Job[];
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

// Helper function to parse date string to Date object
function parseDate(dateStr: string): Date {
	if (dateStr === 'Present') {
		return new Date();
	}
	// Handle formats like "Jan 2023" or "2023"
	const parts = dateStr.split(' ');
	if (parts.length === 2) {
		const monthMap: Record<string, number> = {
			Jan: 0,
			Feb: 1,
			Mar: 2,
			Apr: 3,
			May: 4,
			Jun: 5,
			Jul: 6,
			Aug: 7,
			Sep: 8,
			Oct: 9,
			Nov: 10,
			Dec: 11
		};
		return new Date(parseInt(parts[1]), monthMap[parts[0]] || 0);
	}
	return new Date(parseInt(dateStr), 0);
}

// Calculate duration between two dates and return formatted string
export function calculateDuration(startDate: string, endDate: string): string {
	const start = parseDate(startDate);
	const end = parseDate(endDate);

	let months = (end.getFullYear() - start.getFullYear()) * 12;
	months += end.getMonth() - start.getMonth();

	// Add 1 to include the starting month
	months = Math.max(1, months + 1);

	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	if (years === 0) {
		return `${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
	} else if (remainingMonths === 0) {
		return `${years} yr${years !== 1 ? 's' : ''}`;
	} else {
		return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
	}
}

// Calculate total duration for a company from all its jobs
export function calculateCompanyDuration(jobs: Job[]): string {
	if (jobs.length === 0) return '';

	// Find earliest start and latest end
	let earliestStart = parseDate(jobs[0].startDate);
	let latestEnd = parseDate(jobs[0].endDate);

	for (const job of jobs) {
		const start = parseDate(job.startDate);
		const end = parseDate(job.endDate);

		if (start < earliestStart) earliestStart = start;
		if (end > latestEnd) latestEnd = end;
	}

	// Format back to string for calculation
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const startStr = `${monthNames[earliestStart.getMonth()]} ${earliestStart.getFullYear()}`;

	let endStr: string;
	const now = new Date();
	if (latestEnd.getFullYear() === now.getFullYear() && latestEnd.getMonth() === now.getMonth()) {
		endStr = 'Present';
	} else {
		endStr = `${monthNames[latestEnd.getMonth()]} ${latestEnd.getFullYear()}`;
	}

	return calculateDuration(startStr, endStr);
}

export const companies: Company[] = [
	{
		name: 'Movement Labs',
		logo: '/images/companies/movementlabs-icon.png',
		jobs: [
			{
				role: 'UI/UX Engineer',
				startDate: 'Mar 2023',
				endDate: 'Present',
				location: 'Milwaukee, WI',
				description:
					'I led the design and development of mission-critical web applications supporting political campaigns and grassroots organizations nationwide. My work focused on building reliable, user-centered systems for voter outreach, fundraising, and volunteer engagement—often under tight election timelines. I partnered closely with programs, communications, and development teams to translate real-world organizing needs into scalable, well-documented software that held up under pressure.'
			},
			{
				role: 'Operations Associate',
				startDate: 'Nov 2021',
				endDate: 'Mar 2023',
				location: 'American Fork, UT',
				description:
					'I supported internal operations and program teams by improving workflows, tooling, and data processes across the organization. Working at the intersection of people and systems, I helped identify operational gaps and implemented practical solutions that reduced friction for staff and organizers. This role grounded my approach to technology in empathy, clarity, and real organizational needs.'
			}
		]
	},
	{
		name: 'Reparadise',
		logo: '/images/companies/reparadise-icon.png',
		jobs: [
			{
				role: 'Office Manager',
				startDate: 'Jan 2021',
				endDate: 'Nov 2021',
				location: 'Salt Lake City, UT',
				description:
					'I managed day-to-day operations for a fast-paced service business, overseeing scheduling, internal systems, and process improvements. I introduced workflow automation and operational tooling that reduced redundancy, improved turnaround time, and allowed the team to focus more on customer service and growth. This experience shaped my systems-thinking approach to both people and processes.'
			}
		]
	},
	{
		name: 'Inclan Communications',
		logo: '/images/companies/inclaninteractive-icon.png',
		jobs: [
			{
				role: 'Project Manager',
				startDate: 'Oct 2015',
				endDate: 'Jul 2020',
				location: 'Provo, UT',
				description:
					'I led cross-functional teams delivering web, mobile, and design projects for agency clients. I coordinated requirements, timelines, and stakeholder communication while establishing repeatable processes for reviews, documentation, and delivery. Alongside project management, I contributed to UX and interface design, helping ship products that were both visually polished and easy to use.'
			}
		]
	},
	{
		name: 'Avval Software',
		logo: '/images/companies/avvalsoftware-icon.png',
		jobs: [
			{
				role: 'Founder',
				startDate: 'Nov 2013',
				endDate: 'Jul 2015',
				location: 'Salt Lake City, UT',
				description:
					'I founded and led an early-stage ed-tech startup, designing and building a learning management system for public schools from the ground up. I owned product strategy, UX design, and early development while collaborating with educators to ensure the platform met real classroom needs. This experience taught me how to take products from concept to launch—and how to balance vision, constraints, and user trust.'
			}
		]
	}
];

export const education: Education[] = [
	{
		institution: 'Utah Valley University',
		degree: 'Associate of Science',
		field: 'Graphic Design',
		year: '2011'
	},
	{
		institution: 'Utah Valley University',
		degree: 'Bachelor of Science',
		field: 'Computer Science',
		year: '2013'
	}
];

export const certifications: Certification[] = [
	{
		name: 'Data Analytics',
		issuer: 'Snow College',
		year: '2020'
	},
	{
		name: 'Google UX Design Certificate',
		issuer: 'Google',
		year: '2026'
	},
	{
		name: 'Certified Associate of Project Management',
		issuer: 'Project Management Institute',
		year: '2026'
	}
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
	}
];
