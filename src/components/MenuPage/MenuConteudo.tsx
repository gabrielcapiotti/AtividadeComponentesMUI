import { BarraNavegacao } from '../BarraNavegacao/BarraNavegacao';
import { CardReceitas } from './Cards/CardConteudo';
import { Baixo, Centro, MenuEstilo, Paginar } from './MenuEstilo';
import { Pagination } from '@mui/material';


export function MenuConteudo() {

    return (
        <>
            <BarraNavegacao />
            <MenuEstilo>
                <Centro>
                    <CardReceitas />
                </Centro>
            </MenuEstilo>
            <Baixo>
                <Paginar>
                    <Pagination
                        color="primary"
                        size="large"
                    />
                </Paginar>

            </Baixo>
        </>
    );
}
