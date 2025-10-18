const apiFetch = async (path, method = "GET", body) => {
  try {
    const response = await fetch(
      `https://vercel-api-olive.vercel.app/${path}`,
      // `http://localhost:3000/${path}`,
      {
        method: `${method}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("error fetching data: ", data);
      return data;
    }

    console.log({ response: data });
    return data;
  } catch (error) {
    throw new Error("Error fetching data: ", error);
  }
};

export default apiFetch;
