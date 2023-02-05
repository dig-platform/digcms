export interface ContentNode extends NewContentNode {
  id: string;
}
export interface NewContentNode {
  pageId?: string;
  type: string;
  name: string;
  content?: any;
  metadata?: any;
  position?: number;
}

export const CONTENT_NODE_DRAFT = 'draft';
export const CONTENT_NODE_PUBLIC = 'public';
export const CONTENT_NODE_ARCHIVE = 'archive';
export const CONTENT_NODE_TRASH = 'trash';

export type ContentNodeStatus = 'draft' | 'public' | 'archive' | 'trash';
