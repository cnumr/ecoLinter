const { createTestRule } = require('./rule-tester');

const { ruleFilePath, testRule } = createTestRule('avoid-animation');
const { messages, ruleName } = require(ruleFilePath);

testRule({
  ruleName,
  config: [true],
  accept: [
    {
      code: `
        @media (prefers-reduced-motion : no-preference ) {
          .animation {
            animation: fadeIn 4s ease;
          }
        }
      `,
      description: 'use media animation',
    },
  ],
  reject: [
    {
      code: '.box { will-change: transform, opacity; }',
      description: 'use will-change instead of animation',
      message: messages.expected(),
      line: 1,
      column: 8,
      endLine: 1,
      endColumn: 19,
    },
  ],
});
