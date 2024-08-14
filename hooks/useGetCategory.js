

async function useGetCategory() {
    const result = await fetch('https://sprcbd-backend.vercel.app/all-category')
    return result.json();
}

export default useGetCategory