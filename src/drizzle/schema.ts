import {
  timestamp,
  pgTable,
  smallint,
  text,
  uuid,
  pgEnum,
} from "drizzle-orm/pg-core";

export const eventYearStatusEnum = pgEnum("event_year_status", [
  "ongoing",
  "closed",
  "open",
]);

export const StudentsTable = pgTable("students", {
  id: uuid("student_id").primaryKey().defaultRandom(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),

  firstName: text("first_name").notNull(),
  middleName: text("middle_name"),
  lastName: text("last_name").notNull(),
});

export const CoachesTable = pgTable("coaches", {
  id: uuid("coach_id").primaryKey().defaultRandom(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),

  firstName: text("first_name").notNull(),
  middleName: text("middle_name"),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  contactNumber: text("contact_number").notNull(),
});

export const CategoriesTable = pgTable("categories", {
  id: uuid("category_id").primaryKey(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),

  name: text("name").notNull(),
  minimumParticipantLimit: smallint("minimum_participant_limit").notNull(),
  maximumParticipantLimit: smallint("maximum_participant_limit").notNull(),
});

export const SchoolsTable = pgTable("schools", {
  id: uuid("school_id").primaryKey().defaultRandom(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),

  name: text("name").notNull(),
  campus: text("campus"),
});

export const EventYearsTable = pgTable("event_years", {
  id: uuid("event_year_id").primaryKey().defaultRandom(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),

  year: smallint("year").notNull().unique(),
  status: eventYearStatusEnum("status").notNull().default("closed"),
});

export const EntriesTable = pgTable("entries", {
  id: uuid("entry_id").primaryKey().defaultRandom(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),

  eventYearId: uuid("event_year_id")
    .references(() => EventYearsTable.id)
    .notNull(),
  categoryId: uuid("category_id")
    .references(() => CategoriesTable.id)
    .notNull(),
  schoolId: uuid("school_id")
    .references(() => SchoolsTable.id)
    .notNull(),
  studentId: uuid("student_id")
    .references(() => StudentsTable.id)
    .notNull(),
  coachId: uuid("coach_id")
    .references(() => CoachesTable.id)
    .notNull(),
});
