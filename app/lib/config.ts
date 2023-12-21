// import React from 'react';
// import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
// import { GetStaticPropsContext } from 'next';


// interface PostProps {
//  source: MDXRemoteSerializeResult;
// }

// const MDXComponents = {
//    img: (props: { src: string; alt: string }) => <img src={props.src} alt={props.alt} />
//    code: (props: { value: string }) => <pre>{props.value}</pre>,
// };

// export async function getMdxNode(source: MDXRemoteSerializeResult, scope: any) {
//    return await MDXRemote.render(source, scope);
// }
 

// export async function getAllPosts(): Promise<any[]> {
//    const response = await fetch('https://example.com/api/posts');
//    const posts = await response.json();
//    return posts;
// }


// export async function getPostBySlug(context: GetStaticPropsContext) {
//    const { slug } = context.params as { slug: string };
//    const posts = await getAllPosts();
//    const post = posts.find((post) => post.slug === slug) as any; // ajusta el tipo según lo que tengas en tu API
   
//    const mdxSource = await fetch(`https://example.com/api/posts/${slug}`);
//    const { content, data } = await mdxSource.json();
   
//    const source = await MDXRemoteSerialize(content, data);

//    return {
//      props: {
//        source,
//      },
//    };
// }
 
// export default function Post({ source }: PostProps) {
//  return (
//     <div>
//       <MDXRemote components={MDXComponents} {...source} />
//     </div>
//  );
// }