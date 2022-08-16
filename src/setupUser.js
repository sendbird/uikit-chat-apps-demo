import SendbirdChat from '@sendbird/chat'
import {
    GroupChannelHandler,
    GroupChannelModule,
} from '@sendbird/chat/groupChannel';
import { v4 as uuidv4 } from 'uuid';

const sb = SendbirdChat.init({
    appId: "76AE2940-073F-41F6-8C14-0B3C60BABB83",
    localCacheEnabled: false,
    modules: [new GroupChannelModule()]
});
class Sendbird {
    async setUp() {
        const userIdStorage = localStorage.getItem('sb-user-id');
        if (userIdStorage) {
            const user = await sb.connect(userIdStorage);
            return user;
        } else {
            const userId = uuidv4();
            const user = await sb.connect(userId);

            const groupChannelParams = {};
            groupChannelParams.addUserIds = [user.userId];
            groupChannelParams.name = "Promotion";
            groupChannelParams.isDistinct = false;
            groupChannelParams.operatorUserIds = [user.userId];
            const promotionsChannel = await sb.groupChannel.createChannel(groupChannelParams);

            localStorage.setItem('sb-user-id', user.userId);
            return [user, promotionsChannel];

        }
    }
    async reset() {
        localStorage.deleteItem('sb-user-id')
        await this.setUp();
    }
}

export default Sendbird;