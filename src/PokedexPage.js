import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  makeStyles
} from "@material-ui/core";

// Define os estilos CSS para os componentes
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    "&:hover": {
      transform: "scale(1.03)"
    },
    transition: "transform .2s"
  },
  media: {
    height: 0,
    paddingTop: "100%",
    backgroundSize: "contain"
  }
});

function PokedexPage() {
  const classes = useStyles();
  // Define o estado para a lista de Pokémon
  const [listaDePokemon, setListaDePokemon] = useState([]);

  // Busca os dados da API
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setListaDePokemon(response.data.results);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {/* Mapeia a lista de Pokémon e cria um Card para cada Pokémon */}
      {listaDePokemon.map((pokemon, index) => (
        <Grid item xs={4} key={index}>
          <Card className={`${classes.root} card`}>
            {}
            <CardMedia
              className={classes.media}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              title={pokemon.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {/* Link para a página de detalhes do Pokémon */}
                <Link to={`/pokemon/${index + 1}`}>
                  {pokemon.name.toUpperCase()}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PokedexPage;
