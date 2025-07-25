# node-path-aliases

A minimal Node.js + TypeScript starter project demonstrating path aliasing using `tsconfig.json` and Node.js `imports` field.

[Read more about node imports](https://nodejs.org/api/packages.html#imports)

## Features
- TypeScript with modern configuration (`esnext`, `nodenext`)
- Path aliases for cleaner imports (e.g., `#utils/log-it.js`, `#utils/log-me.js`)
- Simple example utilities

## Path Aliasing
- **TypeScript**: Configured in `tsconfig.json` under `paths`:
  ```json
  "paths": {
    "#*": ["./src/*"]
  }
  ```
- **Node.js**: Configured in `package.json` under `imports`:
  ```json
  "imports": {
    "#*": "./dist/*"
  }
  ```
- **Import examples** with path aliases in TypeScript:
  ```ts
  import { logAll } from '#utils/log/log-all.js';
  import { logIt } from '#utils/log/log-it.js';
  import { logMe } from '#utils/log/log-me.js';
  ```

## Usage
1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Build the project**
   ```sh
   npm run build
   ```
3. **Run the project**
   ```sh
   npm start
   ```

## Example Output
```
log it: Hello, World!
logging me: Hello, World! me
log it: ==prefix== Hello, World! all ==prefix==
logging me: ==prefix== Hello, World! all ==prefix==
```

