import { ConfigEnv, UserConfigExport, loadEnv } from "vite";
import { resolve } from "path";
import { warpperEvn } from "./build";
import { getPluginsList } from "./build/plugins";
import { include, exclude } from "./build/optimize";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@cpns": pathResolve("src/components"),
  "@build": pathResolve("build")
};

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_COMPRESSION, VITE_PROXY_TARGET, VITE_AUTH_PROXY_TARGET } = warpperEvn(
    loadEnv(mode, root)
  );
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: alias
    },
    // 服务端渲染
    server: {
      port: VITE_PORT,
      host: "0.0.0.0",
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        "/authApi": {
          target: VITE_AUTH_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/authApi/, "")
        },
        "/HSApi": {
          target: VITE_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/HSApi/, "")
        }
      }
    },
    plugins: getPluginsList(VITE_COMPRESSION),
    optimizeDeps: { include, exclude },
    build: {
      target: "es2015",
      sourcemap: false,
      rollupOptions: {
        input: {
          index: pathResolve("index.html")
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
};
