import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { scenarioSwitcher, viewSwitcher } from './sample-plugins/scenario-switcher';
import { pageView } from './PageView'
import { registerPlugins } from 'src';

const ViewA = (ctx: IPublicModelPluginContext, options: any) => {
  return {
    async init() {
    // await ctx.plugins.register(viewSwitcher as any, {
    //   switchTo: 'editorViewB'
    // });
    // await ctx.plugins.register(scenarioSwitcher);
    await registerPlugins(ctx);
    }
  }
}
ViewA.viewName = 'editorViewA'


const ViewB = (ctx: IPublicModelPluginContext, options: any) => {
  return {
    async init() {
    // await ctx.plugins.register(viewSwitcher as any, {
    //   switchTo: 'editorViewA'
    // });
    // await ctx.plugins.register(scenarioSwitcher);
    await registerPlugins(ctx, 'B');
    }
  }
}
ViewB.viewName = 'editorViewB'

function pageResourceType(ctx: IPublicModelPluginContext): any {
  return {
    category: '页面',
    defaultViewType: 'editorViewA',
    defaultTitle: '测试',
    editorViews: [ViewA, ViewB],
    icon: '',
    async init() {
    },
  };
}

pageResourceType.resourceName = 'page';
pageResourceType.resourceType = 'editor';

export default pageResourceType;
