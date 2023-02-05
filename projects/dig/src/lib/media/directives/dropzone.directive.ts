import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';

@Directive({
  standalone: true,
  selector: '[appDropzone]',
})
export class DropzoneDirective {
  @Input() path = 'uploads';
  @Input() uploadMessage = 'Uploading file...';
  @Input() multiple!: boolean;

  @Input() accept = '';

  @Output() uploadStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() uploaded: EventEmitter<any> = new EventEmitter<any>();
  @Output() progress: EventEmitter<number | null> = new EventEmitter<number | null>();
  @Output() errors: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('dragleave', ['$event']) onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('drop', ['$event']) onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    return this.upload(evt.dataTransfer.files);
  }

  async upload(data: any) {
    const file = data[0];
    this.progress.emit(5);
    let name = file.name;
    const filePath = this.path + '/' + name;

    this.uploadStart.emit({
      name,
      filePath,
      size: +file.size,
      type: file.type + ''
    });

    const storage = getStorage();
    const storageRef = ref(storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.progress.emit(progress);
      },
      (error) => {
        this.errors.emit(error);
      },
      () => {
        this.uploaded.emit(uploadTask.snapshot.ref.fullPath);
      });
  }
}
