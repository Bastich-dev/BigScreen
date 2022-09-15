import axios from "axios";

console.log("API Up !");

export default {
  getAxiosInstance: (extraParams = {}) => {
    let reqHeaders = {
      ...extraParams,
    };

    if (autenticatedRoute === true) {
      // const authToken = LocalStorage.getItem('authToken')
      const authToken = "" || "";
      reqHeaders.Authorization = `JWT ${authToken}`;
    }

    return axios.create({
      baseURL: this.base_api_url,
      headers: reqHeaders,
    });
  },

  handleResponse: ({ status, data, message }) => {
    let errorMessage = "";
    switch (status) {
      case 200:
        return data;
      case 400:
        errorMessage = `Erreur 400 --- Vérifiez les paramètres/données envoyés.`;
        return { data, results: [], status, message: errorMessage, APImessage: message };
      case 404:
        errorMessage = `Erreur 404 --- Cette route n'existe pas.`;
        return { data, status, message: errorMessage, APImessage: message };
      case 500:
        errorMessage = `Erreur 500 --- Problème Serveur API.`;
        return { data, status, message: errorMessage, APImessage: message };
      case 0:
        errorMessage = `Erreur 0 --- Problème de connexion / Impossible d'appeler l'api.`;
        return { data, status, message: errorMessage, APImessage: message };
      default:
        errorMessage = `Erreur inconnue --- code status non pris en charge, ajoutez l'exeption.`;
        return { data, status, message: errorMessage, APImessage: message };
    }
  },

  getRoute: async (url, extraParams = {}) => {
    const api = this.getAxiosInstance(autenticatedRoute);
    try {
      const response = await api.get(url + "/", { params: extraParams });
      return this.handleResponse(response);
    } catch ({ code, message, name, response }) {
      throw this.handleResponse({ data: response.data, message, status: response?.status });
    }
  },

  patchRoute: async (url, values) => {
    const api = this.getAxiosInstance(autenticatedRoute);

    try {
      const response = await api.patch(url + "/", values);
      return this.handleResponse(response);
    } catch ({ code, message, name, response }) {
      throw this.handleResponse({ data: response.data, message, status: response?.status });
    }
  },

  postRoute: async (url, values) => {
    const api = this.getAxiosInstance(autenticatedRoute);

    try {
      const response = await api.post(url + "/", values);
      return this.handleResponse(response);
    } catch ({ code, message, name, response }) {
      throw this.handleResponse({ data: response.data, message, status: response?.status });
    }
  },

  deleteRoute: async (url, extraParams = {}) => {
    const api = this.getAxiosInstance(autenticatedRoute);

    try {
      const response = await api.delete(url + "/", values);
      return this.handleResponse(response);
    } catch ({ code, message, name, response }) {
      throw this.handleResponse({ data: response.data, message, status: response?.status });
    }
  },
};
