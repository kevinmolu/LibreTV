const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '溪桥资源',
    }
};
 // 可以继续添加更多站点
    mzzy: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
        type: 'json',
        searchable: 1,
        quickSearch: 1,
        filterable: 1
    },
    ffzy: {
        api: 'https://api.feifeicms.org/api.php/provide/vod',
        name: '飞飞资源',
        type: 'json',
        searchable: 1,
        quickSearch: 1,
        filterable: 1
    }
};




// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
