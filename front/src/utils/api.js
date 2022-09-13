import _ from "lodash";
import axios from "axios";

class APIFactory {
  constructor(base_api_url, prefix) {
    console.log("here");
    this.base_api_url = base_api_url;
    this.prefix = prefix;
    this.getAxiosInstance();
  }

  getAxiosInstance(extraParams = {}) {
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
  }

  handleResponse({ status, data, message }) {
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
  }

  async getRoute(url, extraParams = {}) {
    const api = this.getAxiosInstance(autenticatedRoute);
    try {
      const response = await api.get(url + "/", { params: extraParams });
      return this.handleResponse(response);
    } catch ({ code, message, name, response }) {
      throw this.handleResponse({ data: response.data, message, status: response?.status });
    }
  }

  async patchRoute(url, values) {
    const api = this.getAxiosInstance(autenticatedRoute);

    try {
      const response = await api.patch(url + "/", values);
      return this.handleResponse(response);
    } catch ({ code, message, name, response }) {
      throw this.handleResponse({ data: response.data, message, status: response?.status });
    }
  }

  async postRoute(url, values) {
    const api = this.getAxiosInstance(autenticatedRoute);

    try {
      const response = await api.post(url + "/", values);
      return this.handleResponse(response);
    } catch ({ code, message, name, response }) {
      throw this.handleResponse({ data: response.data, message, status: response?.status });
    }
  }

  async deleteRoute(url, extraParams = {}) {
    const api = this.getAxiosInstance(autenticatedRoute);

    try {
      const response = await api.delete(url + "/", values);
      return this.handleResponse(response);
    } catch ({ code, message, name, response }) {
      throw this.handleResponse({ data: response.data, message, status: response?.status });
    }
  }
}

export default APIFactory;
