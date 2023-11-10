import { createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = createClient({
projectId: 'xmf39mxp',
dataset: 'production',
apiVersion: '2023-11-09',
useCdn: true,
token: 'sko8D5fwW5s1qRCeLchgkTXt9Rk1m0rDuDTZ2FcCCbgaDzsmdKM5dDloajDOJ07TVJLg1H8hUutTOhvjyT7xZ1X6cu98hk4AJyMjMHPl6O1s7IPw1acD7huxy5ih1t8FkfXKpfxcPWIoC70Xp9rEuagE570fJPw9fDTglKRob2I8G8h1CVka',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);