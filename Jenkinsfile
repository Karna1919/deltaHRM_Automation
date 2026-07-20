pipeline {

    agent any

    parameters {
        choice(
            name: 'Scripts',
            choices: ['smokeTest', 'regressionTest'],
            description: 'Select Test Suite'
        )
    }

    environment {
        LOGIN = credentials('admin_credentials')
        BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    }

    tools {
        nodejs 'NodeJS-22'
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
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat """
                set User_Name=%LOGIN_USR%
                set Password=%LOGIN_PSW%
                set BASE_URL=%BASE_URL%
                 npm run ${params.Scripts}
                """
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}