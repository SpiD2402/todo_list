import{ useState } from 'react';
import { useFetch } from "../hooks/useFetch.js";
import { Card, CardContent, Typography, Grid, Chip, Box, CircularProgress, TextField } from '@mui/material';
import { format } from 'date-fns';

export const ProfilePage = () => {
    const { data, isLoading } = useFetch();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const formatDate = (dateString) => {
        return format(new Date(dateString), 'dd/MM/yyyy');
    };

    // Verificar que data.allTask exista
    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    // Asegúrate de que data.allTask es una lista y tiene datos
    const tasks = data.allTask || [];

    // Filtrar tareas ,categoria y prioridades
    const filteredTasks = tasks.filter(task =>
        (selectedCategory === 'All' || task.category.name === selectedCategory) &&
        (task.title.toLowerCase().includes(searchTerm.toLowerCase())
            || task.priorities.some(priority => priority.name.toLowerCase().includes(searchTerm.toLowerCase()))

        )
    );

    // Obtener categorías  para el select
    const categories = Array.from(new Set(tasks.map(task => task.category.name)));
    return (


        <Box display="flex" flexDirection="column" gap={2} p={3}>

            <div className={"d-flex gap-5"}>
                <TextField className={"w-50"}
                           fullWidth
                           id="search"
                           label="Buscar"
                           variant="filled"
                           onChange={(e) => setSearchTerm(e.target.value)}
                />
                <TextField className={"w-50"}
                           fullWidth
                           id="category"
                           label="Filtrar por categoría"
                           variant="filled"
                           select
                           SelectProps={{ native: true }}
                           onChange={(e) => setSelectedCategory(e.target.value)}
                           value={selectedCategory}
                >
                    <option value="All">All</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </TextField>
            </div>


            <Grid container alignItems={"center"}  spacing={3}>
                {filteredTasks.map((tarea, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                                        <Box display={"flex"} gap={'3px'} >
                                            <Chip label={tarea.category.name} color="primary" size="small" />
                                            <Chip
                                                label={tarea.status}
                                                color={tarea.status === 'Completada' ? 'success' : 'warning'}
                                                size="small"/>
                                        </Box>
                                    <Typography variant="caption" color="text.secondary">
                                        {formatDate(tarea.create_at)}
                                    </Typography>
                                </Box>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {tarea.title}
                                </Typography>
                                <Box display="flex" flexWrap="wrap" gap={1}>
                                    {tarea.priorities.map((priority, index) => (
                                        <Chip
                                            key={index}
                                            label={priority.name}
                                            style={{ backgroundColor: priority.color, color: '#fff' }}
                                            size="small"
                                        />
                                    ))}
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>


                ))}

            </Grid>
        </Box>
    );
};

