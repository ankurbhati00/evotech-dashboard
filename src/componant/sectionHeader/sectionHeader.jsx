import style from "./sectionHeader.module.css";

export default function SectionHeader({ title }) {
  return (
    <div className={style.container}>
      <div>
        <h2>{title}</h2>
        <h4>More than 400+ new members</h4>
      </div>
      <div className={style.buttons_container}>
        <button>Month</button>
        <button>Week</button>
        <button>Day</button>
      </div>
    </div>
  );
}
