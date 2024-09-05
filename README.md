# Food Search App

A simple React application that allows users to search for food items and view their ingredients. The app also has a feature to add items to favorites and view them on the "Favourites" page.

This application is deployed on Netlify. You can access it at:

**[Food Search App on Netlify](https://food-recipe-site01.netlify.app)**

## Features

- Search for food items and view their details.
- View ingredients for each food item.
- Add food items to a favorites list.
- Persistent favorites stored in `localStorage`.
- Responsive navigation with a mobile-friendly hamburger menu.

## Pages

1. **Home**: Allows users to search for food items.
2. **Details**: Displays detailed information and ingredients for a selected food item.
3. **Favourites**: Displays a list of user-favorited food items.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Handles page navigation in the app.
- **Tailwind CSS**: For styling the application.
- **Context API**: Used for managing global state (e.g., favorites).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/food-search-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd food-search-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## How to Use

- Navigate to the homepage to search for food items by name.
- Click on a food item to view its details and ingredients.
- Add food items to your favorites, which are stored in `localStorage`.
- View your favorite food items on the "Favourites" page.
