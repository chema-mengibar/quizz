/*
  https://www.npmjs.com/package/plop
  https://plopjs.com/documentation/

*/

module.exports = function (plop) {

  plop.setPartial('myName', '{{camelCase name}}');
  plop.setPartial('my-name', '{{dashCase name}}');
  plop.setPartial('MyName', '{{pascalCase name}}');

  plop.setHelper('rename', function (text) {
    return text.toUpperCase();
  });
  plop.setGenerator('component', {
    description: 'basic component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name (dash-case)'
      },
      {
        type: 'list',
        name: 'type',
        message: 'component type',
        choices: [
          { name: 'sandbox', value: 'sandbox' },
          { name: 'layout', value: 'layout' },
          { name: 'ui', value: 'ui' },
          { name: 'visual', value: 'visual' },
          { name: 'frames', value: 'frames' },
          { name: 'games', value: 'games' }
        
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}/{{dashCase name}}/{{dashCase name}}.index.tsx',
        templateFile: 'plop-templates/component-base/index.tsx'
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{dashCase name}}/{{dashCase name}}.mocks.ts',
        templateFile: 'plop-templates/component-base/mocks.ts'
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{dashCase name}}/{{dashCase name}}.stories.tsx',
        templateFile: 'plop-templates/component-base/stories.tsx'
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{dashCase name}}/{{dashCase name}}.styles.ts',
        templateFile: 'plop-templates/component-base/styles.ts'
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{dashCase name}}/{{dashCase name}}.types.ts',
        templateFile: 'plop-templates/component-base/types.ts'
      }
    ],
  });
};
