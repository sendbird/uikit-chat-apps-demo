### Install modifed version of UIkit
For this demo to work we needs to replace the uikit code in node_modules/@sendbird/uikit-react with the built code from this branch https://github.com/sendbird/sendbird-uikit-react/tree/uikit-apps. There are two teps to this process.

##### 1. Build UIKit
Pull down UIKit and switch to the branch uikit-apps
There is an issue with the markdown rendering library that means an error is currently thrown when runinng in the browser.

The fix is to modify the problem dependacy in the node_modules of uikit. Do this by editing this file sendbird-uikit-react/node_modules/react-markdown/node_modules/vfile/lib/index.js to remove the dependacy on the miniproc.js file. 

If you comment out the line 
```import {proc} from './minproc.js'```

and add in the line 

```const proc = { cwd: () => { } }```
 
That will fix the issue.

Warning that if this dependancy changes this exect fix may not work.

##### 2. Install local UIKit
This can be easily done by running the install-local-uikit.sh script in the repo. Must be ran from root of the project like so ```./scripts/install-local-uikit.sh```

Remember to update UIKIT_LOCATION to the location of the uikit repo on your machine.



