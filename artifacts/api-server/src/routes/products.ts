import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { categoriesTable, productsTable } from "@workspace/db/schema";
import { eq, like, or, and, sql } from "drizzle-orm";
import { GetProductsQueryParams, GetProductParams } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/categories", async (_req, res) => {
  try {
    const categories = await db.select().from(categoriesTable).orderBy(categoriesTable.name);

    const categoriesWithCount = await Promise.all(
      categories.map(async (cat) => {
        const [countResult] = await db
          .select({ count: sql<number>`count(*)::int` })
          .from(productsTable)
          .where(eq(productsTable.categoryId, cat.id));
        return {
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          description: cat.description,
          productCount: countResult?.count ?? 0,
        };
      })
    );

    res.json(categoriesWithCount);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

router.get("/products", async (req, res) => {
  try {
    const query = GetProductsQueryParams.parse(req.query);

    let conditions: ReturnType<typeof eq>[] = [];

    if (query.category) {
      const [cat] = await db
        .select({ id: categoriesTable.id })
        .from(categoriesTable)
        .where(eq(categoriesTable.slug, query.category));
      if (cat) {
        conditions.push(eq(productsTable.categoryId, cat.id));
      }
    }

    let products;

    if (query.search) {
      const searchTerm = `%${query.search}%`;
      const searchCondition = or(
        like(productsTable.name, searchTerm),
        like(productsTable.description, searchTerm),
        like(sql`coalesce(${productsTable.genericName}, '')`, searchTerm)
      )!;

      products = await db
        .select({
          id: productsTable.id,
          name: productsTable.name,
          slug: productsTable.slug,
          categoryId: productsTable.categoryId,
          categoryName: categoriesTable.name,
          categorySlug: categoriesTable.slug,
          description: productsTable.description,
          specifications: productsTable.specifications,
          applications: productsTable.applications,
          genericName: productsTable.genericName,
          strength: productsTable.strength,
          containerType: productsTable.containerType,
          isPrefillSyringe: productsTable.isPrefillSyringe,
        })
        .from(productsTable)
        .innerJoin(categoriesTable, eq(productsTable.categoryId, categoriesTable.id))
        .where(
          conditions.length > 0
            ? and(conditions[0], searchCondition)
            : searchCondition
        )
        .orderBy(productsTable.name);
    } else {
      products = await db
        .select({
          id: productsTable.id,
          name: productsTable.name,
          slug: productsTable.slug,
          categoryId: productsTable.categoryId,
          categoryName: categoriesTable.name,
          categorySlug: categoriesTable.slug,
          description: productsTable.description,
          specifications: productsTable.specifications,
          applications: productsTable.applications,
          genericName: productsTable.genericName,
          strength: productsTable.strength,
          containerType: productsTable.containerType,
          isPrefillSyringe: productsTable.isPrefillSyringe,
        })
        .from(productsTable)
        .innerJoin(categoriesTable, eq(productsTable.categoryId, categoriesTable.id))
        .where(conditions.length > 0 ? conditions[0] : undefined)
        .orderBy(productsTable.name);
    }

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.get("/products/:categorySlug/:slug", async (req, res) => {
  try {
    const { categorySlug, slug } = GetProductParams.parse(req.params);

    const [product] = await db
      .select({
        id: productsTable.id,
        name: productsTable.name,
        slug: productsTable.slug,
        categoryId: productsTable.categoryId,
        categoryName: categoriesTable.name,
        categorySlug: categoriesTable.slug,
        description: productsTable.description,
        specifications: productsTable.specifications,
        applications: productsTable.applications,
        genericName: productsTable.genericName,
        strength: productsTable.strength,
        containerType: productsTable.containerType,
        isPrefillSyringe: productsTable.isPrefillSyringe,
      })
      .from(productsTable)
      .innerJoin(categoriesTable, eq(productsTable.categoryId, categoriesTable.id))
      .where(and(eq(productsTable.slug, slug), eq(categoriesTable.slug, categorySlug)));

    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

export default router;
