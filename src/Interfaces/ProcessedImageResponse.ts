export interface WebEditorImageUploadResponse {
  return: ProcessedImagesResponse;
}

export interface ProcessedImagesResponse {
  orderId: string;
  carStudioId: string;
  afterStudioImages: AfterStudioImage[];
}

export interface AfterStudioImage {
  imageUrl: string;
  position: string;
  rawImageUrl: string;
}
