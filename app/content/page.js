async function getBlogs() {
    try {
        const response = await fetch('http://localhost:3309/api/users');
        return response.json();
    } catch (error) {
        throw new Error('Cannot fetch blogs');
    }
}

export default async function Page() {
    try {
        const data = await getBlogs();
        console.log(data);
        return (
            <>
                {data.map((item, index) => (
                    <div key={index}>
                        {item.u_title}
                    </div>
                ))}
            </>
        );
    } catch (error) {
        console.error(error.message);
        return <div>Error fetching blogs</div>;
    }
}
