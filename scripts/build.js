require("esbuild")
  .build({
    entryPoints: ["src/**/*.ts"],
    outdir: "dist",
    platform: "node",
    bundle: true,
    minify: false,
    external: ["*"],
    alias: {
      "@layers/services/src": "/opt/nodejs",
      "@layers/utils/src": "/opt/nodejs",
    },
  })
  .catch(() => process.exit(1));
