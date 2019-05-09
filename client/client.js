import {
    registerBpmnJSPlugin,
    registerClientPlugin
} from 'camunda-modeler-plugin-helpers';

import lintingModule from 'bpmn-js-bpmnlint';

import config from '../.bpmnlintrc';

registerBpmnJSPlugin(lintingModule);

registerClientPlugin({ bpmnlint: config }, 'bpmn.modeler.linting')
