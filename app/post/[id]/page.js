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
    // Здесь мы определяем статические параметры для генерации страниц постов
    const postIds = ['1', '2', '3']; // Замените на реальные ID постов, которые вы хотите использовать

    return postIds.map(id => ({
        id: id, // Используем то же имя параметра, что и в маршруте
    }));
}

export default Post;
