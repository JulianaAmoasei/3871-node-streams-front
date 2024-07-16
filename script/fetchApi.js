const BASE_URL = "http://localhost:3000"

async function getResources() {
  try {
    const busca = await fetch(`${BASE_URL}/videos`);
    return busca.json();
  } catch(e) {
    console.error('erro', e);
  }
}

export default getResources;
