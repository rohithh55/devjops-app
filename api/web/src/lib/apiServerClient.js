// Simple placeholder API client
// Replace with real backend calls later

const apiServerClient = {
  fetch: async (url, options) => {
    console.log("API call:", url, options);

    // Fake success response
    return {
      ok: true,
      json: async () => ({ message: "Subscribed successfully (placeholder)" })
    };
  }
};

export default apiServerClient;

