const { createTestRule } = require('./rule-tester');

const { ruleFilePath, testRule } = createTestRule('avoid-white-blue-color');
const { messages, ruleName } = require(ruleFilePath);

testRule({
  ruleName,
  config: [true],
  accept: [
    {
      code: 'body { background-color: black }',
      description: 'use black color',
    },
    {
      code: 'body { background-color: dark-blue }',
      description: 'use dark-blue color',
    },
    {
      code: 'body { background-color: red }',
      description: 'use red color',
    },
  ],
  reject: [
    {
      code: 'body { background-color: white }',
      description: 'use white color',
      message: messages.expected('white'),
    },
    {
      code: 'body { background-color: blue }',
      description: 'use blue color',
      message: messages.expected('blue'),
    },
  ],
});
