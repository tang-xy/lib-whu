import data from '../data/testData';

export default {
  test: (config) => {
    console.log(`Mock: ${config.url}`);
    return data();
  },
};
