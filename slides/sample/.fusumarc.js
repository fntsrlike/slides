const base = require('../../.fusumarc');
const slug = __dirname.split('/').slice(-1)[0];

module.exports = {
  meta: {
    ...base.meta,
    url: `${base.meta.url}/${slug}`,
    title: 'Sample SlideShow'
  },
  slide: {
    ...base.slide,
    chart: true
  },
  extends: {
    css: 'style.css'
  }
};
