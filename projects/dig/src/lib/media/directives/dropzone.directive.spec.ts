import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DropzoneDirective } from './dropzone.directive';

class MockElementRef {}

const mockEvent = {
  preventDefault: () => {},
  stopPropagation: () => {},
};

@Component({
  template: '<div appDropzone>Test</div>',
})
export class DropzoneComponent {}

describe('DropzoneDirective', () => {
  let component: DropzoneComponent;
  let fixture: ComponentFixture<DropzoneComponent>;
  let directive: DropzoneDirective;
  let testEl: DebugElement;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropzoneComponent, DropzoneDirective],
      providers: [
        DropzoneDirective,
        { provide: ElementRef, useClass: MockElementRef },
      ],
    });
    fixture = TestBed.createComponent(DropzoneComponent);
    component = fixture.componentInstance;
    testEl = fixture.debugElement.query(By.css('div'));
  });

  describe('Events', () => {
    it('should call the handleUpload function', () => {
      directive = fixture.debugElement
        .query(By.directive(DropzoneDirective))
        .injector.get(DropzoneDirective) as DropzoneDirective;
      spy = spyOn(directive, 'handleUpload');
      testEl.triggerEventHandler('drop', {
        ...mockEvent,
        dataTransfer: {
          files: [{ name: 'test' }],
        },
      });
      fixture.detectChanges();
      expect(directive.handleUpload).toHaveBeenCalledOnceWith([
        { name: 'test' },
      ]);
    });

    it('should ingore drag over', () => {
      directive = fixture.debugElement
        .query(By.directive(DropzoneDirective))
        .injector.get(DropzoneDirective) as DropzoneDirective;
      spy = spyOn(directive, 'handleUpload');
      testEl.triggerEventHandler('dragover', {
        ...mockEvent,
        dataTransfer: {
          files: [{ name: 'test' }],
        },
      });
      fixture.detectChanges();
      expect(directive.handleUpload).not.toHaveBeenCalled();
    });

    it('should ignore dragleave', () => {
      directive = fixture.debugElement
        .query(By.directive(DropzoneDirective))
        .injector.get(DropzoneDirective) as DropzoneDirective;
      spy = spyOn(directive, 'handleUpload');
      testEl.triggerEventHandler('dragleave', {
        ...mockEvent,
        dataTransfer: {
          files: [{ name: 'test' }],
        },
      });
      fixture.detectChanges();
      expect(directive.handleUpload).not.toHaveBeenCalled();
    });
  });

  describe('Upload', () => {
    it('should handle single files', async () => {
      directive = fixture.debugElement
        .query(By.directive(DropzoneDirective))
        .injector.get(DropzoneDirective) as DropzoneDirective;
      spy = spyOn(directive.upload, 'emit');
      spyOn(window, 'FileReader').and.returnValue({
        readAsBinaryString: (file: any) => file,
      } as FileReader);
      const files = [{ name: 'test' }];
      directive.handleUpload(files);
      fixture.detectChanges();
      expect(directive.upload.emit).toHaveBeenCalledWith(files[0]);
    });
    it('should only emit single file if multiple is false', async () => {
      directive = fixture.debugElement
        .query(By.directive(DropzoneDirective))
        .injector.get(DropzoneDirective) as DropzoneDirective;
      spy = spyOn(directive.upload, 'emit');
      spyOn(window, 'FileReader').and.returnValue({
        readAsBinaryString: (file: any) => file,
      } as FileReader);
      const files = [{ name: 'test' }, { name: 'test2' }];
      directive.handleUpload(files);
      fixture.detectChanges();
      expect(directive.upload.emit).toHaveBeenCalledWith(files[0]);
      expect(directive.upload.emit).not.toHaveBeenCalledWith(files[1]);
    });
    it('should only emit multiple files if multiple is true', async () => {
      directive = fixture.debugElement
        .query(By.directive(DropzoneDirective))
        .injector.get(DropzoneDirective) as DropzoneDirective;
      spy = spyOn(directive.upload, 'emit');
      directive.multiple = true;
      spyOn(window, 'FileReader').and.returnValue({
        readAsBinaryString: (file: any) => file,
      } as FileReader);
      const files = [{ name: 'test' }, { name: 'test2' }];
      directive.handleUpload(files);
      fixture.detectChanges();
      expect(directive.upload.emit).toHaveBeenCalledWith(files[0]);
      expect(directive.upload.emit).toHaveBeenCalledWith(files[1]);
    });
  });
});
