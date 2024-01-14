export const fetchProducts = async () => {
  let data = [];
  try {
    const response = await fetch(
      'https://kavehome.com/nfeeds/es/es/templatebuilder/20231221'
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const res = await response.json();
    if (res.results && Array.isArray(res.results)) {
      data = res.results;
    } else {
      throw new Error('Error: results field is missing or not an array');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return data;
};
