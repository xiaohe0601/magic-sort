import defineConfig from "@xiaohe01/eslint-config";

export default defineConfig({
  type: "lib",
  pnpm: true,
  ignores: [
    "**/*.md"
  ]
});