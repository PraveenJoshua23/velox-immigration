import { firstValueFrom } from 'rxjs';
import { DirectusService } from './directus.service';
import posts from '../../content/posts.json';

describe('DirectusService (static content)', () => {
  const service = new DirectusService();

  it('returns a collection', async () => {
    const { data } = await firstValueFrom(
      service.getCollection<any>('express_entry')
    );
    expect(data.title).toBeTruthy();
  });

  it('applies filter, sort and limit from an inline query', async () => {
    const { data } = await firstValueFrom(
      service.getCollection<any[]>(
        'posts?limit=1&sort=-date_updated&filter[status][_eq]=published'
      )
    );
    const newest = posts.data
      .filter((p) => p.status === 'published')
      .map((p) => p.date_updated ?? '')
      .sort()
      .pop();
    expect(data.length).toBe(1);
    expect(data[0].date_updated ?? '').toBe(newest);
  });

  it('errors on an unknown collection', async () => {
    await expectAsync(
      firstValueFrom(service.getCollection('nope'))
    ).toBeRejectedWithError(/Unknown collection/);
  });
});
