import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from "@material-ui/core";

// Define os estilos CSS para os componentes
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    marginTop: "20px"
  },
  media: {
    height: 140
  }
});

function PokemonDetailsPage() {
  const classes = useStyles();
  // Obtém o ID do Pokémon da URL
  const { id } = useParams();
  // Define o estado para os detalhes do Pokémon
  const [detalhesDoPokemon, setDetalhesDoPokemon] = useState(null);

  // Busca os dados da API
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setDetalhesDoPokemon(response.data);
    });
  }, [id]);

  if (!detalhesDoPokemon) return null;

  return (
    // Card com os detalhes do Pokémon
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={detalhesDoPokemon.sprites.front_default}
        title={detalhesDoPokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {detalhesDoPokemon.name.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Tipo:{" "}
          {detalhesDoPokemon.types
            .map((typeInfo) => typeInfo.type.name)
            .join(", ")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Altura: {detalhesDoPokemon.height}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Peso: {detalhesDoPokemon.weight}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokemonDetailsPage;
