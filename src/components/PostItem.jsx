import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

export default function PostItem({post}) {
    return (
        <Card
            className="post_item"
            sx={{
                borderRadius: 0,
                boxShadow: 'none',
            }}
        >
            <CardMedia
                component="img"
                className="post__media"
                image={ post.src }
            />

            <CardContent
                className="post__content"
            >
                <Box className="post__analytics">
                    <Typography>Today</Typography>
                    <Box className="analytics">
                        <Box className="analytics__item">
                            <FavoriteIcon />
                            <Typography>{post.analytics.today.likes}</Typography>
                        </Box>
                        <Box className="analytics__item">
                            <CommentIcon />
                            <Typography>{post.analytics.today.comments}</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box className="post__analytics">
                    <Typography>Date</Typography>
                    <Box className="analytics">
                        <Box className="analytics__item">
                            <FavoriteIcon />
                            <Typography>{post.analytics.dated.likes}</Typography>
                        </Box>
                        <Box className="analytics__item">
                            <CommentIcon />
                            <Typography>{post.analytics.dated.comments}</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box className="post__uploaded">
                    <Typography>Uploaded</Typography>
                    <Typography>{post.analytics.uploaded.format('DD.MM.YYYY')}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}