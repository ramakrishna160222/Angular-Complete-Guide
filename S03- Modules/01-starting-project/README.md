# Essentials Task Manager

A small Angular task-management application. Select a user to view their tasks, add new tasks, and mark existing tasks as complete. Tasks are stored in the browser's `localStorage`, so changes survive page reloads in the same browser.

This project is part of the Angular modules course project and demonstrates traditional Angular `NgModule` architecture, component communication, services, forms, and asset handling.

## Features

- Displays a list of predefined users with avatars.
- Selects one user at a time and displays that user's tasks.
- Adds a task with a title, summary, and due date.
- Removes a task when it is completed.
- Persists task changes under the `tasks` key in browser `localStorage`.
- Reloads saved tasks when the application starts.

## Requirements

- Node.js and npm. Use a current LTS version when possible.
- A modern browser with JavaScript and `localStorage` enabled.

The project uses Angular 18, TypeScript 5.4, and RxJS 7.8. The exact dependency versions are defined in `package.json` and `package-lock.json`.

## Getting started

From this project directory:

```bash
npm install
npm start
```

Open <http://localhost:4200/> in a browser. The development server watches the source files and reloads the application after changes.

The equivalent Angular CLI command is:

```bash
npx ng serve
```

To use another port:

```bash
npx ng serve --port 4300
```

## Project architecture

The application bootstraps `AppModule` from `src/main.ts`. `AppModule` is the root NgModule and registers the app shell, header, user list, shared card module, and task feature module.

### Runtime data flow

1. `AppComponent` reads the predefined users from `DUMMY_USERS` and tracks the selected user ID.
2. Each `UserComponent` receives a user and selected state through `@Input()` properties.
3. When a user is clicked, `UserComponent` emits the user ID through its `select` `@Output()`.
4. `AppComponent` passes the selected user's ID and name to `TasksComponent`.
5. `TasksComponent` asks `TasksService` for tasks belonging to that user.
6. `NewTaskComponent` sends form data to `TasksService.addTask()`.
7. `TaskComponent` calls `TasksService.removeTask()` when a task is completed.
8. The service saves every mutation to `localStorage`; Angular's change detection updates the visible task list.

### Module boundaries

- **`AppModule`**: Root module. Bootstraps `AppComponent` and declares the application shell, header, and user components.
- **`TasksModule`**: Feature module for task display and creation. Declares `TasksComponent`, `TaskComponent`, and `NewTaskComponent`, and exports `TasksComponent` for use by the root module.
- **`SharedModule`**: Shared UI module containing the reusable `CardComponent`. It is imported by both the root and task modules.
- **`CommonModule`**: Provides common Angular template functionality to the task feature module.
- **`FormsModule`**: Enables template-driven form bindings used by the new-task form.

The components use external HTML and CSS files. Components are not standalone; they are declared by their respective NgModules.

## Directory structure

```text
src/
├── main.ts                    # Application bootstrap
├── index.html                 # Host HTML document
├── styles.css                 # Global styles
├── assets/users/              # User avatar images
└── app/
		├── app.module.ts          # Root NgModule
		├── app.component.*        # User selection and page composition
		├── dummy-users.ts         # Seed user data
		├── header/                # Application header
		├── user/                  # User card and User model
		├── shared/card/           # Reusable card component and SharedModule
		└── tasks/
				├── tasks.module.ts    # Task feature NgModule
				├── tasks.component.*  # Selected user's task list
				├── tasks.service.ts   # Task state and localStorage persistence
				├── task/              # Individual task and Task model
				└── new-task/          # New-task form
```

The `*` notation represents the TypeScript, template, and stylesheet files that share the same component name.

## Data models

Users are defined by `User` in `src/app/user/user.model.ts`:

```ts
interface User {
	id: string;
	avatar: string;
	name: string;
}
```

Tasks are defined by `Task` in `src/app/tasks/task/task.model.ts`:

```ts
interface Task {
	id: string;
	userId: string;
	title: string;
	summary: string;
	dueDate: string;
}
```

New task forms use `NewTaskData`, where the entered date is named `date` before it is stored as `dueDate`.

## Persistence

`TasksService` is provided at the root level, so one service instance manages task state for the application. On construction it reads the JSON value stored at `localStorage.tasks`. If no saved value exists, the built-in sample tasks are used.

To reset the application to its sample data, open the browser developer console and run:

```js
localStorage.removeItem('tasks');
```

Then reload the page. Storage is local to the browser and origin; it is not a server-side database and is not shared between browsers or devices.

## npm scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server at `http://localhost:4200/`. |
| `npm run build` | Create a production build in `dist/essentials/`. |
| `npm run watch` | Rebuild continuously using the development configuration. |
| `npm test` | Run unit tests through Karma and Jasmine. |
| `npm run ng -- <command>` | Run an Angular CLI command, for example `npm run ng -- generate component name`. |

## Building for production

Run:

```bash
npm run build
```

The production output is written to `dist/essentials/`. The production configuration enables output hashing and enforces the bundle and component-style budgets configured in `angular.json`.

## Testing

Run the configured unit-test command with:

```bash
npm test
```

Tests use Jasmine and Karma. This repository currently contains the application source and does not include a dedicated end-to-end test setup. An end-to-end runner must be added separately before an `ng e2e` command can be used.

## Development notes

- Keep components focused on presentation and user interaction; keep task state changes in `TasksService`.
- Use `@Input()` for data flowing into child components and `@Output()` for child-to-parent events.
- Add reusable UI pieces to `shared/card` when they are needed by more than one feature module.
- Keep user avatar files in `src/assets/users`; Angular copies `src/assets` into the build output.
- The task service currently trusts the JSON found in `localStorage`. Clearing malformed storage may be necessary if manually edited data causes startup errors.

## Further reading

- [Angular documentation](https://angular.dev/)
- [Angular CLI command reference](https://angular.dev/tools/cli)
- [Angular NgModules](https://angular.dev/guide/ngmodules)
- [Angular template-driven forms](https://angular.dev/guide/forms)
- [RxJS documentation](https://rxjs.dev/)


<img width="560" height="499" alt="image" src="https://github.com/user-attachments/assets/b996fc8f-1c2d-4481-8919-5b0d2dfd3ce3" />

<img width="559" height="512" alt="image" src="https://github.com/user-attachments/assets/0b818407-3a08-4853-a06c-8175c50f3ed3" />
