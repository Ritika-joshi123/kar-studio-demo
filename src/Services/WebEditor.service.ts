import axios from 'axios';
import {
  WebEditorImageUploadResponse,
  WebEditorListResponse,
} from '../Interfaces';
import { Pagination } from '../Types';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_WEB_EDITOR_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadImagesV2 = async (
  imageUrls: string[],
  plateImageUrl?: string
) => {
  var formdata = new FormData();

  imageUrls.forEach((url, i) => {
    formdata.append(`images[${i}].fileUrl`, url);
    formdata.append(`images[${i}].position`, 'FRONT');
  });

  if (plateImageUrl && plateImageUrl.trim() !== '') {
    formdata.append('plateImageUrl', plateImageUrl);
  }

  return await axiosInstance.post<WebEditorImageUploadResponse>(
    '/uploadImagesWithUrlV2',
    formdata,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        apiKey: process.env.REACT_APP_TOKYO_EDITOR_API_KEY!,
        Cookie: 'JSESSIONID=NzNjNTg5MTYtZWZkNi00MDg2LTg5ZWQtZGJmYTdkNjY3YmM3',
      },
    }
  );
};

export const getProjects = async (pagination: Pagination) => {
  var formdata = new FormData();
  formdata.append('sortBy', pagination.sortBy);
  formdata.append('direction', pagination.direction);
  formdata.append('limit', pagination.limit.toString());
  formdata.append('pageNumber', pagination.pageNumber.toString());

  return await axiosInstance.post<WebEditorListResponse>('/list', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
      apiKey: process.env.REACT_APP_TOKYO_EDITOR_API_KEY!,
      Cookie: 'JSESSIONID=NzNjNTg5MTYtZWZkNi00MDg2LTg5ZWQtZGJmYTdkNjY3YmM3',
    },
  });
};
