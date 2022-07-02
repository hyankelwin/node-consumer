import { loadEnvs } from "src/tools/envs.tools";

loadEnvs(`${__dirname}/../../envs/.env-${process.env.NODE_ENV || 'development'}`);