# Aliases with default import in React TypeScript SWC using Vite.js

<br />

## 1. vite.config.ts

In the `vite.config.ts` file, add these lines:


```diff
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
+ // Also, don't forget to npm i -D @types/node so that __dirname won't throw an error.
+ mport * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
+   resolve: {
+     alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
+   },
});

```

The final code looks like this:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// Also, don't forget to npm i -D @types/node so that __dirname won't throw an error.
mport * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});

```

<br />

## 2. tsconfig.json

In the `tsconfig.json` file, add these lines:

```diff
{
  "compilerOptions": {
    ...
+    "baseUrl": "./src",
+    "paths": {
+      "@/*": ["./*"],
+      "components/*": ["./src/*"]
    }
  },
+  "include": ["src", "src/**/*.tsx"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

The final code looks like this:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["node"],
    
    /* Aliases with default import */
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./src/*"],
      "components/*": ["./src/components/*"]
    }
  },
  "include": ["src", "src/**/*.tsx"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 3. usage example

Will we use the `DarkSwitch` component.

```bash
|-- App.css
|-- App.tsx                <---- import { DarkSwitch } from "@/components";
|-- assets
|   `-- react.svg
|-- components
|   |-- DarkSwitch.tsx
|   `-- index.ts            <---- export { default as DarkSwitch } from './DarkSwitch';
|-- index.css
|-- main.tsx
`-- vite-env.d.ts
```


=> It worked. 😁

Note: Great, thanks to [翠](https://github.com/sapphi-red) / [13066](https://github.com/vitejs/vite/discussions/13066#discussioncomment-5778752)



