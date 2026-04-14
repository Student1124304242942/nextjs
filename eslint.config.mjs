import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from 'eslint-config-prettier/flat';  

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tseslint.configs.recommended,  
  prettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "@/semi": "off",
      "@typescript-eslint/semi": "warn",
      "@typescript-eslint/no-empty-interface": [
        "error",
        { allowSingleExtends: true }
      ],
      
    },
  },
]);

export default eslintConfig;