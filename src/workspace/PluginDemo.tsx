// import { skeleton } from '@alilc/lowcode-engine';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import ComponentsPane from '@alilc/lowcode-plugin-components-pane';
export function pluginDemo(ctx: IPublicModelPluginContext) {
  const { skeleton } = ctx;
  return {
    init() {
      setTimeout(() => {
        skeleton.add({
          area: 'topArea',
          type: 'Widget',
          name: 'pluginDemo',
          props: {
            align: 'left',
            width: 800,
          },
          index: -1,
          content: <div>test</div>,
          contentProps: {
            ctx,
          },
        });
        // 注册组件面板
        skeleton.add({
          area: 'leftArea',
          type: 'PanelDock',
          name: 'componentsPane',
          content: <div>leftArea</div>,
          contentProps: {},
          props: {
            align: 'top',
            icon: 'zujianku',
            description: '组件库',
          },
        });
      }, 2000);
    },
  };
}

pluginDemo.pluginName = 'pluginDemo';
