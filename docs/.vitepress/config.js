import mdItCustomAttrs from 'markdown-it-custom-attrs';

module.exports = {
  title: 'OT 帮助文档',
  description: 'OT 帮助文档...',
  outDir: '../dist/help-center',
  base: '/help-center/',
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery'
      });
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js' }],
    ['link', { href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3", rel: "stylesheet" }],
    ['script', { src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3" }]
  ],
  themeConfig: {
    algolia: {
      appId: 'UC3OGKEDNW',
      apiKey: '8ed8c4a3c38c5b2e1a4eb12ed89630bc',
      indexName: 'help-center',
      container: '.VPNavBarSearch',
    },
    sidebar: [
      {
        text: 'OT平台简介',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '平台概述', link: '/index.md' },
          { text: '设备接入', link: '/foo/index.md' },
          { text: '视频介绍', link: '/foo/video.md' }
        ]
      },
      {
        text: '设计器',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: '资源管理',
            link: '/dev/designer',
            items: [
              { text: '数据库', link: 'dev/child/db' },
              { text: 'SQL', link: 'dev/child/sql.md' },
              { text: '事务流', link: 'dev/child/affair.md' }
            ]
          },
          { text: '系统设置', link: 'dev/config.md' }
        ]
      }
    ],
    docFooter: {
      prev: '上一项',
      next: '下一项'
    },
    outlineTitle: '当前页面'
  }
};
