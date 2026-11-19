/**
 * @file packages/database/src/index.ts
 * @description Master barrel export for the @vital-ai/database package.
 * Single source of truth for Prisma client and database seed routines.
 * @module @vital-ai/database
 */

export * from "./client";
export * from "./seeds/seed-all";
export * from "./seeds/seed-advisors";
export * from "./seeds/seed-providers-models";
export * from "./seeds/seed-nav-items";
export * from "./seeds/seed-platform-configs";
export * from "./seeds/seed-system-prompts";
