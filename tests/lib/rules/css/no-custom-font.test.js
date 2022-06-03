const { createTestRule } = require('./rule-tester');

const { ruleFilePath, testRule } = createTestRule('no-custom-font');
const { messages, ruleName } = require(ruleFilePath);

testRule({
  ruleName,
  config: [true],
  accept: [
    {
      code: 'h4 { font-family: sans-serif }',
      description: 'use sans-serif',
    },
    {
      code: 'h4 { font-family: monospace, sans-serif }',
      description: 'use monospace or sans-serif',
    },
  ],
  reject: [
    {
      code: 'h4 { font-family: Code Pro; }',
      description: 'use Code Pro custom font family',
      message: messages.expected('Code Pro'),
      line: 1,
      column: 19,
      endLine: 1,
      endColumn: 27,
    },
    {
      code: 'h4 { font-family: Arial, sans-serif; }',
      description: 'use Arial custom font family and sans-serif',
      message: messages.expected('Arial'),
      line: 1,
      column: 19,
      endLine: 1,
      endColumn: 24,
    },
  ],
});
