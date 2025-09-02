import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postList }) =>
  postList.map(post => <PostInfo key={post.id} post={post} />);
