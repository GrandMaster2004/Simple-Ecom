# Shopping List App

A modern, responsive shopping list and community application built with Next.js. This app allows users to manage their shopping lists, discover new shops and products, interact with a feed of posts, organize groups, and save their favorite items.

## ✨ Features

*   **Home Section**:
    *   Personalized welcome with user avatar and name.
    *   Notification badge.
    *   Dynamic tab navigation for "All", "Lists", "Groups", and "Shops".
    *   Featured Shop Carousel with automatic sliding.
    *   "Quick Lists" display (showing a limited number on the home tab, all on the lists tab).
    *   "Recent Groups" display.
*   **Feeds Section**:
    *   Displays a feed of user posts.
    *   "New Post" creation button.
    *   Interactive post cards with like functionality, user avatars, store information, captions, and hashtags.
*   **Saved Section**:
    *   Categorized view of saved items (All, Lists, Posts, Shops).
    *   Displays saved items with relevant details (image, title, subtitle, progress for lists).
    *   Allows viewing full details of saved lists, shops, and posts.
*   **Profile Section**:
    *   User profile display with avatar, name, and email.
    *   "Edit Profile" button.
    *   List of profile options (Saved, My lists, My groups, Shops, Location, Language, Settings, Log Out).
*   **Create Forms**:
    *   **Create New Post**: Form to upload an image, add a description, tag a shop, and add mentions.
    *   **Create New Group**: Form to enter group name, upload a group icon, and add members.
    *   **Create New List**: Simple form to enter a list name.
    *   **Create New Shop**: Form to enter shop name, type, and location.
    *   **Create New Product**: Form to add product name, brand name, quantity, and size.
*   **Detail Screens**:
    *   **List Detail**: View detailed items within a specific list (e.g., "Picnic Prep", "Daily Fresh Picks") with checkboxes for completion.
    *   **Shop Detail**: View categories and products within a specific shop.
    *   **Post Detail**: View full details of a selected post, including user info, image, likes, and caption.
*   **Bottom Navigation**:
    *   Sticky navigation bar with icons for Home, Saved, Create New, Feeds, and Profile.
    *   Central "Create New" button with a unique design and radial menu for creating new groups, lists, or shops.
    *   The radial menu items are custom SVG shapes that appear to merge.
*   **Responsive Design**: The application is designed to be fully responsive and work seamlessly across various screen sizes (mobile, tablet, desktop).

## 🛠️ Technologies Used

*   **React**: JavaScript library for building user interfaces.
*   **Material-UI (MUI)**: React components for faster and easier web development.
*   **Lucide React**: Beautifully simple and customizable open-source icons.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

## 🚀 Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

*   React.js (v18.x or later)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    \`\`\`bash
    git clone <repository-url>
    cd shopping-list-app
    \`\`\`
    (Replace `<repository-url>` with the actual URL of your repository if you have one.)

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    \`\`\`

3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    \`\`\`

4.  **Open in your browser:**
    The application will be accessible at `http://localhost:3000`.

## 💡 Usage

*   Navigate through the different sections using the bottom navigation bar.
*   Click the central "Create New" button to open the radial menu and create new posts, groups, lists, or shops.
*   Interact with cards in the Home, Feeds, and Saved sections to view details or toggle likes.
*   Fill out the forms to add new content to the application.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

