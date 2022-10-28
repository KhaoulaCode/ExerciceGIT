const model = require( "../scripts/Models/gamblingModel.js")


test('addTries', () => {
    model.addTries();
    expect(model.getValue()).toBe(1);
  });