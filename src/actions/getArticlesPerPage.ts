"use server";

import { ArticlesGetAllPerPage } from "~/server/api/routers";
import { api } from "~/trpc/server";

export async function getArticlesPerPage(params: {
  search: string;
  theme: string;
  date: string;
  page: number;
}): Promise<ArticlesGetAllPerPage> {
  const articles = await api.article.getAllPerPage(params);
  return articles;
}
