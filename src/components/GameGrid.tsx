import { useEffect, useState } from 'react';
import ApiClient from '../services/ApiClient';
import { Spinner, Text } from '@chakra-ui/react';

interface GamesResponse {
    count: number;
    results: Game[];
}

interface Game {
    id: number;
    name: string;
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        ApiClient.get<GamesResponse>('games')
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <ul>
            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </ul>
    );
}

export default GameGrid;
