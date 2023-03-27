import React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const User = () => {
    return (
        <Container component="main" maxWidth="xs" sx={{
            marginTop: '150px',
        }}>
            <CssBaseline />
            <div>
                <Avatar sx={{
                    marginLeft: '177px',
                    backgroundColor: '#011638'
                }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{
                    margin: '16px 0',
                    textAlign: 'center'
                }}>
                    Login
                </Typography>
                <form sx={{
                    width: '100%',
                    marginTop: '8px'
                }} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            margin: '16px 0',
                            backgroundColor: '#011638',
                        }}
                    >
                        Acessar
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Esqueceu a senha?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Register" variant="body2">
                                {"Não possuí conta? Cadastre-se"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}

export default User