pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'echo "hello world"'
      }
    }

    stage('end') {
      steps {
        build 'pi'
      }
    }

  }
}