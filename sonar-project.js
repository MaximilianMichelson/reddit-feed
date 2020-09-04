'use strict';

const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
    {
        serverUrl: 'http://localhost:9000',
        options: {
            'sonar.sources': '.',
            'sonar.inclusions': '/src**',
            'sonar.typescript.lcov.reportPaths': './coverage/lcov.info',
            'sonar.login': 'admin',
            'sonar.password': 'admin'
        }

    }, () => []
);