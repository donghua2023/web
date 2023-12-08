// 插件
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configCompressPlugin } from './compress'
import removeConsole from "vite-plugin-remove-console";
import svgLoader from 'vite-svg-loader'
import viteEslint from 'vite-plugin-eslint';

export const getPluginsList = (compress) => {
  return [
    // 支持vue
    vue(),
    // 支持jsx
    vueJsx(),
    // 是否压缩
    configCompressPlugin(compress),
    // 线上环境删除consolelog
    removeConsole(),
    // 支持svg
    svgLoader({
      defaultImport: 'url'
    }),
    viteEslint()
  ]
}