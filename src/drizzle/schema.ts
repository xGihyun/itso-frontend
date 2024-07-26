import { pgTable, serial, smallint, text, uuid } from "drizzle-orm/pg-core";

export const StudentsTable = pgTable("students", {
  student_id: uuid("student_id").primaryKey().defaultRandom(),

  first_name: text("first_name").notNull(),
  middle_name: text("middle_name"),
  last_name: text("last_name").notNull(),
});

export const CoachesTable = pgTable("coaches", {
  coach_id: uuid("coach_id").primaryKey().defaultRandom(),

  first_name: text("first_name").notNull(),
  middle_name: text("middle_name"),
  last_name: text("last_name").notNull(),
  email: text("email").notNull(),
  contact_number: text("contact_number").notNull(),
});

export const CategoriesTable = pgTable("categories", {
  category_id: serial("category_id").primaryKey(),

  name: text("name").notNull(),
  limit: smallint("limit").notNull(),
});

export const EntriesTable = pgTable("entries", {
  entry_id: uuid("entry_id").primaryKey().defaultRandom(),

  // NOTE:
  // Having a separate `schools` table would be better if we have a list
  // of all universities in the country
  school_name: text("school_name").notNull(),

  student_id: uuid("student_id")
    .references(() => StudentsTable.student_id)
    .notNull(),
  coach_id: uuid("coach_id")
    .references(() => CoachesTable.coach_id)
    .notNull(),
  category_id: serial("category_id")
    .references(() => CategoriesTable.category_id)
    .notNull(),
});

//export const SchoolsTable = pgTable("schools", {
//  school_id: uuid("school_id").primaryKey().defaultRandom(),
//
//  name: text("name").notNull(),
//  campus: text("campus"),
//});
