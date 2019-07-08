const base = require('../../.fusumarc');
const slug = __dirname.split('/').slice(-1)[0];

module.exports = {
  meta: {
    ...base.meta,
    url: `${base.meta.url}/${slug}`,
    title: 'Vue.js 190704'
  },
  slide: {
    ...base.slide,
    chart: true
  },
  extends: {
    css: 'style.css'
  }
};
