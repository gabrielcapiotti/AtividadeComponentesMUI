import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Macarrao from '../../../assets/Macarrao.jpg'
import Pandora from '../../../assets/download (60).jpg'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export function CardReceitas() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img src={Pandora} style={{ height: "50px" }} />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Macarrão Alho e Óleo"
                subheader="Setembro 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={Macarrao}
                alt="Macarrão Alho e Óleo"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Essa é uma receita clássica de Macarrão Alho e Óleo, um prato simples,
                    mas extremamente saboroso. Abaixo está a receita tradicional para prepará-lo:
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>Método</Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        <b>Cozinhe o Macarrão:</b>
                        Em uma panela grande, ferva água com sal e cozinhe o espaguete até ficar al dente,
                        seguindo as instruções da embalagem. Escorra e reserve, reservando um pouco da água do cozimento (cerca de 1 xícara).
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        <b>Prepare o Alho e Óleo:</b>
                        Em uma frigideira grande, aqueça o azeite em fogo médio.
                        Adicione as fatias de alho e refogue até que fiquem douradas e perfumadas.
                        Cuidado para não queimá-las, pois o sabor do alho queimado pode amargar o prato.
                        Se desejar um toque picante, adicione a pimenta calabresa ao alho e ao azeite.
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        <b>Misture com o Macarrão:</b>
                        Adicione o macarrão cozido à frigideira com o alho e óleo.
                        Mexa bem para que o macarrão absorva o sabor do alho e do azeite.
                        Se necessário, adicione um pouco da água do cozimento reservada
                        para ajudar a misturar tudo e dar uma consistência mais cremosa.
                    </Typography>
                    <Typography>
                        <b>Tempere com sal a gosto.</b>
                        Desligue o fogo e adicione a salsinha picada.
                        Misture bem e, se desejar, polvilhe com parmesão ralado.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
