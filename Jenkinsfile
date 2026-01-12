pipeline {
  agent any

  environment {
    S3_BUCKET = "my-frontend-devops-app"
    AWS_REGION = "ap-south-1"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/your-username/aws-devops-microservices-project.git'
      }
    }

    stage('Build') {
      steps {
        sh '''
          cd frontend
          npm install
          npm run build
        '''
      }
    }

    stage('Upload to S3') {
      steps {
        sh '''
          aws s3 sync frontend/build s3://$S3_BUCKET --delete
        '''
      }
    }

    stage('Invalidate CloudFront') {
      steps {
        sh '''
          aws cloudfront create-invalidation \
          --distribution-id E123456789 \
          --paths "/*"
        '''
      }
    }
  }
}
