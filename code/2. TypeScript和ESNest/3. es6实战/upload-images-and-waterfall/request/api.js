import { requestClient } from './requestClient';

export const uploadImages = (image) => {
  const formData = new FormData();
  formData.append('image', image);
  requestClient.post('/images/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
