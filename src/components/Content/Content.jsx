import React from 'react';

import ContentElement from "./ContentElement";
import styles from "./Content.module.css";

let Content = React.memo(({content, addProduct, deleteProduct, followingInProgress, minusProduct, plusProduct}) => {
    let ElementContent = content.map(p => <ContentElement key={p.id}
        id={p.id}
        title={p.title}
        summ={p.summ}
        followed={p.followed}
        price={p.price}
        description={p.description}
        photo={p.photo}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
        minusProduct={minusProduct}
        plusProduct={plusProduct}
        followingInProgress={followingInProgress} />)
    return (
        <div className={styles.block__element}>
            {ElementContent}
        </div>
    )
});

export default Content;