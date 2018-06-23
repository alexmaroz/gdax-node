pipeline {
  agent any
  stages {
    stage('clone') {
      steps {
        git(url: 'https://github.com/alexmaroz/gdax-node.git', branch: 'master')
        tool 'node 10.5.0'
      }
    }
    stage('build') {
      steps {
        sh 'npm i'
      }
    }
  }
}