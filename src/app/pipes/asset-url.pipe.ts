import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetUrl',
  standalone: true,
})
export class AssetUrlPipe implements PipeTransform {
  // Content already holds usable URLs (local /assets/cms/* paths or absolute links).
  transform(assetUrl: string | null | undefined, fallbackUrl?: string): string {
    return assetUrl || fallbackUrl || '';
  }
}
