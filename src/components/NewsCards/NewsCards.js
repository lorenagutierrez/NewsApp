import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
    { color : ' #cccc', title:'Latest News',info:' - Breaking News', text: 'Give me the latest news'},
    { color : ' #363636', title:'Categories',info:'- Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the business news'}, 
    { color : ' #242424', title:'Terms',info:' - Bitcoin, PlayStation 5, Smartphones...', text: 'What\'s up with PlayStation 5' },
    { color : ' #030303', title:'Sources', info:' - CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN'},

];
const NewsCards = ( {articles, activeArticle}) => {
    const classes = useStyles();

    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing = {3}>
                    {infoCards.map((infoCard)=>(
                        <Grid items xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {infoCard.info ? (<Typography variant="h6"><strong>{infoCard.title.split('f')[2]}<br/>{infoCard.info}</strong></Typography>) : null}
                                <Typography variant="h6"> Try saying: <br/> <i>{infoCard.text}</i></Typography>
                                </div>
                                </Grid>
                                ))}
                                </Grid>
                            </Grow>
        );
    }
    return (
        <Grow in>
        <Grid class className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i ) => (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
                </Grid>
            ))}
            </Grid>
            </Grow>
        
    );
}

export default NewsCards;
