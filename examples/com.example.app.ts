import { defineGkdApp } from '@gkd-kit/define';

// 示例文件（不参与构建）：写新 App 规则时复制到 src/apps/<包名>.ts 再改内容。
// snapshotUrls 必须换成该弹窗真实快照的链接（i.gkd.li/import/<id>）。
export default defineGkdApp({
  id: 'com.example.app',
  name: '示例应用',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过按钮',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 3000,
      rules: [
        {
          key: 0,
          matches:
            '[text^="跳过"][text.length<=10][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/00000000',
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      desc: '有「更新」特征时点击取消，避免误触普通页面的取消',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: '@[text="取消"] + [text="更新"]',
          snapshotUrls: 'https://i.gkd.li/import/00000000',
        },
      ],
    },
  ],
});
