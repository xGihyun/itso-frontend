import { pgTable, uuid } from "drizzle-orm/pg-core";

export const ParticipantsTable = pgTable("participants", {
  id: uuid("id").primaryKey().defaultRandom(),

  // ... the rest of the schema
})
