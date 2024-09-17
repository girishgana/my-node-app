pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                script {
                    // Replace with your actual GitHub repository
                    git branch: 'main', url: 'https://github.com/girishgana/my-node-app.git'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Building Docker Image...'
                    docker.build('my-node-app')
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    echo 'Pushing Docker Image...'
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image('my-node-app').push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying to Kubernetes...'
                    sh 'kubectl apply -f k8s/deployment.yaml'
                }
            }
        }
    }

    post {
        failure {
            echo 'Build failed! Notifying...'
            // Add any notification steps
        }
    }
}
