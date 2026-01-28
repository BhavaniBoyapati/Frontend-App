pipeline {
    agent any

    environment {
        S3_BUCKET = "frontend-s3-tf-example"
        AWS_REGION = "us-east-1"
    }

    stages {
        stage('Checkout') {
            steps {
                // Public GitHub repo, no credentials needed
                git branch: 'main',
                    url: 'https://github.com/BhavaniBoyapati/Frontend-App.git'
            }
        }

        stage('Build') {
            steps {
                sh '''
                    # Install dependencies
                    npm install

                    # Build: copy public folder to build
                    mkdir -p build
                    cp -r public/* build/
                '''
            }
        }

        stage('Upload to S3') {
            steps {
                // Use AWS credentials securely
                withAWS(credentials: 'aws-jenkins', region: "${AWS_REGION}") {
                    sh '''
                        # Sync build folder to S3 bucket
                        aws s3 sync build/ s3://$S3_BUCKET --delete
                    '''
                }
            }
        }

        stage('Invalidate CloudFront') {
            steps {
                withAWS(credentials: 'aws-jenkins', region: "${AWS_REGION}") {
                    sh '''
                        aws cloudfront create-invalidation \
                        --distribution-id E3MOUHKUZD1N7D \
                        --paths "/*"
                    '''
                }
            }
        }
    }
}
