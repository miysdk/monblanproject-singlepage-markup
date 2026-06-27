import { useState } from 'react';

import { Container, IconButton, Box } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import daysjs from 'dayjs'

import PostItem from './PostItem'

import img_a from '../assets/posts/img_a.png';
import img_b from '../assets/posts/img_b.png';
import img_c from '../assets/posts/img_c.png';
import img_d from '../assets/posts/img_d.png';
import img_e from '../assets/posts/img_e.png';
import img_f from '../assets/posts/img_f.png';
import img_g from '../assets/posts/img_g.png';
import img_h from '../assets/posts/img_h.png';

import './PostList.scss'

export default function PostList () {
    const [isListView, setListView] = useState(true);

    const posts = [
        {
            id: 'p4821',
            src: img_a,
            analytics: {
            today: {
                likes: 214,
                comments: 48,
            },
            dated: {
                likes: 93,
                comments: 27,
            },
            uploaded: daysjs('2024-09-12'),
            },
        },
        {
            id: 'p9127',
            src: img_b,
            analytics: {
            today: {
                likes: 76,
                comments: 19,
            },
            dated: {
                likes: 142,
                comments: 36,
            },
            uploaded: daysjs('2023-05-03'),
            },
        },
        {
            id: 'p2534',
            src: img_c,
            analytics: {
            today: {
                likes: 301,
                comments: 64,
            },
            dated: {
                likes: 58,
                comments: 11,
            },
            uploaded: daysjs('2022-11-28'),
            },
        },
        {
            id: 'p7048',
            src: img_d,
            analytics: {
            today: {
                likes: 119,
                comments: 33,
            },
            dated: {
                likes: 187,
                comments: 41,
            },
            uploaded: daysjs('2021-07-19'),
            },
        },
        {
            id: 'p1365',
            src: img_e,
            analytics: {
            today: {
                likes: 245,
                comments: 57,
            },
            dated: {
                likes: 72,
                comments: 15,
            },
            uploaded: daysjs('2020-02-08'),
            },
        },
        {
            id: 'p9912',
            src: img_f,
            analytics: {
                today: {
                likes: 163,
                comments: 29,
                },
                dated: {
                likes: 88,
                comments: 18,
                },
                uploaded: daysjs('2024-03-21'),
            },
            },
            {
            id: 'p3476',
            src: img_g,
            analytics: {
                today: {
                likes: 205,
                comments: 41,
                },
                dated: {
                likes: 112,
                comments: 24,
                },
                uploaded: daysjs('2023-10-07'),
            },
            },
            {
            id: 'p6289',
            src: img_h,
            analytics: {
                today: {
                likes: 97,
                comments: 14,
                },
                dated: {
                likes: 134,
                comments: 31,
                },
                uploaded: daysjs('2022-06-15'),
            },
            }
    ];

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
                    sx={{
                        color: !isListView ? '#C8C8C8' : '#3D8EDA'
                    }}
                    onClick={() => setListView(false)}
                >
                    <GridViewIcon />
                </IconButton>
                <IconButton
                    sx={{
                        color: isListView ? '#C8C8C8' : '#3D8EDA'
                    }}
                    onClick={() => setListView(true)}
                >
                    <FormatListBulletedIcon />
                </IconButton>
            </Container>
            <Container 
                maxWidth={false}
                className={'post__list ' + (isListView ? '' : 'tiled')}
                sx={{
                    maxWidth: '836px',
                    width: '100%'
                }}
            >
                { posts.map((post) => (<PostItem key={post.id} post={post} />)) }
            </Container>
        </Box>
    )
}