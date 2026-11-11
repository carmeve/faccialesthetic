import courses from '../data/courses.json';
import services from '../data/services.json';
import type { APIRoute } from 'astro';
export const GET:APIRoute=({site})=>{const paths=['/','/servicios/','/cursos/','/nosotros/','/contacto/','/tienda/',...services.map(s=>`/servicios/${s.slug}/`),...courses.map(course=>`/cursos/${course.slug}/`)];const entries=import.meta.env.PUBLIC_INDEXABLE==='true'?paths.map(p=>`<url><loc>${new URL(p,site)}</loc></url>`).join(''):'';return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,{headers:{'Content-Type':'application/xml'}});};
