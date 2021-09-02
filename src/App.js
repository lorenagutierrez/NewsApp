import React, {useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import {Typography} from '@material-ui/core';


import wordsToNumbers from 'words-to-numbers';
const alanKey = '2b8b212cc909753284317e79ca3fe4ed2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =() => {
    const [newsArticles, setNewsArticles] = useState(0);
    const [activeArticle, setActiveArticle] = useState([]);
    

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand:({command, articles, number})=> {
                if(command==='newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                
                }else if ( command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if ( command ==='open') {
                    //three => 3
                    const parsedNumber= number.length > 2 ? wordsToNumbers(number, { fuzzy: true}): number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20) {
                        alanBtn().playText('Please try that again.')
                    } else if(article){
                    window.open(articles.url,'_blank');
                    alanBtn().playText('Opening...');
                }
            }
            }
        })
    }, [])
return (
    <div>
        <div className={classes.logoContainer}>
        <img src = "https://images.saasworthy.com/alanai_9487_logo_1597673636_sygzo.png" className={classes.alanLogo} alt="alan logo"/>
        </div>
    
        <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        {!newsArticles.length ?(
            <div className={classes.footer}>
                <Typography variant="body1" component="h2">
                    Created by 
                    <a className={classes.link} href="http://linkedin.com"> Lorena Gutiérrez</a>
                </Typography>
                </div>
        ) : null}

    </div>  
);

};
export default App;
