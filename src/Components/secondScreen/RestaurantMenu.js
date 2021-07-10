import '../../Styles/RestaurantMenu.css'
import DishList from './DishList';

function RestaurantMenu(){
    return(
        <div className='wrapper'>
            <h6>наше меню</h6>
            <h2>Вкусно от шеф-повара</h2>
            <DishList/>
        </div>
    )
}
export default RestaurantMenu;