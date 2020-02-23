import React from 'react'
import PropTypes from 'prop-types'

import styles from './BurgerIngredients.module.css'


const BurgerIngredients = props => {
    let ingredients = null

    switch (props.type){
        case ('bread-bottom'):
            ingredients = <div className={styles.BreadBottom}> </div>
            break;

        case ('bread-top'):
            return ingredients = (
            <div className={styles.BreadTop}>
                 <div className={styles.Seeds1}></div>
                 <div className={styles.Seeds2}></div>
            </div>
            );

        case ('meat'):
            ingredients = <div className={styles.Meat}></div>
            break;

        case ('cheese'):
            ingredients = <div className={styles.Cheese}> </div>
            break; 

        case ('salad'):
            ingredients = <div className={styles.Salad}> </div>
            break;
        
        case ('bacon'):
            ingredients = <div className={styles.Bacon}> </div>
            break;
        default :
                ingredients = null
    }

    return ingredients
}


BurgerIngredients.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredients
