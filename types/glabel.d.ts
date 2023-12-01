// 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
interface ViteEnv {
  VITE_PORT: number;
  VITE_PUBLIC_PATH: string;
  VITE_ROUTER_HISTORY: string;
  VITE_CDN: boolean;
  VITE_HIDE_HOME: string;
  VITE_COMPRESSION: ViteCompression;
}
type VITECompression = "none" | "gzip" | "brotli" | "both" | "gzip-clear" | "brotli-clear" | "both-clear";
