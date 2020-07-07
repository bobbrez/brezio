import * as React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';
import {
  PostDetailsWrapper,
  PostTitle,
  PostSubTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from './post-details.style';

type SeriesTitleProps = {
  title: string;
  slug: string;
  index: number;
};

type PostDetailsProps = {
  title: string;
  seriesTitle?: string;
  seriesSlug?: string;
  seriesIndex?: number;
  date?: string;
  preview?: any;
  description: any;
  tags?: [];
  className?: string;
  imagePosition?: 'left' | 'top';
};

const nth = (n) => ["st","nd","rd"][((n+90)%100-10)%10-1]||"th"

const SeriesTitle: React.FunctionComponent<SeriesTitleProps> = ({
  title,
  slug,
}) => {
  if(!title) return <></>
  return <PostSubTitle><Link to={`/${slug}`}>{title} Series</Link></PostSubTitle>
}

const SeriesDescription: React.FunctionComponent<SeriesTitleProps> = ({
  title,
  slug,
  index,
}) => {
  console.log("🦑 index", index);
  if(!title) return <></>
  if(index === 0) return <blockquote>This post is the start of the <Link to={`/${slug}`}>{title} Series</Link>.</blockquote>
  return <blockquote>This post is {index}{nth(index)} in a the <Link to={`/${slug}`}>{title} Series</Link>. If you just landed here, it might be worthwhile checking out the series overview.</blockquote>
}


const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  seriesTitle,
  seriesSlug,
  seriesIndex,
  date,
  preview,
  description,
  tags,
  className,
  imagePosition,
  ...props
}) => {
  const addClass: string[] = ['post_details'];

  console.log("🦑 seriesIndex", seriesIndex)

  if (imagePosition == 'left') {
    addClass.push('image_left');
  }

  if (className) {
    addClass.push(className);
  }

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>
      {imagePosition == 'left' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <Img fluid={preview} alt={title} />
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          <PostTitle>{title}</PostTitle>
          <SeriesTitle title={seriesTitle} slug={seriesSlug} />
          <PostDate>{date}</PostDate>
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <Img fluid={preview} alt={title} />
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}

      <PostDescriptionWrapper className="post_des_wrapper">
        {imagePosition == 'left' ? (
          <>
            <PostTitle>{title}</PostTitle>
            <SeriesTitle title={seriesTitle} slug={seriesSlug} index={seriesIndex} />
            <PostDate>{date}</PostDate>
          </>
        ) : (
          ''
        )}
        <SeriesDescription title={seriesTitle} slug={seriesSlug} index={seriesIndex} />
        <PostDescription 
          dangerouslySetInnerHTML={{ __html: description }}
          className="post_des"
        />
        {tags == null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: 'top',
};

export default PostDetails;
