// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { DevEnvironment } from "vite";

// On Windows, if the terminal working directory casing (e.g. `Documents/development/...`) differs
// from the disk realpath (`Documents/Development/...`), Node's ESM loader loads Vite twice under
// differently-cased file:// URLs. Because `RunnableDevEnvironment extends DevEnvironment`, defining
// `Symbol.hasInstance` on `DevEnvironment` lets `isRunnableDevEnvironment(serverEnv)` succeed
// across both module instances so TanStack Start always installs its SSR dev middleware.
Object.defineProperty(DevEnvironment, Symbol.hasInstance, {
  configurable: true,
  value(this: Function, instance: unknown) {
    if (Function.prototype[Symbol.hasInstance].call(this, instance)) return true;
    let cur = instance && typeof instance === "object" ? Object.getPrototypeOf(instance) : null;
    while (cur) {
      if (cur.constructor?.name === this.name) return true;
      cur = Object.getPrototypeOf(cur);
    }
    return false;
  },
});

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
