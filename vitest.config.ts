import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      include: [
        "packages/*/**"
      ],
      exclude: [
        ...coverageConfigDefaults.exclude,
        "packages/*/src/index.ts",
        "packages/*/src/types.ts",
        "packages/*/dist/**"
      ]
    }
  }
});