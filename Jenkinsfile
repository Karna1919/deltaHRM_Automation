pipeline {
 
    agent any

    environment {
        LOGIN = credentials('admin_credentials')
        BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    }
 
    tools {
           nodejs 'NodeJS18'
    }
 
   parameters {
                choice(
                    name: 'Scripts',
                    choices: ['smokeTest', 'regressionTest'],
                    description: 'Select Test Suite'
                )
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
set URL=%BASE_URL%
set LOGIN=%LOGIN%
set LOGIN_PSW=%LOGIN_PSW%
npm run ${params.Scripts}
"""

            echo "Running Suite: ${params.Scripts}"
            echo "URL: \$URL"

          bat  "npm run ${params.Scripts}"
     
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
