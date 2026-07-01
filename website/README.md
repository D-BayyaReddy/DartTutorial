# 🎯 Dart Master

An interactive, browser-based coding platform and online judge designed for learning Dart. Users can read structured lessons, write real Dart code directly in the integrated Monaco IDE, run their code, see outputs on a styled terminal console, and verify solutions against hidden unit tests.

## 🚀 Features

- **Split-Screen Interactive Layout**: Resizable panel splitters for navigation sidebar, code editor, and execution outputs.
- **Embedded Monaco Editor**: Full desktop-class IDE features (line numbers, code formatting, auto-completion, copy, full-screen, and shortcuts).
- **Educational Dart Runtime**: Sandboxed evaluation engine transpiling basic Dart code to JavaScript.
- **Online Judge**: Instant validation of code against multiple unit tests, checking output values, types, and function returns.
- **Progress Tracking**: Tracks XP, completed lessons, and achievements in `localStorage`.
- **Light & Dark Theme**: Sleek typography and accessibility-focused contrast modes.
- **50 Core Modules**: Over 50 progressive lessons covering basics, collections, OOP, null safety, futures, async, and modern Dart 3 features.

## 🛠️ Getting Started

### Local Development

1. Navigate to the website folder:
   ```bash
   cd website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the browser at `http://localhost:3000`.

### Production Build

To build the static application:
```bash
npm run build
```
The output files will be compiled and optimized in the `dist` directory.

## 🌐 Netlify Deployment

This project is fully configured for zero-setup deployment to Netlify:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Configuration File**: `netlify.toml`
