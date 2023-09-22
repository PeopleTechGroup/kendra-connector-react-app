export interface CommonFields {
  date_created: string;
  date_updated: string;
  last_updated_by: string;
}

export interface KendraObject {
  name: string;
  description: string;
  id: string;
}

export interface CreateKendraObject {
  name: string;
  description: string;
}
