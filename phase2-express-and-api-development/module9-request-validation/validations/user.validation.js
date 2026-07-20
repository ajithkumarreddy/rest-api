const { z } = require("zod");

const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
});

module.exports = {
    createUserSchema,
}