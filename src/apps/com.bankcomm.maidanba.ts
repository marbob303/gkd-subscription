import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bankcomm.maidanba',
  name: '买单吧',
  groups: [
    {
      key: 0,
      name: '广告弹窗-首页弹窗广告',
      desc: '首页启动后弹出的广告图（带「广告」标识与圆形关闭按钮），点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionMaximum: 1,
          activityIds: 'com.bankcomm.maidanba.activity.MainActivity',
          matches:
            '[text="广告"] + ImageView[vid="ivADClose"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/34684876',
        },
      ],
    },
    {
      key: 1,
      name: '开屏广告-启动页广告',
      desc: '启动页全屏广告，点击右上角「跳过」',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionMaximum: 1,
          activityIds: 'com.bankcomm.maidanba.activity.SplashActivity',
          matches: '@[vid="ll_ad_skip"] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/34685602',
        },
      ],
    },
  ],
});
