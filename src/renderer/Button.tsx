import React from 'react';
import childProcess from 'child_process';

function clicked() {
  childProcess.exec('ls', (err, stdout, stderr) => {
    console.log(`ls result: ${stdout}`);
  });
}

export const Button = () => {
  return (
    <button className="Button" onClick={clicked}>
      Click me!
    </button>
  );
};
