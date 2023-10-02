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

export interface QueryResultItem {
    id: string;
    format: string;
    additionalAttributes: string;
    documentId: string;
    documentTitle: string;
    documentExcerpt: string;
    documentURI: string;
    documentAttributes: string;
    scoreAttributes: string;
}

export interface KendraObjects extends Array<KendraObject> {}
