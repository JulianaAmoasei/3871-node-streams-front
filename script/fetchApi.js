const BASE_URL = "https://cdn.jsdelivr.net/gh/JulianaAmoasei/3871-node-streams-front/backend/videos.json"

async function getResources() {
  try {
    const busca = await fetch(`${BASE_URL}`);
    return busca.json();
  } catch(e) {
    console.error('erro', e);
  }
}

export default getResources;
