export default function Posts({ feed }) {
    if (feed.length === 0) return null;

    const postsJSX = feed.map((post) => <div>test</div>);

    return postsJSX;
}
