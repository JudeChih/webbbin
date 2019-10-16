var mainBody = new Vue({
    el: '#page-header',
    data: {
        // Header Nav: Sports
        balls: [{
            name: 'BB体育',
            link: 'sports_login.php'
        }, {
            name: 'NEW BB体育',
            link: '#'
        }, {
            name: '体育投注',
            link: '#'
        }],
        lives: [{
            name: 'BB视讯',
            link: 'live.php'
        }, {
            name: 'AG视讯',
            link: '#'
        }, {
            name: '欧博视讯',
            link: '#'
        }, {
            name: 'OG视讯',
            link: '#'
        }, {
            name: 'GD视讯',
            link: '#'
        }, {
            name: 'BG视讯',
            link: '#'
        }],
        games: [{
            name: 'BB电子',
            link: 'casino_login.php'
        }, {
            name: 'HB电子',
            link: '#'
        }, {
            name: 'PT电子',
            link: '#'
        }, {
            name: 'MG电子',
            link: '#'
        }, {
            name: 'GNS电子',
            link: '#'
        }, {
            name: 'ISB电子',
            link: '#'
        }],
        // 登入後餘額
        memAccount: 'admin',
        memTotal: '168.08',
        membalances: [{
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
        }]
    }
})