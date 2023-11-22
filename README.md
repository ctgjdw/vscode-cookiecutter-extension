# cookiecutter-wrapper

> Please configure the [cookiecutter extension settings](#extension-settings) before use in your `vscode` settings.

## Features

1. Presents a UI for cookiecutter templates in `vscode`
2. Initialise `cookiecutter` templates in your base directory

## Requirements

1. Python installed and accessible in your vscode terminal
1. `cookiecutter` pip package installed

## Extension Settings

This extension contributes the following settings:

* `cookiecutter.baseDir` (str) : The base directory to create/clone the templates into
* `cookiecutter.templates` (object) : `title` key for the Template name and `url` key for the cookiecutter git repo url

## To Build

1. Install `@vscode/vsce` package
> `npm install -g @vscode/vsce`
1. Run `vsce package` to output the `.vsix` extension

## Release Notes
### 1.0.0

Initial release of `vscode-cookiecutter`