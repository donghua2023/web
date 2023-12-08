// vite压缩优化
import type { Plugin } from "vite";
import compressPlugin from "vite-plugin-compression";

export const configCompressPlugin = (compress: VITECompression): Plugin | Plugin[] => {
  if (compress === "none") return null;

  const gz = {
    // 生成的压缩包后缀
    ext: ".gz",
    // 体积大于threshold才会被压缩
    threshold: 0,
    // 默认压缩全部文件
    filter: () => true,
    // 压缩后是否删除原始文件
    deleteOriginFile: false
  };

  const br = {
    // 生成的压缩包后缀
    ext: ".br",
    algorithm: "brotliCompress",
    // 体积大于threshold才会被压缩
    threshold: 0,
    // 默认压缩全部文件
    filter: () => true,
    // 压缩后是否删除原始文件
    deleteOriginFile: false
  };

  const codeList = [
    { k: "gzip", v: gz },
    { k: "brotli", v: br },
    { k: "both", v: [gz, br] }
  ];

  const plugins: Plugin[] = [];

  codeList.forEach((item) => {
    if (compress.includes(item.k)) {
      if (compress.includes("clear")) {
        if (Array.isArray(item.v)) {
          item.v.forEach((vItem) => {
            plugins.push(compressPlugin(vItem, { deleteOriginFile: true }));
          });
        } else {
          plugins.push(compressPlugin(item.v, { deleteOriginFile: true }));
        }
      } else {
        if (Array.isArray(item.v)) {
          item.v.forEach((vItem) => {
            plugins.push(compressPlugin(vItem));
          });
        } else {
          plugins.push(compressPlugin(item.v));
        }
      }
    }
  });

  return plugins;
};
