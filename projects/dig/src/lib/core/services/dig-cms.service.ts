import { Injectable } from '@angular/core';
import {firstValueFrom, of} from 'rxjs';
import {PageService} from '../../page/services/page.service';
import {ContentNodeService} from '../../page/services/content-node.service';
import {ContentNode} from '../../page/interfaces/content-node';
import { getFunctions, httpsCallable } from "firebase/functions";
import {AuthService} from '../../user/services/auth.service';
import {Firebase} from '../../dig';

@Injectable({
  providedIn: 'root'
})
export class DigCmsService {
  private appCheckFunctions: {[key: string]: string} = {
    adminUser: 'dig-user-hasOwner'
  }
  constructor(
    private firebase: Firebase,
    private auth: AuthService,
    private contentNodeService: ContentNodeService,
    private pageService: PageService) { }

  async getPage(path: string) {
    const page = await firstValueFrom(this.pageService.getPageByPath(path));
    const nodes = await firstValueFrom(this.contentNodeService.getPageNodes(page.id));
    return {
      ...page,
      content: nodes.reduce((map: any, node: ContentNode) => {
        return {
          ...map,
          [node.name as string]: {...node.content}
        }
      }, {} as any)
    }
  }

  async getContent(path: string): Promise<any> {
    return this.getPage(path).then(p => p.content as any)
  }

  getNode(path: string, node: string): Promise<any> {
    return this.getContent(path).then(content => content ? content.find((n: any) => n.name === node) : {} as any);
  }

  async appCheck() {
    const functions = getFunctions();

    const auth = await firstValueFrom(this.auth.user());
    if (! auth) {
      return;
    }
    const checks = Object.keys(this.appCheckFunctions);
    const results = await Promise.all(checks.map(key => {
      const fn = httpsCallable(functions, this.appCheckFunctions[key]);
      return fn().then(res => res.data)
    }));
    const errors: string[] = [];
    checks.forEach((key: string, index: number) => {
      const result = results[index];
      if (! result) {
        errors.push(key);
      }
    });
    return errors;
  }


}
