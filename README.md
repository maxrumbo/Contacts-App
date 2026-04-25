# Contacts App

app to manage a contact list using React (class components) and Vite.

## Description

Contacts App helps users to:

- View the initial contact list.
- Add new contacts (name and tag).
- Delete contacts.
- Switch contact list view mode (Comfortable / Compact).
- Automatically save contacts to browser localStorage.

## Key Features

- Add-contact form with required field validation.
- Dynamic state-driven contact list.
- Delete button on each contact item.
- Empty state when there are no contacts.
- View modes:
	- Comfortable (`comfortable`)
	- Compact (`compact`)
- Local data persistence using key:
	- `contacts-app-data`

## Tech Stack

- React 18
- Vite 4
- JavaScript (ES Modules)
- Custom CSS

## Requirements

Make sure you have installed:

- Node.js (LTS version recommended)
- npm

## How To Run The Project

1. Install dependencies:

```bash
npm install
```

2. Run development mode:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build Production

```bash
npm run build
```

The build output will be generated in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Folder Structure

```text
.
|- public/
|  \- images/
|- src/
|  |- components/
|  |  |- ContactApp.jsx
|  |  |- ContactInput.jsx
|  |  |- ContactItem.jsx
|  |  |- ContactItemBody.jsx
|  |  |- ContactItemImage.jsx
|  |  |- ContactList.jsx
|  |  \- DeleteButton.jsx
|  |- styles/
|  |  \- style.css
|  |- utils/
|  |  \- data.js
|  \- index.jsx
|- index.html
|- package.json
|- vite.config.js
\- README.md
```

## Data Flow (Short)

1. Initial data is loaded from `src/utils/data.js`.
2. When the app starts, it checks data in localStorage.
3. If localStorage is empty/invalid, the app uses the initial data.
4. Every contact update (add/delete) is automatically saved back to localStorage.

## Notes

- All data is stored locally in the user's browser.
- Data will be lost if localStorage is cleared.