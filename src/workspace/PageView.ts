import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { pluginDemo } from './PluginDemo';

export const pageView = (ctx: IPublicModelPluginContext, options: any) => {
  return {
    async init() {
      // 注册插件
      await ctx.plugins.register(pluginDemo)
    },
  };
};

pageView.viewName = 'pagePlugin';