import {window} from 'vscode'

export function cookiecutter(url: string, root: string): void {
    const terminal = window.createTerminal({name: 'Cookiecutter terminal', cwd: root, hideFromUser: false});
    terminal.show(true);
    terminal.sendText('python -m cookiecutter ' + url);
}