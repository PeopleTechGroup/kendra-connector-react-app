import axios from "axios";
import {
  CommonFields,
  KendraObject,
  KendraObjects,
  CreateKendraObject,
  QueryResultItem,
} from "./api";

interface KendraService {
  getKendraIndices: (user: string) => Promise<KendraObjects>;
  createKendraIndex: (
    createKendraObject: CreateKendraObject,
  ) => Promise<KendraObject>;
  getQueryResults: (query: string, indexId:string)=> Promise<QueryResultItem>;
}

const getKendraService: Function = (): KendraService => {
  const getKendraIndices = (): Promise<KendraObjects> => {
    return axios.get(`http://localhost:8080/manage-index/list`);
  };

const createKendraIndex = (
    createKendraObject: CreateKendraObject,
  ): Promise<KendraObject> => {
    return axios.post(
      `http://localhost:8080/manage-index/create`,
      createKendraObject,
    );
};

const getQueryResults = (query: string, indexId: string): Promise<QueryResultItem> => {
    return axios.get(`http://localhost:8080/manage-index/search/${query}/${indexId}`)
}

return {
    getKendraIndices,
    createKendraIndex,
    getQueryResults
  };
};

const kendraService: KendraService = getKendraService();

export default kendraService;
