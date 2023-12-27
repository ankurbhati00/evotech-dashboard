import style from "./widget1.module.css";

export default function Widget1() {
  return (
    <div id={style.category_container}>
      <div id={style.box}>
        <h2>
          Categories <span>Export</span>
        </h2>
        <img src="assets/icons/Vector 5.png" alt="" />
      </div>
    </div>
  );
}
