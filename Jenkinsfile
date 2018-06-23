pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        git(url: 'https://github.com/alexmaroz/gdax-node.git', branch: 'master')
      }
    }
    stage('build') {
      steps {
        sh 'npm i'
      }
    }
  }
}