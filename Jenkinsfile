pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the code from the Git repository
                git branch: 'main', url: 'https://github.com/girishgana/my-node-app.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Building Docker Image...'
                    // Build the Docker image using the Dockerfile in the repo
                    docker.build('my-node-app')
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    echo 'Pushing Docker Image...'
                    // Tag the Docker image with your DockerHub username
                    sh 'docker tag my-node-app girish895/my-node-app:latest'
            
                    // Push the Docker image to DockerHub using Jenkins credentials
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image('girish895/my-node-app').push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying to Kubernetes...'
                    // Set KUBECONFIG environment variable to specify the path to the kubeconfig file
                    withEnv(['KUBECONFIG=/home/girish/.kube/config']) {
                        // Deploy the application to Kubernetes using the YAML file
                        sh 'kubectl apply -f deployment.yml'
                    }
                }
            }
        }
    }
}
