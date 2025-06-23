# Virtualization Testing

A visual comparison of various virtualization libraries, focusing on their performance across different scenarios. This project aims to assist developers in selecting the most suitable virtualization solution for their specific needs.

## Overview

This application benchmarks and visually demonstrates the performance of different virtualization libraries under various conditions, including:

- **Simple Virtualization**: Minimal content per row.
- **Heavy Virtualization**: Complex or fetched content per row.
- **Variable Row Sizes**: Rows with differing heights.
- **Scroll to Bottom**: Performance when scrolling to the end of the list.

## Virtualization Libraries Tested

The project includes implementations from the following libraries:

- **react-window**
  - A lightweight virtualization library from Brian Vaughn, optimized for fixed-size rows and columns.
  - [Docs](https://react-window.now.sh/)
  - [GitHub](https://github.com/bvaughn/react-window)
- **react-virtualized**
  - A modern library focused on flexibility and performance, especially with dynamic sizes and large data sets.
  - [Docs](http://bvaughn.github.io/react-virtualized/)
  - [GitHub](https://github.com/bvaughn/react-virtualized)
- **@tanstack/react-virtual**
  - The latest evolution of `react-virtual`, designed by Tanner Linsley with improved ergonomics and integration for modern React.
  - [Docs](https://tanstack.com/virtual/latest/docs/introduction)
  - [GitHub](https://github.com/tanstack/virtual)
- **react-virtuoso**
  - A high-level library that provides more advanced features out of the box, such as automatic size detection and grouped rows.
  - [Docs](https://virtuoso.dev/)
  - [GitHub](https://github.com/petyosi/react-virtuoso)

Each library is tested in comparable scenarios to showcase strengths, weaknesses, and usability trade-offs.

## Technologies Used

- **Framework**: React
- **TypeScript**: For static type checking.
- **Vite**: Build tool for faster development.
- **ESLint & Prettier**: Code linting and formatting.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version specified in `.nvmrc`)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/coreycaskey/virtualization-testing.git
   cd virtualization-testing
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the development server:

Using npm:

```bash
npm run dev
```

Using Yarn:

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

- **`src/`**: Main application source code.
- **`index.html`**: Main HTML file.
- **`vite.config.ts`**: Vite configuration.
- **`tsconfig*.json`**: TypeScript configurations.
- **`.eslintrc.js` & `.prettierrc`**: Linting and formatting configurations.

## Troubleshooting

If the application fails to load locally and you see `TypeError: styled_default is not a function` in the browser console, do the following:

- Terminate the local server
- Clear node modules (or at the very minimum, `.vite/deps`)
- Run `npm i` (or `npm ci`)
- Restart the server

This should resolve the issue.
