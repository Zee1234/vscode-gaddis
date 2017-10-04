let vscode = require('vscode')

module.exports =  {
  activate: function activate(context) {
    const window = vscode.window
    const subs = context.subscriptions;
    // register language config
    vscode.languages.setLanguageConfiguration('gaddis', {
      indentationRules: {
        increaseIndentPattern: /^\s*(While|Do|For|Select|Case|Default|If|Else|Module|Function|Class).*$/,
        decreaseIndentPattern: /^\s*((End|Until|Else|Case)\b)/
      }
    });

    // Register commands
    let removeNums = vscode.commands.registerCommand('gaddis.removeNumbers', () => {
      let n = 1
      function format(i) {
        let temp = toString(i)+'.'
        return temp + ' '.repeat(6-temp.length)
      }
      let editor = window.activeTextEditor
      editor.edit( editBuilder => {
        for (let i = 0; i < editor.document.lineCount; i++) {
          let range = new vscode.Range(i, 0, i, 6)
          editBuilder.delete(range)
        }
      })
    })
    let addNums = vscode.commands.registerCommand('gaddis.addNumbers', () => {
      let n = 1
      function format(i) {
        let temp = i.toString()+'.'
        return temp + ' '.repeat(6-temp.length)
      }
      let editor = window.activeTextEditor
      editor.edit( editBuilder => {
        for (let i = 0; i < editor.document.lineCount; i++) {
          editBuilder.insert(new vscode.Position(i, 0), format(i+1))
        }
      })
    })
    subs.push(addNums)
    subs.push(removeNums)
  }
}