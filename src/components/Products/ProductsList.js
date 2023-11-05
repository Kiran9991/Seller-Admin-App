import TotalProductValue from "./TotalValue";
import ProductList from "./ProductListItem";

const Products = (props) => {
  let total = 0;
  for (let val of props.lists) {
    total += Number(val.sellingPrice);
  }

  return (
    <>
      <ul>
        {props.lists.map((item) => {
          return (
            <ProductList
              key={item.productId}
              id={item.productId}
              sellingPrice={item.sellingPrice}
              productName={item.productName}
              onDeleteItem={props.onDelete}
            />
          );
        })}
      </ul>
      <TotalProductValue totalValue={total} />
    </>
  );
};

export default Products;
