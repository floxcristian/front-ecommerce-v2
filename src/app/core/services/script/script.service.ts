// Angular
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { IScript } from './script.interface';
import { ILoadScriptResponse } from './load-script-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  private scripts: { [key: string]: IScript } = {};
  private renderer: Renderer2;

  constructor(
    private readonly rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  loadScript(src: string): Promise<ILoadScriptResponse> {
    return new Promise((resolve, reject) => {
      if (this.scripts[src]?.isLoaded) {
        return resolve({ isLoaded: true, status: 'Already Loaded.' });
      }

      if (this.scripts[src] && !this.scripts[src].isLoaded) {
        this.removeScript(src);
      }

      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      // Es necesario poner los 2?
      // TODO: yo aceptaría un parámetro para indicar si es async o defer.
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.scripts[src] = { src, isLoaded: true };
        return resolve({ isLoaded: true, status: 'Loaded.' });
      };
      script.onerror = (error: any) => {
        this.scripts[src] = { src, isLoaded: false };
        reject(error);
      };

      this.renderer.appendChild(this.document.head, script);
    });
  }

  /**
   * Remover script del DOM.
   * @param id Identificador del script a remover.
   */
  removeScript(src: string): void {
    const scripts = Array.from(document.getElementsByTagName('script'));
    const scriptToRemove = scripts.find((script) => script.src.includes(src));
    if (scriptToRemove && scriptToRemove.parentNode) {
      scriptToRemove.parentNode.removeChild(scriptToRemove);
    }
  }
}
