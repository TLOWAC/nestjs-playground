import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  username: text('username'),
  email: text('email'),
  password: text('password'),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
