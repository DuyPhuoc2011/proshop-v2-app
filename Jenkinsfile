pipeline {
    agent {
	kubernetes {
            label 'npm-build'
            defaultContainer 'node'
            yaml """
            apiVersion: v1
            kind: Pod
            spec:
              containers:
              - name: node
                image: node:20.12.1
                command:
                - cat
                tty: true
            """
        }
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

