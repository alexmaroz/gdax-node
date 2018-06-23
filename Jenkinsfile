pipeline {
  agent {
    node {
      label 'starting'
    }

  }
  stages {
    stage('') {
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