pipeline {
    agent any

    environment {
        IMAGE_NAME = "doctor-appv3"
        CONTAINER_NAME = "container-appv3"
    }

    stages {

        stage('Verify Environment') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ibrahim18mib/DoctorAppointment.git'
            }
        }

        stage('Install Angular CLI') {
            steps {
                bat 'npm install -g @angular/cli'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci || npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                bat 'npx build --configuration=production'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Docker Container') {
            steps {
                // Stop previous container if running
                bat "docker rm -f ${CONTAINER_NAME} || true"
                bat "docker run -d -p 8081:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        failure {
            echo "❌ Build failed!"
        }
        success {
            echo "✅ Deployment successful!"
        }
    }
}
