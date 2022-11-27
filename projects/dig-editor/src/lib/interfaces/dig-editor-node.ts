export interface DigEditorNode {
  focus?: number;
  selection?: {
    start: number,
    end: number
  };
  format: string;
  content: string;
}
