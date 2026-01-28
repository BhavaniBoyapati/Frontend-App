pipeline {
  agent any
  environment {
    S3_BUCKET = "frontend-s3-tf-example"
    AWS_REGION = "us-east-1"
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
          cd frontend
          npm install
          npm run build
        '''
      }
    }
    stage('Upload to S3') {
      steps {
        sh 'aws s3 sync frontend/build s3://$S3_BUCKET --region $AWS_REGION --delete'
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
