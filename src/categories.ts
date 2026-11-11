import { defineGkdCategories } from '@gkd-kit/define';

// 分类按规则组名的前缀归类：组名以这里的 name 开头即被捕获。
export default defineGkdCategories([
  { key: 0, name: '开屏广告' },
  { key: 1, name: '广告弹窗' },
  { key: 2, name: '更新弹窗' },
]);
