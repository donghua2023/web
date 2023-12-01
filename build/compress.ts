// vite压缩优化
import type { Plugin } from 'vite'
import compressPlugin from 'vite-plugin-compression';

export const configCompressPlugin = (compress: VITECompression): Plugin | Plugin[] => {
  if (compress === 'none') return null
}