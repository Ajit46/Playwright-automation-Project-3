// @ts-check
import { devices } from '@playwright/test';


const config = ({
  testDir: './tests',
  
  //for each test time out
  timeout: 40 * 1000,
  
  //assertion timeout
  expect: {
    timeout: 10000
  },
  
  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure'
  },
  
});

module.exports = config

