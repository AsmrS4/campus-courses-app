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

export default function GroupCard({
    id,
    maximumStudentsCount = 0,
    remainingSlotsCount = 0,
    name = '',
    semester = '',
    startYear = 0,
    status = '',
}) {
    const semesters = {
        Autumn: 'Осенний',
        Winter: 'Зимний',
        Spring: 'Весенний',
        Summer: 'Летний',
    };

    const statuses = {
        Created: 'Создан',
        OpenForAssigning: 'Открыт для записи',
        Started: 'В процессе обучения',
        Finished: 'Закрыт',
    };
    const statusColor = {
        Created: 'text.secondary',
        OpenForAssigning: '#4caf50',
        Started: '#2196f3',
        Finished: '#f44336',
    };
    return (
        <Card variant='outlined' sx={{ height: 'auto', width: 1, marginBottom: '10px' }}>
            <CardContent>
                <div className={styles.titleWrapper}>
                    <Typography className={styles.cardTitle} variant='h5' component='div'>
                        {name}
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{ color: statusColor[status], fontWeight: 500, fontSize: 14 }}
                    >
                        {statuses[status]}
                    </Typography>
                </div>
                <Typography sx={{ color: 'text.secondary' }}>{`Год: ${startYear}`}</Typography>
                <Typography
                    sx={{ color: 'text.secondary', mb: 1.5 }}
                >{`Семестр: ${semesters[semester]}`}</Typography>
                <Typography variant='body2'>
                    {`Всего мест - ${maximumStudentsCount}`}
                    <br />
                    {`Свободные места - ${remainingSlotsCount}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Подробнее</Button>
            </CardActions>
        </Card>
    );
}
