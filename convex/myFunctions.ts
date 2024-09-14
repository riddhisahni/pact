import { v } from "convex/values";
import { api } from "./_generated/api";
import { query, mutation, action } from "./_generated/server";

// Query to get all users for the dropdown
export const listUsers = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("friends").collect();
    return users;
  },
});

export const addFriend = mutation({
  // Define the arguments validation using Convex's built-in validators
  args: {
    name: v.string(),
    clerkID: v.string(),
  },

  // Define the handler with type annotations
  handler: async (ctx, { name, clerkID }: { name: string; clerkID: string }) => {
    // Insert the friend data into the "friends" table
    await ctx.db.insert("friends", { name, clerkID });
  },
});
