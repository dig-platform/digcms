import {Media} from '../../media/interfaces/media';

export interface Post extends NewPost{
  id: string;
  metadata: any;
  intro: string;
  body: string;
  tags: string[];
  media: Media | null;
  displayDate?: string;
}
export interface NewPost {
  title: string;
}

export const POST_DRAFT = 'draft';
export const POST_PUBLIC = 'public';
export const POST_ARCHIVE = 'archive';
export const POST_TRASH = 'trash';
