pipeline {
    agent any 
    triggers {
        // This triggers the build on GitHub push events
        githubPush() 
    }
    stages {
        stage('Clone Repository') {
            steps {
                // Clone your GitHub repository
                git 'https://github.com/Ranjit-Singh96/node_ci_cd.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run your tests here (if applicable)
                sh 'npm test'
            }
        }
        stage('Deploy to EC2') {
            steps {
                // Transfer files to EC2 and run the application
                sshPublisher(publishers: [sshPublisherDesc(
                    configName: 'MyEC2',
                    transfers: [sshTransfer(
                        sourceFiles: 'index.js',
                        remoteDirectory: '/home/ubuntu/node_ci_cd',
                        execCommand: 'npm install && node index.js &'
                    )]
                )])
            }
        }
    }
}
