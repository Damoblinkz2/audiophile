import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.

export default defineSchema({
  data: defineTable({
    path: v.string(),
    products: v.array(
      v.object({
        id: v.string(),
        img: v.string(),
        name: v.string(),
        desc: v.string(),
        price: v.number(),
        newProduct: v.boolean(),
        gallery: v.optional(v.array(v.string())),
        features: v.optional(
          v.object({
            desc: v.string(),
            in_box: v.array(
              v.object({ quantity: v.number(), stuff: v.string() }),
            ),
          }),
        ),
      }),
    ),
  }),
});
