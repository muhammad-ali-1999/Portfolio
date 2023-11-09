import  sanityClient  from "@sanity/client"; 
import imageUrlBuilder from "@sanity/image-url";

// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = sanityClient({
projectid: process.env.SANITY_PROJECT_ID,
dataset: 'production',
apiVersion: '2023-11-09',
useCdn: true,
token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);