module.exports = {
    title: 'LIFANKEKE',
    description: 'just do it',
    head: [
        ['link', { rel: 'shortcut icon', href: 'https://static.yximgs.com/udata/pkg/ks-ad-fe/docs.66937e54.min.png' }],
    ],
    themeConfig: {
        lastUpdated: '最近更新',
        editLinks: true,
        nav: [
            {
                text: '技术学习',
                link: '/guide/start',
            },
            {
                text: '采坑记录',
                link: '/guide/indexes',
            },
        ],
        sidebar: [
            {
                title: '函数式编程入门',
                collapsable: true,
                children: [
                    '/functionalProgramming/compose',
                ]
            },
        ],
        // repo: 'https://git.corp.kuaishou.com/ks-frontend/fe-docs',
        // repoLabel: '查看源码',
        docsDir: 'docs',
        editLinks: true,
    },
}