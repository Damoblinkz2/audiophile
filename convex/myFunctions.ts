// import { v } from "convex/values";
import { query } from "./_generated/server";
// import { api } from "./_generated/api";

// Write your Convex functions in any file inside this directory (`convex`).
// See https://docs.convex.dev/functions for more.

// You can read data from the database via a query:
export const listProducts = query({
  // Validators for arguments.
  args: {},

  // Query implementation.
  handler: async (ctx) => {
    const data = await ctx.db.query("data").collect();
    return data;
  },
});
