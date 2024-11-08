import { useState, useEffect } from 'react';
import loadFeed from '../src/services/loadFeed';
import useEffectOnLaunch from './hooks/useEffectOnLaunch';
import Posts from '../src/components/Posts';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [feed, setFeed] = useState([]);

    useEffectOnLaunch(() => {
        loadFeed().then((data) => setFeed(data));
    }, []);

    if (feed.length > 0) {
        for (const post of feed) {
            console.log(post.post.record.text);
            if (post.post.embed?.images) {
                console.log(post.post.embed.images);
            }
        }
    }

    return (
        <div>
            <Posts feed={feed} />
        </div>
    );
}

export default App;
