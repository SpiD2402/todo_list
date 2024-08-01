
import {
    Container, Typography, Paper, Button, Grid, Avatar,
    Chip, Box, Card, CardContent, CircularProgress
} from '@mui/material';
import { Person, Email, Work, Edit,  AssignmentTurnedIn } from '@mui/icons-material';
import {useFetch} from "../hooks/useFetch.js";


export const UserProfile = () => {

    const {data,isLoading} = useFetch();

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }
    const aunPorHacer = data.allTask.filter(task => task.status === 'Pending');

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item>
                        <Avatar
                            alt={data.name}
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h4">{data.name} {data.last_name}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">@{data.username}</Typography>
                        <Box sx={{ mt: 1 }}>
                            <Chip icon={<Email />} label={data.email} sx={{ mr: 1 }} />
                            <Chip icon={<Work />} label={data.role.name.split('_')[1]} color="primary" />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" startIcon={<Edit />}>
                            Edit Profile
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                <Person sx={{ mr: 1, verticalAlign: 'middle' }} />
                                Account Details
                            </Typography>
                            <Typography variant="body1">
                                <strong>Username:</strong> {data.username}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> {data.email}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Role:</strong> {data.role.name.split('_')[1]}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                <AssignmentTurnedIn sx={{ mr: 1, verticalAlign: 'middle' }} />
                                Task Summary
                            </Typography>

                            <Typography variant="body1">
                                    <strong>Count Tasks:</strong> {aunPorHacer.length}
                            </Typography>
                            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                                View All Tasks
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserProfile;