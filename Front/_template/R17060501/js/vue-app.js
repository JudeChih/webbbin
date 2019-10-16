var ballMneu = new Vue({
    el: '#nav-ball',
    data: {
        balls: [
            {
                name: 'BB体育',
                link: 'sports.php'
            }, {
                name: 'NEW BB体育',
                link: '#'
            }, {
                name: '体育投注',
                link: '#'
            }
        ]
    }
})
var gameMneu = new Vue({
    el: '#nav-game',
    data: {
        games: [
            {
                name: 'BB电子',
                link: 'casino_login.php'
            }, {
                name: 'MG电子',
                link: '#'
            }, {
                name: 'GNS电子',
                link: '#'
            }, {
                name: 'ISB电子',
                link: '#'
            }, {
                name: 'PT电子',
                link: '#'
            }, {
                name: 'HB电子',
                link: '#'
            }
        ]
    }
})
var pageHeader = new Vue({
    el: '#page-header',
    data: {
        // Header Nav: Sports
        // balls: [
        //     {
        //         name: 'BB体育',
        //         link: 'sports.php'
        //     }, {
        //         name: 'NEW BB体育',
        //         link: 'sports.php'
        //     }, {
        //         name: '体育投注',
        //         link: 'sports.php'
        //     }
        // ],
        // Header Nav: Casino
        // games: [
        //     {
        //         name: 'BB电子',
        //         link: 'casino_login.php'
        //     }, {
        //         name: 'MG电子',
        //         link: 'casino_login.php'
        //     }, {
        //         name: 'GNS电子',
        //         link: 'casino_login.php'
        //     }, {
        //         name: 'ISB电子',
        //         link: 'casino_login.php'
        //     }, {
        //         name: 'PT电子',
        //         link: 'casino_login.php'
        //     }, {
        //         name: 'HB电子',
        //         link: 'casino_login.php'
        //     }
        // ],
        // 登入後餘額
        memAccount: 'admin',
        memTotal: '168.08',
        membalances: [
            {
                name: '体育投注余额',
                balance: '100.08'
            }, {
                name: 'AG视讯余额',
                balance: '---'
            }, {
                name: '歐博視訊餘額',
                balance: '68.00'
            }, {
                name: 'OG视讯餘額',
                balance: '---'
            }, {
                name: 'GD视讯餘額',
                balance: '---'
            }, {
                name: 'AG视讯余额',
                balance: '---'
            }, {
                name: 'PT电子餘額',
                balance: '---'
            }, {
                name: 'MG电子餘額',
                balance: '---'
            }, {
                name: 'GNS电子餘額',
                balance: '---'
            }, {
                name: 'ISB电子餘額',
                balance: '---'
            }
        ],
        // Footer
        // footerLinks: [
        //     {
        //         name: '关于BBIN',
        //         link: 'about.php'
        //     }, {
        //         name: '联络我们',
        //         link: '#0'
        //     }, {
        //         name: '合作伙伴',
        //         link: '#0'
        //     }, {
        //         name: '存/取款帮助',
        //         link: '#0'
        //     }, {
        //         name: '常见问题',
        //         link: '#0'
        //     }, {
        //         name: 'BBIN技术',
        //         link: '#0'
        //     }, {
        //         name: '寰宇浏览器',
        //         link: '#0'
        //     }, {
        //         name: '报修系统',
        //         link: '#0'
        //     }, {
        //         name: '协议与规则',
        //         link: '#0'
        //     }, {
        //         name: '下载区',
        //         link: '#0'
        //     }, {
        //         name: '诺顿分级 - 安全网站',
        //         link: '#0'
        //     }
        // ]
    }
})
var pageFooter = new Vue({
    el: '#page-footer',
    data: {
        footerLinks: [
            {
                name: '关于BBIN',
                link: 'about.php'
            }, {
                name: '联络我们',
                link: '#0'
            }, {
                name: '合作伙伴',
                link: '#0'
      //    }, {
      //        name: '存/取款帮助',
      //        link: '#0'
      //    }, {
      //        name: '常见问题',
      //        link: '#0'
      //    }, {
      //        name: 'BBIN技术',
      //        link: '#0'
      //    }, {
      //        name: '寰宇浏览器',
      //        link: '#0'
      //    }, {
      //        name: '报修系统',
      //        link: '#0'
      //    }, {
      //        name: '协议与规则',
      //        link: '#0'
      //    }, {
      //        name: '下载区',
      //        link: '#0'
      //    }, {
      //        name: '诺顿分级 - 安全网站',
      //        link: '#0'
            }
        ]
    }
})