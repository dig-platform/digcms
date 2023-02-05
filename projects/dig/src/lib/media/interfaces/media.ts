export interface Media {
  bucket?: string;
  contentType: string;
  mediaLink: string;
  metadata?: any;
  name: string;
  size: number;
  storageId: string;
  timeCreated: string;
  id?: string;
  tags?: string[];
}

export interface MediaUpload {
  name: string;
  progress: number;
  size: number;
  type: string;
}
