import { useState } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PostItem from './PostItem';
import { posts } from '../data/posts';
import './PostList.scss';

export default function PostList() {
  const [isListView, setListView] = useState(true);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth={false}
        className="post__view"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          maxWidth: '836px',
          margin: '16px 0 8px 0',
        }}
      >
        <IconButton
          sx={{ color: isListView ? '#3d8eda' : '#c8c8c8' }}
          onClick={() => setListView(false)}
        >
          <GridViewIcon />
        </IconButton>
        <IconButton
          sx={{ color: isListView ? '#c8c8c8' : '#3d8eda' }}
          onClick={() => setListView(true)}
        >
          <FormatListBulletedIcon />
        </IconButton>
      </Container>

      <Container
        maxWidth={false}
        className={`post__list${isListView ? '' : ' tiled'}`}
        sx={{ maxWidth: '836px', width: '100%' }}
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Container>
    </Box>
  );
}
