import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), build: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      return ctx.prisma.buildOrder.create({
        data: {
          ...input,
        },
      });
    }),
  getBuilds: publicProcedure
    .query(async ({ctx}) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      return ctx.prisma.buildOrder.findMany();
    }),
});
