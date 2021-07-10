import '../../Styles/RestaurantMenu.css'

const Dish = ({title, price, description}) =>
<div className='dish'>
    <h6>{title} / {price}</h6>
    <p> {description} </p>
</div>

const DishList = () =>
<div className='dishList'>
    <Dish 
        title='ГРУШЕВЫЙ САЛАТ' 
        price='11 $'
        description='Груши Reid’s Orchard / Горькая зелень / Гранола / Большой светлячок / Черные и синие фермы / Винегрет из кедровых орехов'
    />
    <Dish 
        title='FARM GREENS' 
        price='9 $'
        description='Медовый винегрет / Гренки с домашним сыром / Прекрасные травы'
    />
    <Dish 
        title='RICOTTA GNUD' 
        price='18 $'
        description='Маринованная сардина / красная смородина / лисички / кедровые орехи / мантекато вителло / фенхель / оливки / пепитас'
    />
    <Dish 
        title='BRODETTO DI PESCE' 
        price='9 $'
        description='Адриатический суп из морепродуктов / моллюски / креветки / ливорнский / лангустинский гребешок / сельдерей / оливки'
    />
    <Dish 
        title='КАЛЕ НА ГРИЛЕ' 
        price='9 $'
        description='Груши Reid’s Orchard / Горькая зелень / Гранола / Большой светлячок / Черные и синие фермы / Винегрет из кедровых орехов'
    />
    <Dish 
        title='КАНЕСТРЕЛЛИ' 
        price='18 $'
        description='Груши Рейда Орчатда / Горькая зелень / Гренки с домашним сыром / Маринованная сардина / Лисички / Моллюски'
    />
</div>

function Menu(){
    return(
        <div className='wrapper'>
            <h6>наше меню</h6>
            <h2>Вкусно от шеф-повара</h2>
            <DishList/>
        </div>
    )
}
export default Menu;