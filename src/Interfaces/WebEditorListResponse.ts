export interface WebEditorListResponse {
  content: Project[];
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
  totalPages: number;
  totalElements: number;
  pageRequest: PageRequest;
  pageSize: number;
  pageable: Pageable;
}

export interface Project {
  _id: string;
  carStudio: CarStudio;
}

export interface CarStudio {
  _id: string;
  afterStudioImages: AfterStudioImage[];
}

interface AfterStudioImage {
  afterStudioImageUrl: string;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface PageRequest {
  sort: Sort2;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort2 {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  unPaged: boolean;
  paged: boolean;
}
