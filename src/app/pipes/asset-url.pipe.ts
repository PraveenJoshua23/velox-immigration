import { Pipe, PipeTransform, inject } from '@angular/core';
import { environments } from '../environments/environments';

@Pipe({
  name: 'assetUrl',
  standalone: true,
})
export class AssetUrlPipe implements PipeTransform {
  transform(assetId: string | null | undefined, fallbackUrl?: string): string {
    if (!assetId) {
      return fallbackUrl || '';
    }

    // Check if the assetId is already a full URL
    if (assetId.startsWith('http://') || assetId.startsWith('https://')) {
      return assetId;
    }

    // If it's just an ID, construct the full asset URL
    return `${environments.baseUrl}/assets/${assetId}`;
  }
}
