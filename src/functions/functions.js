export async function getCharacterByName(name) {
  try {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${name}&limit=12&apikey=c6d486b43d10c38a246519cdb7ff09d7&hash=48b19b174457d98dafe3e4f27e226729`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
