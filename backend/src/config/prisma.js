// import "dotenv/config";
// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import pg from "pg";


// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//     checkServerIdentity: () => undefined
//   }
// });

// const adapter = new PrismaPg(pool);
// const prisma = new PrismaClient({ adapter });

// export default prisma;

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;