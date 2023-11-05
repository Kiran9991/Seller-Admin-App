const ProductList = (props) => {
  const deleteListItem = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <li>
      {props.sellingPrice} - {props.productName}
      <button onClick={deleteListItem}>Delete</button>
    </li>
  );
};

export default ProductList;
