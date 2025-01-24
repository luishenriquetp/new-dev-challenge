const BASE_URL = "https://swapi.dev/api/";

export const fetchResources = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch resources");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar recursos:", error);
    return null;
  }
};

export const fetchResourceDetails = async (resource: string, id: string) => {
  const response = await fetch(`${BASE_URL}${resource}/${id}/`);
  if (!response.ok) throw new Error("Failed to fetch resource details");
  return response.json();
};

export const fetchAdditionalData = async (urls: string[]): Promise<string[]> => {
  const results = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
      const data = await response.json();
      return data.name || data.title || "Unknown";
    })
  );
  return results;
};