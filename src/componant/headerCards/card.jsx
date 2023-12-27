import style from "./card.module.css";

export default function Card({ url, title }) {
  return (
    <div className={style.card} >
      <img src={url} alt={title} />
      <h1>{title}</h1>
    </div>
  );
}
