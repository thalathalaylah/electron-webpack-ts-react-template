import React from 'react';

import { Remote } from 'electron';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import path from 'path';

const remote: Remote = window.require('electron').remote;

const testDir = path.join(remote.app.getAppPath(), 'test/');

function createFile() {
  const filename = uuidv4() + '.txt';
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir);
  }

  const filePath = testDir + filename;
  fs.closeSync(fs.openSync(filePath, 'w'));

  console.log('created: ' + filename);
}

export const CreateFileButton = () => {
  return (
    <button className="CreateFileButton" onClick={createFile}>
      Create file
    </button>
  );
};
