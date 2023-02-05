export interface Page extends DigCmsPage{
  id: string;
  status: PageStatus;
}

export interface NewPage extends DigCmsPage {
}

export interface DigCmsPage {
  name: string;
  path: string;
  metadata?: any;
}

export const PAGE_DRAFT = 'draft';
export const PAGE_PUBLIC = 'public';
export const PAGE_ARCHIVE = 'archive';
export const PAGE_TRASH = 'trash';

export type PageStatus = 'draft' | 'public' | 'archive' | 'trash';
