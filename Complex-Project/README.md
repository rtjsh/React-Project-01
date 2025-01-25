# React + Vite

How to Run Locally
To run this project locally on your machine, follow these steps:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Prerequisites
Node.js and npm installed on your machine

Currently, two official plugins are available:
Installation
Clone the repository to your local machine using the following command:
git clone <repo_name>

Navigate to the project directory:
cd appwriteblog

Install the project dependencies:
npm install

Configuration
Before running the project, you need to set up the environment variables. Create a .env file in the root directory of the project and add the following variables with appropriate values:

makefile
VITE_APPWRITE_URL=https://your-appwrite-endpoint.com/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
Replace your-appwrite-endpoint.com, your-project-id, your-database-id, your-collection-id, and your-bucket-id with the actual values corresponding to your Appwrite configuration.

Running the Project
Once the dependencies are installed and the environment variables are configured, you can run the project with the following command:

npm run dev

This will start the development server. Open your browser and navigate to http://localhost:3000 to view the project.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
