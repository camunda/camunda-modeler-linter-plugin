# Custom Linter Rules Example Plugin

[![Compatible with Camunda Modeler version 3.3](https://img.shields.io/badge/Camunda%20Modeler-3.3+-blue.svg)](https://github.com/camunda/camunda-modeler)

This plug-in allows you to provide your custom lint rules to the [Camunda Modeler Linter Plug-in](https://github.com/bpmn-io/camunda-modeler-linter-plugin).


## Configuring Rules

Use the local [`.bpmnlintrc` file](.bpmnlintrc) to configure active lint rules.

Checkout the [bpmnlint documentation](https://github.com/bpmn-io/bpmnlint#configuration) for more information regarding this file.


## Creating Rules

This project ships with a [bpmnlint extension](./bpmnlint-plugin-custom) with the `custom` namespace.

Add or edit rules in the [extension's `rules` directory](./bpmnlint-plugin-custom/rules).


## Bundling

Setup the project:

```sh
npm install
```

Build the plug-in:

```sh
npm run all
```

Continuously rebuild in development mode:

```sh
npm run dev
```

## Before you Publish

* [ ] Clearly state which Camunda Modeler version your plug-in is compatible with
* [ ] Give your plug-in a [unique name](./index.js)


## Additional Resources

* [Linter Plug-in](https://github.com/camunda/camunda-modeler-linter-plugin)
* [bpmnlint](https://github.com/bpmn-io/bpmnlint)


## Licence

MIT