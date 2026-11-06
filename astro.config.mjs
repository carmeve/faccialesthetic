import { defineConfig } from 'astro/config';
export default defineConfig({ site: process.env.PUBLIC_SITE_URL || 'https://faccialesthetic-propuesta-charlie.archedsandpiper.chatgpt.site', output: 'static', vite: {server: {allowedHosts:['terminal.local']}} });
