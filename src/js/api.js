export async function fetchData() {
  try {
    const response = await axios.get(
      "https://voodoo-sandbox.myshopify.com/products.json?limit=12"
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
