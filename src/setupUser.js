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
        // const userId = localStorage.getItem('sb-user-id');
        if (false) {
            // const user = await this.sb.connect(userId);
            // const promotionsChannel = await this.sb.groupChannel.getChannel(`Promotion-${userId}`);
            // const conciergeChannel = await this.sb.groupChannel.getChannel(`Concierge-${userId}`);
            // const supportChannel = await this.sb.groupChannel.getChannel(`Support-${userId}`);
            // const trackingChannel = await this.sb.groupChannel.getChannel(`Tracking-${userId}`);
            // const marketplaceChannel = await this.sb.groupChannel.getChannel(`Marketplace-${userId}`);
            // const calendarChannel = await this.sb.groupChannel.getChannel(`Calendar-${userId}`);
            // const movieChannel = await this.sb.groupChannel.getChannel(`Movie-${userId}`);
            // const purchaseChannel = await this.sb.groupChannel.getChannel(`Purchase-${userId}`);
            // const giphyChannel = await this.sb.groupChannel.getChannel(`Giphy-${userId}`);

            // return [user, promotionsChannel, conciergeChannel, supportChannel, trackingChannel, marketplaceChannel, calendarChannel, movieChannel, purchaseChannel, giphyChannel];
        } else {
            const newUserId = uuidv4();
            const user = await this.sb.connect(newUserId);

            const promotionsChannel = await this.createChannel("Promotion", newUserId, user);
            const conciergeChannel = await this.createChannel("Concierge", newUserId, user);
            const supportChannel = await this.createChannel("Support", newUserId, user);
            const trackingChannel = await this.createChannel("Tracking", newUserId, user);
            const marketplaceChannel = await this.createChannel("Marketplace", newUserId, user);
            const calendarChannel = await this.createChannel("Calendar", newUserId, user);
            const movieChannel = await this.createChannel("Movie", newUserId, user);
            const purchaseChannel = await this.createChannel("Purchase", newUserId, user);
            const giphyChannel = await this.createChannel("Giphy", newUserId, user);

            // localStorage.setItem('sb-user-id', user.userId);

            return [user, promotionsChannel, conciergeChannel, supportChannel, trackingChannel, marketplaceChannel, calendarChannel, movieChannel, purchaseChannel, giphyChannel];

        }
    }

    async createChannel(name, newUserId, user) {
        const groupChannelParams = {};
        groupChannelParams.channelUrl = `${name}-${newUserId}`;
        groupChannelParams.addUserIds = [user.userId];
        groupChannelParams.name = name;
        groupChannelParams.isDistinct = false;
        groupChannelParams.operatorUserIds = [user.userId];

        const promotionsChannel = await this.sb.groupChannel.createChannel(groupChannelParams);
        return promotionsChannel;
    }
    reset() {
        localStorage.removeItem('sb-user-id');
    }
}

export default Sendbird;