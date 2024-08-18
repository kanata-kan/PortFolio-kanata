/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kanatajs.com', // رابط موقعك
  generateRobotsTxt: true, // توليد ملف robots.txt تلقائيًا
  exclude: ['/api/*'], // استثناء مسارات API ولوحة التحكم من السايت ماب
  additionalPaths: async config => [
    await config.transform(config, '/'), // الصفحة الرئيسية
    await config.transform(config, '/Contact'), // صفحة الاتصال
    await config.transform(config, '/About'), // صفحة الوجهات
    await config.transform(config, '/Projects'), // صفحة الحجز
  ],
};
