const { createTestRule } = require('./rule-tester');

const { ruleFilePath, testRule } = createTestRule('no-custom-font');
const { ruleName } = require(ruleFilePath);

testRule({
  ruleName,
  accept: [
    {
      code: 'h4 { font-family: sans-serif }',
      description: 'use sans-serif',
    },
    {
      code: 'h4 { font-family: Arial, sans-serif }',
      description: 'use Arial and sans-serif',
    },
  ],
  // TODO fix this
  // reject: [
  //   {
  //     code: 'h4 { font-family: Code Pro; }',
  //     description: 'use Code Pro custom font family',
  //     message: messages.expected(),
  //     line: 1,
  //     column: 6,
  //     endLine: 1,
  //     endColumn: 8,
  //   },
  //   {
  //     code: '.MyClass,\n.MyOtherClass {}',
  //     fixed: '.my-class,\n.my-other-class {}',
  //     description: 'two pascal class selectors in a selector list',
  //     warnings: [
  //       {
  //         message: messages.expected(),
  //         line: 1,
  //         column: 1,
  //         endLine: 1,
  //         endColumn: 8,
  //       },
  //       {
  //         message: messages.expected(),
  //         line: 2,
  //         column: 1,
  //         endLine: 2,
  //         endColumn: 13,
  //       },
  //     ],
  //   },
  // ],
});
