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

        return (
            <>
                {data.data.map((item, index) => (
                    <div key={index}>
                        {item.u_title + item.u_firstname + ' ' + item.u_lastname}
                    </div>
                ))}
            </>
        );
    } catch (error) {
        console.error(error.message);
        return <div>Error fetching blogs</div>;
    }
}
