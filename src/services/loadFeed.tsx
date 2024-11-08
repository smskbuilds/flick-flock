import { AtpAgent } from '@atproto/api';

export default async function loadFeed() {
    const agent = new AtpAgent({
        service: 'https://bsky.social',
    });
    await agent.login({
        identifier: 'smskbuilds@gmail.com',
        password: import.meta.env.VITE_blueSkyPassword,
    });

    return await agent.app.bsky.feed
        .getFeed(
            {
                feed: 'at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.generator/whats-hot',
                limit: 30,
            },
            {
                headers: {
                    'Accept-Language': 'preferredLanguages',
                },
            }
        )
        .then((response) => {
            return response.data.feed;
        });
}
