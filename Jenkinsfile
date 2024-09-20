pipeline {
    agent {
	docker {
            image 'node:7.4'
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

