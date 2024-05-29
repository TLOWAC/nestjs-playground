import * as Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';

export const DrizzleAsyncProvider = 'drizzleProvider';

export const drizzleProvider = {
  provide: DrizzleAsyncProvider,
  useFactory: async () => {
    const sqlite = new Database(process.env.DATABASE_URL, {
      fileMustExist: true,
    });
    const db = drizzle(sqlite, { schema });
    return db;
  },
  exports: [DrizzleAsyncProvider],
};
