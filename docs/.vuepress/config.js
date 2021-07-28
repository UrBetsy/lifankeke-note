module.exports = {
    title: 'LIFANKEKE',
    description: 'just do it',
    head: [
        ['link', { rel: 'shortcut icon', href: 'https://static.yximgs.com/udata/pkg/ks-ad-fe/docs.66937e54.min.png' }],
    ],
    base: "/lifankeke-note/",
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
        docsDir: 'docs',
        editLinks: true,
    },
}