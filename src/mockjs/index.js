import Mock from 'mockjs';
import testApi from './api/testApi';

Mock.setup({
  timeout: '10-100',
});

// 主页
Mock.mock(/\/test\/value/, 'get', testApi.test);
