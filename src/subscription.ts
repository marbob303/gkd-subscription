import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 749643080,
  name: '个人订阅',
  version: 3,
  author: 'marbob303',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/marbob303/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
