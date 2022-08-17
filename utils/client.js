import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'l61wsgm8',
  dataset: 'production',
  apiVersion: '2022-09-08',
  useCdn: false,
  token: 'skGujQi6aVMRUh6zRGQKzXiQKxY3wwz4DpeuDWuChna2YPQTWEAt9EDlcYvPpExLj1wwy9bhMFdb0SHvKtl0mVqGLbnZfKxh0OB3Php2fxthu59nIGjwQ414K3C4ESC7ctAVF48wL1t3igO0Z8sWXz2RkaVBWZndpoCqg4vUdT0smQLk0IOU',
});