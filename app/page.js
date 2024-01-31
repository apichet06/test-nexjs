async function getBlogs() {
  try {
    const response = await fetch('http://localhost:3309/api/products/1/20');
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
            {item.pro_id + ' ' + item.pro_name + ' ' + item.pro_description}
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error(error.message);
    return <div>Error fetching blogs</div>;
  }
}
