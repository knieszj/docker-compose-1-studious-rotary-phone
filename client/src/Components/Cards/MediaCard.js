import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const ImgMediaCard = ({coffeeBeanData}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    image="https://source.unsplash.com/random/345x400"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {coffeeBeanData.name || "Lizard"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur autem eius rem voluptates. Atque explicabo molestiae odio praesentium recusandae!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {`${coffeeBeanData.weight} oz` || "Share"}
                </Button>
                <Button size="small" color="primary">
                    {`\$${coffeeBeanData.price}` || "Learn More"}
                </Button>
            </CardActions>
        </Card>
    );
}

export default ImgMediaCard
