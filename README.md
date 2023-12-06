# lexitest (react)  

This documentation has been autocreated by planter. Install planter globally to easily develop within this application.  
Install command: **npm install -g @team-octoo/planter**  
Planter will give you commands to create components, state files, and much more. Just type in 'planter -h' in a terminal.  

## Styling  

This app uses css-modules to style its components.  
When creating a component using the planter library...  
## Component structure  

BEP component structure stands for 'Basics', 'Elements' and 'Pages'.  
It is a triple layered component structure...   

- Basics: Your basic building blocks. These components do not have any business logic in them. They get their state through props.  
- Elements: Elements are a collection of basic components and (sometimes) other elements. They can get their state through props or can have some business logic within the component itself.  
- Pages: Pages are the largest components. These usually are a collection of elements. It is common that they contain business logic and pass data toward child components.  

**Example**  
A simple note application has a login page, overview page, edit page.  
On the login page, there is a login container (just a div) which contains a form (element or basic) with input fields (basics).  
The overview page has the navigation (element) and a list of notes (element). The moment the overview page is rendered, the notes are fetched. When fetched, the notes are passed to the list element.  
The edit page has the navigation (element) and a form (basic or element) with input fields (basic). When the edit page is rendered, the note details are fetched. When fetched, the details are passed to the input components.  
(This is just an example but it illustrated how a simple app would be structured.)  

## Packages  
These packages were installed at the start of the project:  

- **Error-boundary**: Provides a component that acts as a fallback when render errors occur.
https://www.npmjs.com/package/react-error-boundary

- **React-router**: The defacto standard in React routing.
https://reactrouter.com/docs/en/v6



---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
