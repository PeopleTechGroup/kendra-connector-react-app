import axios from "axios";
import { CommonFields, KendraObject, CreateKendraObject } from "./api";

interface KendraService {
  getKendraIndices: (user: String) => Promise<KendraObject>;
  createKendraIndex: (
    createKendraObject: CreateKendraObject,
  ) => Promise<KendraObject>;
}

const getKendraService: Function = (): KendraService => {
  const getKendraIndices = (): Promise<KendraObject> => {
    return axios.get(`KendraIndices/list`);
  };

  const createKendraIndex = (
    createKendraObject: CreateKendraObject,
  ): Promise<KendraObject> => {
    return axios.post(
      `http://localhost:8080/manage-index/create`,
      createKendraObject,
    );
  };

  return {
    getKendraIndices,
    createKendraIndex,
  };
};

const kendraService: KendraService = getKendraService();

export default kendraService;
