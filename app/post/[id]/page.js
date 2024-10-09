import Details from '@/app/components/Details.js';

export async function generateMetadata({ params }) {
    const post = await fetchPostById(params.id);
    return {
        title: post.title,
        description: post.body,
    };
}

async function fetchPostById(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const result = await response.json();
    return result;
}

const Post = async ({ params: { id } }) => {
    const post = await fetchPostById(id);

    return (
        <div className="post">
            <Details post={post} />
        </div>
    );
};

export async function generateStaticParams() {
    
    const postIds = ['1', '2', '3']; 

    return postIds.map(id => ({
        id: id, 
    }));
}

export default Post;
