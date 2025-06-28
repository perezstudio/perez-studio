import { error } from '@sveltejs/kit';
import { getToolBySlug } from '$lib/data/tools.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const tool = getToolBySlug(params.slug);
  
  if (!tool) {
    throw error(404, 'Tool not found');
  }
  
  // In a real app, you'd fetch projects that use this tool from your CMS/database
  // For now, we'll use mock data
  const projects = [
    {
      slug: 'ecommerce-platform',
      title: 'E-Commerce Platform Redesign',
      description: 'A modern, responsive e-commerce platform built with SvelteKit and integrated payment processing',
      date: '2024-01-15',
      published: true,
      featured: true,
      client: 'TechCorp Solutions',
      status: 'completed' as const,
      tools: [
        { slug: 'sveltekit', name: 'SvelteKit', category: 'frontend' as const, featured: true },
        { slug: 'tailwindcss', name: 'Tailwind CSS', category: 'frontend' as const },
        { slug: 'postgresql', name: 'PostgreSQL', category: 'database' as const },
        { slug: 'prisma', name: 'Prisma', category: 'database' as const }
      ],
      images: [
        { src: '/images/ecommerce/homepage.jpg', alt: 'Homepage design' }
      ],
      links: [],
      tags: ['ecommerce', 'sveltekit', 'stripe', 'tailwind']
    }
    // Add more mock projects as needed
  ];
  
  // Filter projects that actually use this tool
  const toolProjects = projects.filter(project => 
    project.tools.some(t => t.slug === params.slug)
  );
  
  return {
    tool,
    projects: toolProjects,
    projectCount: toolProjects.length
  };
};
