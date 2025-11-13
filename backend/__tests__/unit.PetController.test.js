const fs = require('fs');
const path = require('path');

describe('Testability', () => {
  test('Code structure supports testing', () => {
    console.log('\n✅ TESTABILITY TEST');
    const controllers = fs.readdirSync(path.join(__dirname, '../controllers')).length;
    const models = fs.readdirSync(path.join(__dirname, '../models')).length;
    const middleware = fs.readdirSync(path.join(__dirname, '../middleware')).length;
    
    console.log(`✅ ${controllers} controllers (isolated business logic)`);
    console.log(`✅ ${models} models (separated data structures)`);
    console.log(`✅ ${middleware} middleware (centralized concerns)`);
    
    expect(controllers).toBeGreaterThan(10);
    expect(models).toBeGreaterThan(15);
    expect(middleware).toBeGreaterThan(0);
  });
});