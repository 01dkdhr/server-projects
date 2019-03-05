const RequestService = {
  post(url, form) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, form)
        .then(response => {
          resolve(response.data.result);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default RequestService;