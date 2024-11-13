module.exports = {
  rules: {
    "simplify-async-return": {
      meta: {
        type: "suggestion",
        docs: {
          description:
            "Simplify async functions that immediately return a promise",
          category: "Best Practices",
          recommended: true,
        },
        fixable: "code",
        schema: [], // no options
      },
      create(context) {
        return {
          FunctionDeclaration: checkFunction,
          FunctionExpression: checkFunction,
          ArrowFunctionExpression: checkFunction,
        };

        function checkFunction(node) {
          if (node.async && node.body.type === "BlockStatement") {
            const body = node.body.body;
            if (
              body.length === 2 &&
              body[0].type === "VariableDeclaration" &&
              body[0].declarations.length === 1 &&
              body[1].type === "ReturnStatement" &&
              body[1].argument &&
              body[1].argument.type === "Identifier" &&
              body[1].argument.name === body[0].declarations[0].id.name
            ) {
              const variableDeclarator = body[0].declarations[0];
              if (
                variableDeclarator.init &&
                variableDeclarator.init.type === "AwaitExpression"
              ) {
                context.report({
                  node: node,
                  message:
                    "Async function can be simplified to directly return the promise",
                  fix(fixer) {
                    const sourceCode = context.getSourceCode();
                    const awaitExpression = variableDeclarator.init.argument;
                    const newReturnStatement = `{\nreturn ${sourceCode.getText(awaitExpression)}\n`;

                    return [
                      fixer.removeRange([node.body.start, body[1].start]),
                      fixer.replaceText(body[1], newReturnStatement),
                    ];
                  },
                });
              }
            }
          }
        }
      },
    },
  },
};
