import style from "./header.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <ul className={style.navbar}>
        <li>
          <img src="assets/icons/Search.png" alt="search" />
        </li>
        <li>
          <img src="assets/icons/Compiling.png" alt="compiling" />
        </li>
        <li>
          <img src="assets/icons/Equalizer.png" alt="equalizer" />
        </li>
        <li>
          <img src="assets/icons/Cart.png" alt="cart" />
        </li>
        <li>
          <img src="assets/icons/Layout-4-blocks.png" alt="cart" />
        </li>
        <li className={style.user_name}>Nick Thomas</li>
      </ul>
      <div className={style.navbar2}>
        <div>
          <span id={style.min_dashboard}>Dashboard</span>
          <span id={style.add_btn}>Add New</span>
        </div>
        <div className={style.min_container}>
          <span className={style.highlited}>Today</span>
          <span>Month</span>
          <span>Year</span>
          <span className={style.highlited}>Actions</span>
        </div>
      </div>
    </header>
  );
}
