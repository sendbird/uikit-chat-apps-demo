#!/usr/bin/env zx
import { $ } from 'zx';
import { steptacular } from 'steptacular';

steptacular([
    {
        name: 'Test app is working locally',
        run: async ({ utils: { prompt }, next }) => {
            console.log('Make sure to pull in latest code from main as that is what get deployed to live.')
            console.log('Pull down the latest code using git pull origin main');
            console.log('Make sure the app urls all going to chatsample.com and not localhost');
            console.log('Do some basic regression testing in the browser. make sure the app looks correct and core functionality still works as expected.')
            prompt('Press enter to continue');
            next();
        }
    },
    {
        name: 'Push code to Github',
        run: async ({ utils: { prompt }, next }) => {
            console.log('commit any code and push to the main branch');
            prompt('Press enter to continue');
            next();
        }
    },
    {
        name: 'Pull down latest code onto production server',
        run: async ({ utils: { prompt }, next }) => {
            console.log('You will need access to the chatsample server. Chris Chabot can give access.')
            await $`ssh dev "cd /home/ubuntu/uikit-chat-apps-demo && git pull origin main"`;

            prompt('Press enter to continue');
            next();
        }
    },
    {
        name: 'Install latest uikit',
        run: async ({ utils: { prompt }, next }) => {
            console.log('Getting latest version of the markdown enabled UIKit and installing into this app.');
            prompt('First ensure any updtes you need in UIKit have been pushed to the UIKit uikit-apps branch');

            await $`ssh dev "cd /home/ubuntu/uikit-chat-apps-demo && ./scripts/install-local-uikit.sh  /home/ubuntu/sendbird-uikit-react"`;

            prompt('Press enter to continue');
            next();
        }
    },
    {
        name: 'Build latest client on production server',
        run: async ({ utils: { prompt }, next }) => {

            await $`ssh dev "cd /home/ubuntu/uikit-chat-apps-demo && npm run build"`;
            console.log('If you want to check the built code before pushing live it is available in /build');
            prompt('Press enter to continue');
            next();
        }
    }, {
        name: 'Set latest build to be live to users',
        run: async ({ utils: { prompt }, next }) => {
            console.log('No work to do this will be automatic');

            await $`ssh dev "cd /home/ubuntu/uikit-chat-apps-demo && cp -r build/ /var/www/html/chat-apps-demo/"`;

            prompt('Press enter to continue');
            next();
        }
    }, {
        name: 'Test on live',
        run: async ({ utils: { prompt }, next }) => {
            console.log('Its worth a quick test of https://chatsamples.com/chat-app-samples/ to ensure ether looks correct');

            prompt('All done! Press enter to finish');
            next();
        }
    }
], () => {
    console.log('error');
});
