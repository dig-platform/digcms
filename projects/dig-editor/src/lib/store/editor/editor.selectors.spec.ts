import * as fromEditor from './editor.reducer';
import { selectEditorState } from './editor.selectors';

describe('Editor Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEditorState({
      [fromEditor.editorFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
