import {build} from 'esbuild';
import {mkdir,cp,writeFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
await build({entryPoints:['src/main.jsx'],bundle:true,minify:true,outdir:'dist/app',entryNames:'portfolio',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
const html=title=>`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="Tarik Johnston — interaction and UX design across government, healthcare and digital services."><link rel="stylesheet" href="/app/portfolio.css"></head><body><div id="root"></div><script type="module" src="/app/portfolio.js"></script></body></html>`;
await writeFile('dist/index.html',html('Tarik Johnston — Interaction & UX designer'));
await mkdir('dist/project/btms',{recursive:true});
await writeFile('dist/project/btms/index.html',html('Border Trade Matching Service — Tarik Johnston'));

for(const [slug,title] of [['ipaffs','IPAFFS'],['s1-entitlement','S1 Entitlement'],['generation-study','Generation study']]){await mkdir('dist/project/'+slug,{recursive:true});await writeFile('dist/project/'+slug+'/index.html',html(title+' — Tarik Johnston'));}

const extra=JSON.parse(await (await import('node:fs/promises')).readFile('src/additional-cases.json','utf8'));
for(const [slug,project] of Object.entries(extra)){await mkdir('dist/project/'+slug,{recursive:true});await writeFile('dist/project/'+slug+'/index.html',html(project.title+' — Tarik Johnston'));}
