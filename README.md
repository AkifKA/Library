
# Projecet: MAK Library

# Project Owerview
MAK library app has been created using React and various related technologies. An overview of the main components and technologies employed in the project is provided below:

## Components:

Button.jsx: A component containing navigation buttons that utilize react-router-dom for routing.
Card.jsx: Book information, including its title, image, and a "View More" button for details, is displayed.
Footer.jsx: Copyright information is presented in the footer, along with a theme-switching button for toggling between light and dark themes.
Header.jsx: A search bar and a dropdown for filtering book results based on print type are rendered.
Icon.jsx: SVG icons are rendered based on provided data.
Navbar.jsx: A navigation bar component displaying links for Home, About, Register, and Login is presented, adapting to user authentication status.
About.jsx: Information about the developer and social media links are showcased.
Detail.jsx: Comprehensive information about a selected book is displayed.
Home.jsx: A search bar and a list of cards representing books based on user queries are shown.
Login.jsx: Users can simulate login procedures on this page.
Register.jsx: A placeholder component indicates that the registration feature is currently being developed.
AppRouter.jsx: Application routes are established and user authentication and private routes are managed using react-router-dom.
PrivateRouter.jsx: Private routes are handled based on user authentication.
Flex.jsx: A utility component for applying flexbox layout styling.
GlobalStyles.jsx: Global styles are defined for the application.
themes.js: Light and dark themes are defined using styled-components.
App.js: The main entry point of the application, responsible for theme and router setup.
index.js: Renders the root component and attaches it to the DOM.

## Technologies and Libraries Used:

React: Employed for constructing the user interface and managing the application's state and components.
react-router-dom: Manages routing and navigation across various views.
styled-components: Enables component styling using CSS-in-JS.
axios: Used for making HTTP requests to the Google Books API in order to retrieve book data.
react-toastify: Provides user notifications, such as success messages.
FontAwesome: Utilized for rendering icons within the application.
Environment Variables: Used for storing sensitive data like API keys.

The application employs a modular structure, with each component responsible for specific functionalities. Features such as book searches, detailed book displays, theme changes, and simulated user authentication are incorporated. The provided code snippets illustrate the implementation of these features using React and related technologies.

<img align="center" width="800" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemh2aW05aGtkbTMzNm82cXFsdGZrYnd0bjRneDV3M2IxeXBidmdnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r7mh8rEkm2dJCH94ID/giphy.gif" />

```
## Project Skeleton

├── public
│     └── index.html
├── src
│    ├── App.js
│    ├── assets
│    │   ├── about.png
│    │   ├── book.jpg
│    │   ├── books.jpg
│    │   └── const.png
│    ├── components
│    │   ├── card
│    │   │   ├── Card.jsx
│    │   │   └── Card.style.jsx
│    │   ├── footer
│    │   │   ├── Footer.jsx
│    │   │   └── Footer.style.jsx
│    │   ├── header
│    │   │   ├── Header.jsx
│    │   │   └── Header.style.jsx
│    │   ├── icon
│    │   │   ├── Icon.jsx
│    │   │   └── Icon.style.jsx
│    │   └── navbar
│    │       ├── Navbar.jsx
│    │       └── Navbar.style.jsx
│    ├── helper
│    │   └── iconData.js
│    ├── index.css
│    ├── index.js
│    ├── pages
│    │   ├── about
│    │   │   ├── About.jsx
│    │   │   └── About.style.jsx
│    │   ├── detail
│    │   │   ├── Detail.jsx
│    │   │   └── Detail.style.jsx
│    │   ├── home
│    │   │   ├── Home.jsx
│    │   │   └── Home.style.jsx
│    │   ├── login
│    │   │   ├── Login.jsx
│    │   │   └── Login.style.jsx
│    │   └── register
│    │       ├── Register.jsx
│    │       └── Register.style.jsx
│    ├── router
│    │   ├── AppRouter.jsx
│    │   └── PrivateRouter.jsx
│    └── styles
│        ├── Flex.jsx
│        ├── Global.styles.jsx
│        └── theme.js
├── package.json
└── yarn.lock
```
