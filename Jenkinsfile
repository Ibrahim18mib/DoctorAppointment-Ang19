pipeline {
    agent any

    environment {
    IMAGE_NAME = "doctor-appv3"
    CONTAINER_NAME = 'container-appv3'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ibrahim18mib/DoctorAppointment.git'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'npm install'
                sh 'npm run build --prod'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t doctor-appv3 .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                // Stop previous container if running
                sh 'docker rm -f container-appv3 || true'
                sh 'docker run -d -p 8081:80 --name container-appv3 doctor-appv3'
            }
        }

        // stage('Run with Docker Compose') {
        //     steps {
        //         sh 'docker-compose down'
        //         sh 'docker-compose up -d --build'
        //     }
        // }
    }

    post {
        failure {
            echo "Build failed!"
        }
        success {
            echo "Deployment successful!"
        }
    }
}
