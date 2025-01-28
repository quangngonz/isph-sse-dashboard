# ISPH Stocks Exchange Admin Dashboard

This project is a React-based admin dashboard for managing the ISPH Stocks Exchange. It provides a user interface for monitoring stocks, events, users, and transactions, as well as general settings.

## Features

-   **Authentication:** Supports sign-in with Google and custom credentials.
-   **Dashboard:** A welcome page providing an overview of the application.
-   **Stocks Management:**
    -   **Overview:** View a summary of stock performance.
    -   **List:** Browse and manage individual stocks.
-   **Events Management:**
    -   **Pending:** Monitor and manage pending events.
    -   **History:** View a history of past events.
-   **Users:** Manage user accounts.
-   **Transactions:** View and manage transaction records.
-   **Settings:** Configure application settings.
-   **Responsive Layout:** Adapts to different screen sizes for optimal viewing.
## Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn package manager

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd quangngonz-isph-sse-dashboard
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

1. **Firebase:**
    -   Create a Firebase project in the Firebase console.
    -   Enable Google Authentication and (optionally) Email/Password Authentication in your Firebase project.
    -   Add a web app to your Firebase project and obtain the configuration.
    -   Set environment variables in your development environment for the Firebase configuration. You can use a `.env` file (remember to add it to `.gitignore`):

        ```
        VITE_FIREBASE_API_KEY=<your-api-key>
        VITE_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
        VITE_FIREBASE_PROJECT_ID=<your-project-id>
        VITE_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
        VITE_FIREBASE_MESSAGE_SENDER_ID=<your-messaging-sender-id>
        VITE_FIREBASE_APP_ID=<your-app-id>
        ```

### Development

To start the development server:

```bash
npm run dev
```