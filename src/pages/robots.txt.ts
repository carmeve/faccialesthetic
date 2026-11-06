import type { APIRoute } from 'astro';
export const GET:APIRoute=({site})=>{const enabled=import.meta.env.PUBLIC_INDEXABLE==='true';return new Response(enabled?`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml',site)}\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain'}});};
