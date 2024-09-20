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
                image: node:7.4
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
		withNPM(npmrcConfig:'my-custom-npmrc') {
            		echo "Performing npm build..."
            		sh 'npm install'
			sh 'npm run build'
		}
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
		withNPM(npmrcConfig:'my-custom-npmrc') {
            		echo "Performing npm test..."
            		sh 'npm test'
		}
            }
        }
    }
}

