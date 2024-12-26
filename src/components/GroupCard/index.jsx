import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './GroupCard.module.scss';

const bull = (
    <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

export default function GroupCard() {
    return (
        <Card variant='outlined' sx={{ maxWidth: '996px', width: 1 }}>
            <CardContent>
                <div className={styles.titleWrapper}>
                    <Typography className={styles.cardTitle} variant='h5' component='div'>
                        Название группы
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Статус
                    </Typography>
                </div>
                <Typography sx={{ color: 'text.secondary' }}>Год</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Семестр</Typography>
                <Typography variant='body2'>
                    Всего мест
                    <br />
                    {'Свободные места'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Подробнее</Button>
            </CardActions>
        </Card>
    );
}
