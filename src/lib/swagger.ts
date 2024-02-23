import { createSwaggerSpec } from "next-swagger-doc";
// generate swagger docs from JSDoc comments
export const getApiDocs = () => {
    const spec = createSwaggerSpec({
        apiFolder: 'src/app/api',
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'API Docs',
                version: '1.0.0',
            },
        }
    })
    return spec;
}