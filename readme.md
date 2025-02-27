# ProspectZebra Website

A marketing agency website built with Node.js and Express.

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Access the site at http://localhost:3000

## Deploying to Google Cloud

### Prerequisites

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
2. Initialize the SDK and authenticate:
   ```
   gcloud init
   ```

### Deployment Steps

1. Create a new Google Cloud project (or use an existing one):
   ```
   gcloud projects create [PROJECT_ID] --name="[PROJECT_NAME]"
   ```

2. Set the current project:
   ```
   gcloud config set project [PROJECT_ID]
   ```

3. Enable billing for the project (required for App Engine):
   - Visit the [Google Cloud Console](https://console.cloud.google.com/billing)
   - Link a billing account to your project

4. Enable the App Engine Admin API:
   ```
   gcloud services enable appengine.googleapis.com
   ```

5. Deploy the application:
   ```
   gcloud app deploy
   ```

6. View your deployed application:
   ```
   gcloud app browse
   ```

### Configuration

The deployment configuration is defined in `app.yaml`. Key settings:

- **Runtime**: Node.js 18
- **Instance Class**: F1 (free tier)
- **Scaling**: Automatic with constraints to minimize costs

### Continuous Deployment

For continuous deployment, consider setting up Cloud Build with a trigger connected to your GitHub repository.
