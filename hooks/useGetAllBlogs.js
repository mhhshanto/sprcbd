

 async function useGetAllBlogs(limit) {
    const result = await fetch(`https://sprcbd-backend.vercel.app/all-blogs?limit=${limit}`, {
         next:{
          revalidate: 10 ,
         }
    });
    return result.json()

}

export default useGetAllBlogs