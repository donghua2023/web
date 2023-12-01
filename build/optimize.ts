// 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
const include = []
// 在预构建中强制排除的依赖项。
const exclude = []

export { include, exclude }