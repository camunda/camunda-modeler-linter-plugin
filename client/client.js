import {
  registerClientPlugin
} from 'camunda-modeler-plugin-helpers';

import lintingActiveModule from './linting-active';
import lintingModule from 'bpmn-js-bpmnlint';

import defaultConfig from '../.bpmnlintrc';

registerClientPlugin(config => {
  const lintingActive = isTrue(localStorage.getItem('lintingActive'));

  const {
    additionalModules,
    ...rest
  } = config;

  return {
    ...rest,
    additionalModules: [
      ...(additionalModules || []),
      lintingActiveModule,
      lintingModule
    ],
    linting: {
      bpmnlint: defaultConfig,
      lintingActive
    }
  }
}, 'bpmn.modeler.configure');

// helpers //////////

function isTrue(value) {
  return value === 'true';
}