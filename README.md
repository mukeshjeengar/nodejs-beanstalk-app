# Node.js on AWS Elastic Beanstalk

This is a simple Node.js application deployed to AWS Elastic Beanstalk using Terraform for infrastructure provisioning and GitHub Actions for continuous deployment.

## Project Structure

- `index.js`: The main Express.js application file.
- `package.json`: Dependencies and scripts.
- `Procfile`: Command to run the application on Elastic Beanstalk.
- `terraform/`: Terraform configuration files.
  - `main.tf`: defines the AWS resources (Beanstalk App, Environment, IAM Roles, S3 Bucket).
  - `outputs.tf`: Outputs the environment URL.
- `.github/workflows/deploy.yml`: GitHub Actions workflow for auto-deployment to AWS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [Terraform](https://www.terraform.io/)
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate permissions.

### Local Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the server**:
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:3000`.

### Deployment

#### Infrastructure Setup (One-time)

1.  Navigate to the `terraform` directory:
    ```bash
    cd terraform
    ```

2.  Initialize Terraform:
    ```bash
    terraform init
    ```

3.  Apply the configuration to create AWS resources:
    ```bash
    terraform apply
    ```
    Confirm with `yes`. This will output the `cname` (URL) of your new Elastic Beanstalk environment.

#### Continuous Deployment

This repository is configured with GitHub Actions. Any push to the `main` branch will trigger a deployment.

**Required GitHub Secrets**:
To enable auto-deployment, add the following secrets to your repository settings:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## API Endpoints

- `GET /`: Returns a welcome message.
- `GET /health`: Returns the health status of the application.

## License

MIT
