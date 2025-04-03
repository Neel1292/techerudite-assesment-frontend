# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Neel1292/techerudite-assesment-frontend/
    ```
2. Navigate to the project directory:
    ```bash
    cd Techerudite-Assesment/Frontend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Development Server

Start the development server with the following command:
```bash
npm run dev
```
or
```bash
yarn dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build, run:
```bash
npm run build
```
or
```bash
yarn build
```
The build artifacts will be stored in the `dist` directory.

## Project Structure

The project structure is as follows:
```
├── public/         # Static assets
├── src/            # Source code
│   ├── assets/     # Images, styles, etc.
│   ├── components/ # React common components
│   ├── handler/    # React api call
│   ├── pages/      # Pages in application
│   ├── utils/      # Common function.
│   ├── App.jsx     # Main application component
│   └── main.jsx    # Entry point
├── package.json    # Project metadata and dependencies
└── vite.config.js  # Vite configuration
```
