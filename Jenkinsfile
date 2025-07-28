pipeline {
    agent any

    environment {
        IMAGE_NAME = "doctor-appv3"
        CONTAINER_NAME = "container-appv3"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ibrahim18mib/DoctorAppointment.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'npm run build --prod'
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

        // Uncomment below if you prefer Docker Compose instead of manual Docker build/run
        /*
        stage('Run with Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }
        */
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
