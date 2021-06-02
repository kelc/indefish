import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '../components/BlockContent';

export default function HomePage({ data }) {
    const post = data.post;
    const { _rawBody, title } = post;
    return (
        <div>
            <h1>Indefish Design</h1>
            <p>{title}</p>
            <BlockContent blocks={ _rawBody } />
        </div>
    )
}

export const query = graphql`
  query BlogPost {
    post: sanityPost(id: { eq: "-b4a36de2-20dc-52e1-910b-5de4e6eb51b7" }) {
        id
        publishedAt(formatString: "YYYY-MM-DD")
        slug {
            current
        }
        title
        _rawBody
    }
  }
`;