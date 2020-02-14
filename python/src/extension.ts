// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('Python IDE Activated !!!');

	// vscode.languages.registerHoverProvider('python', {
	// 	provideHover: (document, position, token) => {
	// 		return Promise.resolve({
	// 			contents: ['INCREMENTAL = 2'],
	// 		});
	// 	},
	// });

	vscode.languages.registerDefinitionProvider('python', {
		provideDefinition: (document, position, token) => {
			return Promise.resolve({
				uri: vscode.Uri.parse(`file:${path.join(__dirname, '../src/test')}/lsp.py`),
				range: new vscode.Range(
					new vscode.Position(74, 6),
					new vscode.Position(75, 0),
				),
			});
		}
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
