// Import necessary Convex values and server tools
import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Query to get all users for the dropdown
export const listUsers = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("friends").collect();
    return users;
  },
});

// Mutation to add a friend
export const addFriend = mutation({
  args: {
    name: v.string(),
    clerkID: v.string(),
  },

  handler: async (ctx, { name, clerkID }) => {
    // Check if the friend already exists
    const existingFriend = await ctx.db
      .query("friends")
      .filter((q) => q.eq(q.field("clerkID"), clerkID))
      .first();

    // If the friend does not exist, add them
    if (!existingFriend) {
      await ctx.db.insert("friends", { name, clerkID });
    }
  },
});
