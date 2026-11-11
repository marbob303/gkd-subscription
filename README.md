# 个人 GKD 订阅

单人自用的 GKD 订阅，只收机主自己实际遇到的弹窗规则，基于官方模板
[gkd-kit/subscription-template](https://github.com/gkd-kit/subscription-template) 构建。

## 在 GKD 里添加

订阅地址（二选一，内容相同）：

- `https://raw.githubusercontent.com/marbob303/gkd-subscription/main/dist/gkd.json5`
- `https://fastly.jsdelivr.net/gh/marbob303/gkd-subscription@main/dist/gkd.json5`（raw 拉不到时用这个）

## 维护方式

- 撞到没被处理的弹窗 → 抓快照 → 在审查工具里把选择器查到恰好命中 1 个目标节点 → 写进 `src/apps/<包名>.ts`，每条规则必带 `snapshotUrls`。
- 规则的组 `key`、规则 `key`、订阅 `id` 定下后永不更改；每次发布把 `src/subscription.ts` 的 `version` 加 1。
- 弹窗消失或 App 不用了，直接删规则，不留僵尸规则。
- 构建：本地或 GitHub Actions 均可。本地：Node.js >= 22 + pnpm，`pnpm install` 后 `pnpm run build`，产物在 `dist/`。

## 目录

- `src/subscription.ts` — 订阅元信息
- `src/categories.ts` — 分类（按规则组名前缀：开屏广告 / 广告弹窗 / 更新弹窗）
- `src/globalGroups.ts` — 全局规则组
- `src/apps/` — 各 App 的规则文件（一个包名一个文件）
- `examples/` — 示例规则（不参与构建）
