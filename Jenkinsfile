pipeline {
    agent any

    stages {
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
}
