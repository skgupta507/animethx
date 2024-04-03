"use server"

import db from "@/db/drizzle";
import { comments } from "@/db/schema";
import { desc, eq } from 'drizzle-orm';

export const get = async (title: string, nextCursor: number = 0) => {
    const initialLimit = nextCursor === 0 ? 8 : nextCursor
    const data =
        await db
            .select()
            .from(comments)
            .where(eq(comments.title, title))
            .orderBy(desc(comments.date))
            .limit(initialLimit)
            .offset(nextCursor);
    return { data: data, nextCursor: nextCursor + 8 };
};