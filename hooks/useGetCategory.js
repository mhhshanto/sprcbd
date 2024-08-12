

async function useGetCategory() {
    const result = await fetch('https://sprcbd-blue.vercel.app/all-category')
    return result.json();
}

export default useGetCategory