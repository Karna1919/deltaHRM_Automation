pipeline {
 
    agent any

    environment {
        Login = credentials('admin_credentials')
    }
 
    tools {
        nodejs 'Nodejs'
    }
 
    stages {
 
        stage('Clone Code') {
 
            steps {
 
                git branch: 'master',
                url: 'https://github.com/Karna1919/deltaHRM_Automation.git'
            }
        }
 
        stage('Install Dependencies') {
 
            steps {
 
                sh 'npm install'
            }
        }
 
        stage('Install Playwright Browsers') {
 
            steps {
 
                sh 'npx playwright install'
            }
        }
 
        stage('Run Playwright Tests') {
 
            steps {

              
               
               // sh 'npx playwright test'
               sh "npm run ${params.Scripts}"
            }
        }
    }
 
    post {
 
        always {
 
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'tests',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}