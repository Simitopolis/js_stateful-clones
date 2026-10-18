'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateHistory = [];
  let currentState = state;

  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    currentState = { ...currentState };

    if (type === 'addProperties') {
      Object.assign(currentState, extraData);
    } else if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete currentState[key];
      }
    } else if (type === 'clear') {
      currentState = {};
    }

    stateHistory.push(currentState);
  }

  return stateHistory;
}
