module.exports = {
  meta: {
    url: 'https://slides.fntsr.tw',
    title: "Ruoshi's slides",
    sns: ['twitter']
  },
  slide: {
    loop: false,
    sidebar: true,
    targetBlank: true,
    showIndex: true,
    isVertical: false,
    // https://github.com/mAAdhaTTah/babel-plugin-prismjs#configuring-the-plugin
    code: {
      languages: ['javascript'],
      plugins: [],
      theme: 'default'
    },
    chart: false,
    math: false
  }
};
