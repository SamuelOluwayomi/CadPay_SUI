# CadPay on Sui

CadPay is a modern, responsive decentralized application (dApp) built on the Sui blockchain. It leverages a modern frontend stack to deliver a seamless and engaging user experience, featuring interactive 3D elements, secure authentication, and smooth animations.

## Features

- **Sui Blockchain Integration**: Powered by `@mysten/dapp-kit-react` and `@mysten/sui` for robust Web3 wallet connections and transactions.
- **Authentication**: Seamless onboarding and wallet management with Privy (`@privy-io/react-auth`).
- **Interactive UI**:
  - 3D Globe visualization (`@react-three/fiber`, `@react-three/drei`)
  - Fluid animations and transitions with `framer-motion`
  - High-quality, reusable components (Floating Dock, World Map, etc.)
- **Modern Tech Stack**: Built with React 19, Vite, Tailwind CSS v4, and TypeScript.
- **State Management**: Utilizing `@tanstack/react-query` and `@nanostores/react` for efficient data fetching and global state management.

## Project Structure

```text
src/
├── components/
│   ├── home/        # Landing page components (e.g., Hero section)
│   ├── layout/      # Shared layout components (e.g., Navbar)
│   └── ui/          # Reusable UI elements (e.g., World Map, Floating Dock)
├── lib/             # Utility functions
├── App.tsx          # Main application root
└── index.css        # Tailwind v4 configuration and theme variables
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended package manager)

### Installation

1. Install project dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

To build the application for deployment, run:

```bash
pnpm build
```

This will run type checking and generate the production bundle in the `dist` folder.

## Styling & Customization

This project uses **Tailwind CSS v4** for styling alongside motion-based animations. 
- Theme variables and global styles are defined in `src/index.css`.
- The UI components located in `src/components/ui/` are highly customizable and can be tailored to fit your specific design needs.
