# Dobbi Web Admin

Web application built with **Expo** for web and using **Supabase** as the backend. This project utilizes **Docker** and **Docker Compose** to ensure consistent development environments and is deployed on **Vercel**.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Set Up Environment Variables](#set-up-environment-variables)
  - [Run the Application](#run-the-application)
- [Installing Dependencies](#installing-dependencies)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
  - [Deployment Process](#deployment-process)


---


## Prerequisites

Make sure you have the following installed on your local machine:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Included with Docker Desktop on Windows and macOS. On Linux, install it separately: [Install Docker Compose](https://docs.docker.com/compose/install/)


## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/my-web-app.git
cd my-web-app
```

### Set Up Environment Variables
Create a `.env` file in the project’s root directory.
```bash
# .env
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Run the Application
To start the application locally, use Docker Compose:
```bash
docker-compose up
```
This command will:
  - Build the Docker image (if it doesn’t exist).
  - Start the Docker container and run the application in development mode.


## Installing Dependencies
If you need to add a new dependency to the project, follow these steps:

1. **Access the Docker Container:**
```bash
docker-compose exec web sh
```
2. **Install the Dependency:**
```bash
npm install dependency-name
```
3. **Exit the Docker Container:**
```bash
exit
```
4. **(Optional) Install Dependencies Locally:**
If your code editor requires dependencies locally for features like autocomplete or linting, you can run:
```bash
npm install
```
This is optional and does not affect execution within Docker.


## Development Workflow

* **Make Changes:** Edit the project files on your local machine using your preferred code editor.
* **Hot Reloading:** Changes to the code will automatically be reflected in the app thanks to Expo's hot reloading.
* **Stop the Application:** To stop the application, press `Ctrl+C` in the terminal where `docker-compose up` is running.
* **Rebuild the Docker Image:** If you make changes to the Dockerfile or need to rebuild the image:
```bash
docker-compose build
```
