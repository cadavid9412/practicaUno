#! /usr/bin/env node
const karate = require('@karatelabs/karate');
karate.exec();
test('should pass a basic test', () => {
    expect(1 + 1).toBe(2);
  });