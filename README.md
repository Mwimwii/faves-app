# Faves - Your favorite movie bookmarking app

## Summary

- Faves is a Single Page Application that allows your users to bookmark their favorite movies. The application uses the [TMDB API](https://www.themoviedb.org/documentation/api) to fetch movie data and is built using the React framework using typescript.

The application was designed with two page views:
    - **Home**: The home page displays a list of the top movies.
    - **Likes**: The likes page displays a list of movies that the user has marked as their favorite.

The application does not store the data in the local storage or indexDB so every page reload is considered a session.

## Installation

- The app was create using vite [vite](https://vitejs.dev/), which is super tiny and fast. This was the recurring theme throughout the tech stack of the project.
- Its quite easy to install the app:

    - Install the dependencies:
        ```bash
        yarn install or npm install
        ```

    - Run the application:
        ```bash
        yarn start or npm run start
        ```

## Design and CSS
- The project uses tailwindcss for its main choice of styling (another amazing tool). The responds to the user's screen size and modifies the layout drastically to accomodate different devices. Tailwind guarantees performance while keeping the bundle size down. Although tailwindcss is feared to get unweildy, the aid of React's reusable components helps avoid a huge heap of CSS.

## State Management
- I utilized zustand to manage the global store. Zustand flips the tables for ease of use and state management. Its a dream come true for this application since we only needed to manage 2 arrays overall.



