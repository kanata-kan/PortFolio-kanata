const fs = require('fs');
const path = require('path');

function generateSiteMap() {
  const baseUrl = 'https://www.kanatajs.com'; // ضع هنا رابط موقعك
  const pages = [
    '/', // الصفحة الرئيسية
    '/About', // صفحة About
    '/Projects', // صفحة Projects
    '/Contact', // صفحة Contact
    '/Register', // صفحة Register
    // يمكنك إضافة المزيد من الصفحات هنا بنفس الطريقة
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
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
