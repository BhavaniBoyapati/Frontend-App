pipeline {
  agent any

  environment {
    S3_BUCKET = "frontend-s3-tf-example"
    AWS_REGION = "us-east-1"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/BhavaniBoyapati/Frontend-App.git'
      }
    }

    stage('Build') {
      steps {
        sh '''
          npm install
          npm run build
        '''
      }
    }

    stage('Upload to S3') {
      steps {
        sh '''
          aws s3 sync build/ s3://$S3_BUCKET --delete
        '''
      }
    }

    stage('Invalidate CloudFront') {
      steps {
        sh '''
          aws cloudfront create-invalidation \
            --distribution-id E3MOUHKUZD1N7D \
            --paths "/*"
        '''
      }
    }
  }
}
