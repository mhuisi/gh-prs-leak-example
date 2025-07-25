// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { window, workspace } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		window.showInformationMessage(
			workspace.textDocuments.map((d) => d.uri.toString()).join(' ')
		);
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(
		workspace.onDidCloseTextDocument((doc) =>
			window.showInformationMessage(`closed: ${doc.uri.toString()}`)
		)
	);
}
