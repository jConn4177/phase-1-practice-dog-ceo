const getJSON = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw response.statusText;
    }
    return response.json();
  });
};
