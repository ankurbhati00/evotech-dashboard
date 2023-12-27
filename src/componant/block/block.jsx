import style from "./block.module.css";

export default function Block({date, darkHeight, lightHeight}) {
  return (
    <div className={style.block_container}>
      <div className={style.blocks} >
        <div className={style.dark_block} style={{height:darkHeight}}></div>
        <div className={style.light_block} style={{height:lightHeight}}></div>
      </div>
      <div className={style.date}>{date}</div>
    </div>
  );
}
