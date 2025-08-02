pipeline {
    agent {
        docker {
            image 'node:18'  // Use official Node.js image
            args '-u root'   // Run as root to avoid permission issues
        }
    }

    environment {
        IMAGE_NAME = "doctor-appv3"
        CONTAINER_NAME = "container-appv3"
    }

    stages {

        stage('Verify Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ibrahim18mib/DoctorAppointment.git'
            }
        }

        stage('Install Angular CLI') {
            steps {
                sh 'npm install -g @angular/cli'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'ng build --configuration=production'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Docker Container') {
            steps {
                // Stop previous container if running
                sh "docker rm -f ${CONTAINER_NAME} || true"
                sh "docker run -d -p 8081:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
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
