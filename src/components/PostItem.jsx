import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

function AnalyticsRow({ label, likes, comments }) {
  return (
    <Box className="post__analytics">
      <Typography>{label}</Typography>
      <Box className="analytics">
        <Box className="analytics__item">
          <FavoriteIcon />
          <Typography>{likes}</Typography>
        </Box>
        <Box className="analytics__item">
          <CommentIcon />
          <Typography>{comments}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function PostItem({ post }) {
  const { analytics } = post;

  return (
    <Card className="post_item" sx={{ borderRadius: 0, boxShadow: 'none' }}>
      <CardMedia component="img" className="post__media" image={post.src} />
      <CardContent className="post__content">
        <AnalyticsRow
          label="Today"
          likes={analytics.today.likes}
          comments={analytics.today.comments}
        />
        <AnalyticsRow
          label="Date"
          likes={analytics.dated.likes}
          comments={analytics.dated.comments}
        />
        <Box className="post__uploaded">
          <Typography>Uploaded</Typography>
          <Typography>{analytics.uploaded.format('DD.MM.YYYY')}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
