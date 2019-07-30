import {
  registerBpmnJSPlugin,
  registerClientPlugin
} from 'camunda-modeler-plugin-helpers';

import lintingModule from 'bpmn-js-bpmnlint';

import defaultConfig from '../.bpmnlintrc';

registerClientPlugin(config => {

  const {
    additionalModules,
    ...rest
  } = config;

  return {
    ...rest,
    additionalModules: [].concat(additionalModules || [], lintingModule),
    linting: {
      bpmnlint: defaultConfig
    }
  }
}, 'bpmn.modeler.configure');