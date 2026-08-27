# First Angular App

A small Angular application for managing user-specific tasks. The app lets a user select a person from a list, view that person's tasks, and add or complete tasks from the interface.

## Features

- User list with selectable profiles
- Dynamic task list per selected user
- Add new task form
- Mark tasks as complete by removing them from the list
- Angular component-based structure with reusable UI pieces

## Tech Stack

- Angular 19
- TypeScript
- HTML/CSS
- Angular CLI

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (recommended: LTS version)
- npm

## Getting Started

1. Open a terminal in the project root.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and visit:

```text
http://localhost:4200/
```

The app will automatically reload when files are changed.

## Available Scripts

```bash
npm start
```
Runs the Angular development server.

```bash
npm run build
```
Builds the project for production.

```bash
npm test
```
Runs the Angular unit tests.

```bash
npm run watch
```
Builds the app in watch mode during development.

## Project Structure

```text
first-angular-app/
├── src/
│   ├── app/
│   │   ├── header/
│   │   ├── tasks/
│   │   ├── task/
│   │   ├── user/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── dummy-users.ts
│   │   └── dummy_tasks.ts
│   ├── assets/
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```

## Notes

This project is a learning/demo Angular app inspired by a course project. It focuses on core Angular fundamentals such as components, inputs, outputs, services, and conditional rendering.

## License

This project is for educational/demo purposes.
