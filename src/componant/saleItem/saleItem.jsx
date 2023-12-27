import style from "./saleItem.module.css";

export default function SaleItem({ image, title, subtext }) {
  return (
    <div className={style.item_container}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className={style.content}>
        <h4>{title}</h4>
        <div>{subtext}</div>
      </div>
    </div>
  );
}
