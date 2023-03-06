// import { version } from '../../package.json'
import zh_CN from './locales/zh-CN'

export default {
  title: 'fancy-holder',
  description: 'A fancy placeholder plugin',
  base: '/fancy-holder/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/fancy-holder/favicons/favicon-64x64.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/fancy-holder/favicons/apple-touch-icon.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/what-is-this', activeMatch: '/guide/' },
      { text: 'Configs', link: '/config/', activeMatch: '/config/' },
      {
        // text: version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/zhensherlock/fancy-holder/blob/main/CHANGELOG.md'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhensherlock/fancy-holder' },
    ],
    sidebar: {
      '/guide': [
        {
          text: 'Guide',
          // collapsible: true,
          items: [
            { text: 'Introduce', link: '/guide/what-is-this' },
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ]
    },
    algolia: {
      appId: 'V6CF28P0PS',
      apiKey: '692752b7b3c6f794997d8ae22aed79fa',
      indexName: 'dev_docs'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Michael Sun'
    },
    locales: {
      '/zh/': zh_CN
    },
    localeLinks: {
      // text: 'English',
      items: [
        { text: 'English', link: '/' },
        { text: '简体中文', link: '/zh/' },
      ]
    },
  },
  markdown: {
    // lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'fancy-holder',
      description: 'A fancy placeholder plugin',
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '一个华丽的占位符插件',
      outlineTitle: '本页目录',
      lastUpdatedText: '上次更新',
    }
  }
}
