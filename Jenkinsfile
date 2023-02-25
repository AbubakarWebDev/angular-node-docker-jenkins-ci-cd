pipeline {
    agent any

    stages {
        stage('SCM checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                bat '''
                    REM Sets the number of Docker images that we need to keep
                    set /a KEEP_IMAGES=2

                    REM Stop all running containers
                    for /f "tokens=1" %%c in ('docker ps -q') do docker stop %%c

                    REM Remove all containers
                    for /f "tokens=1" %%c in ('docker ps -aq') do docker rm %%c

                    REM Remove all but the last two images
                    for /f "skip=%KEEP_IMAGES% tokens=1" %%i in ('docker image ls -q') do docker image rm -f %%i

                    REM Build the image using dockerfile and name tagged with BUILD_NUMBER for uniqueness
                    docker build -t abubakarwebdev/angular-user-management:%BUILD_NUMBER% .
                '''
            }
        }
        stage('Deploy') {
            steps {
                // Run the container on port 4200 using the above-created image
                bat 'docker run -d -p 4200:80 --name app-container-%BUILD_NUMBER% abubakarwebdev/angular-user-management:%BUILD_NUMBER%' 
            }
        }
    }
}