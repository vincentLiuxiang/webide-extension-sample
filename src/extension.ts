// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.activeHoverProvider', () => {
		vscode.window.showInformationMessage('Active Hover Provider!');
	});

	vscode.languages.registerHoverProvider('*', {
		provideHover: (document, position, token) => {
			return {
				contents: ['This is a test hover!!']
			};
		},
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
