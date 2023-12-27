import style from "./widget2.module.css";
import SaleItem from "../saleItem/saleItem";
export default function Widget2() {
  return (
    <div id={style.sales_container}>
      <h2>Sales progress</h2>
      <div id={style.items_container}>
        <SaleItem
          image="assets/saleItemsIcon/Icon.png"
          title="Briviba Sass"
          subtext="PHP, SQLite, Artison CLImm"
        />
        <SaleItem
          image="assets/saleItemsIcon/Icon (1).png"
          title="Briviba Sass"
          subtext="PHP, SQLite, Artison CLImm"
        />
        <SaleItem
          image="assets/saleItemsIcon/Icon (2).png"
          title="Briviba Sass"
          subtext="PHP, SQLite, Artison CLImm"
        />
        <SaleItem
          image="assets/saleItemsIcon/Icon (3).png"
          title="Briviba Sass"
          subtext="PHP, SQLite, Artison CLImm"
        />
      </div>
    </div>
  );
}
