export function filterBySpecies(data, species) {
  const filteredData = data.filter((element) => {
    return element.species.toLowerCase() === species.toLowerCase();
  });
  return filteredData;
}

export function filterByEpisodeCount(data, filterType) {
  // Obtener el número de episodios de cada personaje
  const episodeCounts = data.map((element) => element.episode.length);

  // Obtener el valor máximo y mínimo de episodios
  const maxCount = Math.max(...episodeCounts);
  const minCount = Math.min(...episodeCounts);

  // Filtrar los personajes según el tipo de filtro
  let filteredData1 = [];
  if (filterType === "most") {
    filteredData1 = data.filter(
      (element) => element.episode.length === maxCount
    );
  } else if (filterType === "least") {
    filteredData1 = data.filter(
      (element) => element.episode.length === minCount
    );
  }
  return filteredData1;
}

export const orderAZ = (data, select) => {
  return data.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase() && select === "A-Z") {
      return -1;
    } else if (select === "Z-A") {
      return b.name.localeCompare(a.name);
    }
  });
};

export function computeStats(data) {
  const locationCount = {};

  data.forEach((item) => {
    const location = item.location.name;

    if (locationCount[location]) {
      locationCount[location]++;
    } else {
      locationCount[location] = 1;
    }
  });
  return locationCount;
}
