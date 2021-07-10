const Dish = ({title, price, description}) =>
<div className='dish'>
    <h6>{title} / {price}</h6>
    <p> {description} </p>
</div>

export default Dish;