import SendbirdChat from '@sendbird/chat'
import {
    GroupChannelHandler,
    GroupChannelModule,
} from '@sendbird/chat/groupChannel';
import { v4 as uuidv4 } from 'uuid';


class Sendbird {
    constructor(appId) {
        this.sb = SendbirdChat.init({
            appId,
            localCacheEnabled: false,
            modules: [new GroupChannelModule()]
        });
    }
    async setUp() {
        const userId = localStorage.getItem('sb-user-id');
        if (userId) {
            const user = await this.sb.connect(userId);
            const promotionsChannel = await this.sb.groupChannel.getChannel(`promotion-${userId}`);

            return [user, promotionsChannel];
        } else {
            const newUserId = uuidv4();
            const user = await this.sb.connect(newUserId);

            const groupChannelParams = {};
            groupChannelParams.channelUrl = `promotion-${newUserId}`;
            groupChannelParams.addUserIds = [user.userId];
            groupChannelParams.name = "Promotion";
            groupChannelParams.isDistinct = false;
            groupChannelParams.operatorUserIds = [user.userId];

            const promotionsChannel = await this.sb.groupChannel.createChannel(groupChannelParams);

            localStorage.setItem('sb-user-id', user.userId);

            return [user, promotionsChannel];

        }
    }
    reset() {
        localStorage.removeItem('sb-user-id');
    }
}

export default Sendbird;