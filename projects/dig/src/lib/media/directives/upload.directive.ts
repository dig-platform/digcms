import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {CommonModule} from '@angular/common';

@Directive({
  standalone: true,
  selector: '[appUpload]'
})
export class UploadDirective {
  @Input() accept = '';
  @Input() path = 'uploads';
  @Input() uploadMessage = 'Uploading file...';
  @Input() multiple: boolean = false;

  @Output() uploadStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() uploaded: EventEmitter<any> = new EventEmitter<any>();
  @Output() progress: EventEmitter<number | null> = new EventEmitter<number | null>();
  @Output() errors: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(el: any) {
    this.open(el);
  }

  detectFiles(event: any) {
    if (this.multiple) {
      return event.target.files.forEach((file: any) => this.upload(file));
    } else {
      return this.upload(event.target.files[0]);
    }
  }

  open(host: any) {
    const uploader = document.createElement('input');
    uploader.style.display = 'none';
    uploader.type = 'file';
    uploader.accept = this.accept;
    uploader.click();
    uploader.addEventListener('change', ev => this.detectFiles(ev));
  }
  async upload(file: any) {
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
