pipeline {
    agent any
    environment {
        S3_BUCKET  = "frontend-s3-tf-example"
        AWS_REGION = "us-east-1"
        CLOUDFRONT_DIST_ID = "E3MOUHKUZD1N7D" // replace if different
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Repo already checked out by Jenkins"
            }
        }

        stage('Build') {
            steps {
                sh '''
                  # Build from repo root (no 'frontend' folder)
                  npm install
                  npm run build
                '''
            }
        }

        stage('Upload to S3') {
            steps {
                sh '''
                  # Upload the build folder to S3
                  aws s3 sync build/ s3://$S3_BUCKET/ --region $AWS_REGION --delete
                '''
            }
        }

        stage('Invalidate CloudFront') {
            steps {
                sh '''
                  aws cloudfront create-invalidation \
                    --distribution-id $CLOUDFRONT_DIST_ID \
                    --paths "/*"
                '''
            }
        }
    }

    post {
        success {
            echo '🚀 Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed'
        }
    }
}
