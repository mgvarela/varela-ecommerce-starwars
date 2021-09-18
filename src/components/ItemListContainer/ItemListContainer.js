
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import React, {lazy, Suspense} from 'react';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';


const ItemListContainer = () => {
    const ItemLista = lazy(() => import('../ItemList/ItemList'));

     return (
        <Suspense fallback={<LoadingIndicator/>}>
          <ItemLista />
        </Suspense>
  );
}

export default  ItemListContainer