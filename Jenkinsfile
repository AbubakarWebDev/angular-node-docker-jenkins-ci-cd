pipeline {
    agent any

    stages {
        stage('SCM checkout') {
            steps {
                echo 'Code Pulling....'
                // Checkout from your SCM(Source Control Management)
                // For eg: Git Checkout
            }
        }
        stage('Build') {
            steps {
                echo 'Building....'
                // Compile code
                // Install dependencies
                // Perform Unit Test, Integration Test
            }
        }
        stage('Test') {
            steps {
                echo 'Testing....'
                // Resolve test server dependencies
                // Perform UAT
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                // Deploy code to prod server
                // Solve dependency issues
            }
        }
    }
}