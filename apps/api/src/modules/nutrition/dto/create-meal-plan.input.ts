/**
 * @file apps/api/src/modules/nutrition/dto/create-meal-plan.input.ts
 * @description GraphQL InputType for generating a daily meal plan with biometric targets.
 * @module @vital-ai/api/nutrition
 */

import { Field, InputType } from "@nestjs/graphql";

@InputType({ description: "Generation parameters for a personalized daily nutrition plan" })
export class CreateDailyMealPlanInput {
  @Field(() => String, { description: "Target date in ISO format YYYY-MM-DD" })
  date!: string;
}
