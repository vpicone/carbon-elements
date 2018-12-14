/**
 * Copyright IBM Corp. 2015, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const build = require('../out/build');

build().catch(error => {
  console.error(error); // eslint-disable-line
});
