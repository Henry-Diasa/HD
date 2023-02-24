import { defineConfig } from 'dumi';
let base;
let publicPath;
if (process.env.NODE_ENV === 'production' && process.env.SITE_BUILD_ENV !== 'PREVIEW') {
  base = '/HD';
  publicPath = '/HD/';
}
export default defineConfig({
  title: 'HD',
  outputPath: 'doc-dist', // 输出文件夹
  // exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  // dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  base,
  publicPath,
});
