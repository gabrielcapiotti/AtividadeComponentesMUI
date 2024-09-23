import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { SearchContainer, SearchIconWrapper, StyledInputBase } from './BarraNavegacaoEstilo';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

export function BarraNavegacao() {
    const [ancoraEl, setAncoraEl] = React.useState<null | HTMLElement>(null);
    const [ancoraMenuMobile, setAncoraMenuMobile] = React.useState<null | HTMLElement>(null);

    const menuAberto = Boolean(ancoraEl);
    const menuMobileAberto = Boolean(ancoraMenuMobile);

    const abrirMenuPerfil = (evento: React.MouseEvent<HTMLElement>) => {
        setAncoraEl(evento.currentTarget);
    };

    const fecharMenuMobile = () => {
        setAncoraMenuMobile(null);
    };

    const fecharMenu = () => {
        setAncoraEl(null);
        fecharMenuMobile();
    };

    const abrirMenuMobile = (evento: React.MouseEvent<HTMLElement>) => {
        setAncoraMenuMobile(evento.currentTarget);
    };

    const menuId = 'menu-perfil';
    const renderMenu = (
        <Menu
            anchorEl={ancoraEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={menuAberto}
            onClose={fecharMenu}
        >
            <MenuItem onClick={fecharMenu}>Perfil</MenuItem>
            <MenuItem onClick={fecharMenu}>Minha conta</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'menu-perfil-mobile';
    const renderMenuMobile = (
        <Menu
            anchorEl={ancoraMenuMobile}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={menuMobileAberto}
            onClose={fecharMenuMobile}
        >
            <MenuItem>
                <IconButton size="large" aria-label="4 novas mensagens" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Mensagens</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="17 novas notificações"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notificações</p>
            </MenuItem>
            <MenuItem>
                <Tooltip title="Delete">
                    <IconButton
                        size="large"
                        aria-label="deletar conta"
                        color="inherit"
                        onClick={() => console.log('Deletar clicado')}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <p>Deletar Conta</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="abrir menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                    >
                        API POKEMON
                    </Typography>
                    <SearchContainer>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar..."
                            inputProps={{ 'aria-label': 'buscar' }}
                        />
                    </SearchContainer>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Tooltip title="4 novas mensagens">
                            <IconButton size="large" aria-label="4 novas mensagens" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="17 novas notificações">
                            <IconButton
                                size="large"
                                aria-label="17 novas notificações"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Perfil do usuário">
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="conta do usuário atual"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={abrirMenuPerfil}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Tooltip title="Mais opções">
                            <IconButton
                                size="large"
                                aria-label="mostrar mais opções"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={abrirMenuMobile}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenuMobile}
            {renderMenu}
        </Box>
    );
}
