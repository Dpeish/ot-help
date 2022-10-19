
export default ({
  Vue,      /* VuePress 正在使用的 Vue 构造函数*/
  options,  /* 附加到根实例的一些选项 */
  router,   /* 当前应用的路由实例 */
  siteData  /* 站点元数据 */
}) => {
  /* 应用级别的拓展优化 */
  Vue.mixin({
      mounted() {
          setTimeout(() => {  /* 添加 setTimeout 避免报错（该报错不影响效果） */
              try {
                  docsearch({  /* 添加 Algolia DocSearch 提供的代码 */
                      appId: 'UC3OGKEDNW',
                      apiKey: '8ed8c4a3c38c5b2e1a4eb12ed89630bc',
                      indexName: 'help-center',
                      container: '.VPNavBarSearch',
                      debug: false
                  });
              } catch (e) {
                  console.log(e);
              }
          }, 100)
      },
  });
};
