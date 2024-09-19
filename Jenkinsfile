pipeline {
    agent any
    tools {
        nodejs "NodeJS 16" // Name you set in Global Tool Configuration
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}

