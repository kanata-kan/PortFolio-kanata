const fs = require('fs');
const path = require('path');

function generateSiteMap() {
  const baseUrl = 'https://www.kanatajs.com';
  const pages = ['/', '/About', '/Projects', '/Contact', '/Register'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '/' ? '1.00' : '0.80'}</priority>
  </url>`,
    )
    .join('')}
</urlset>`;

  fs.writeFileSync(
    path.join(__dirname, 'public', 'sitemap.xml'),
    sitemap,
    'utf8',
  );
}

generateSiteMap();
