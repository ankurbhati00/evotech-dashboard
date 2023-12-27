import style from "./graph.module.css";
import Block from "../block/block";
export default function Graph() {
  return (
    <div id={style.graph_container}>
      <div className={style.container1}>
        <div className={style.row}>
          <span className={style.units}>150</span>
          <span>
            <hr />
          </span>
        </div>
        <div className={style.row}>
          <span className={style.units}>120</span>
          <span>
            <hr />
          </span>
        </div>
        <div className={style.row}>
          <span className={style.units}>90</span>
          <span>
            <hr />
          </span>
        </div>
        <div className={style.row}>
          <span className={style.units}>60</span>
          <span>
            <hr />
          </span>
        </div>
        <div className={style.row}>
          <span className={style.units}>30</span>
          <span>
            <hr />
          </span>
        </div>
        <div className={style.row}>
          <span className={style.units}>0</span>
          <span>
            <hr />
          </span>
        </div>
      </div>
      {/* graph blocks */}
      <div className={style.container2}>
        <Block darkHeight="60%" lightHeight="50%" date="1 Aug" />
        <Block darkHeight="80%" lightHeight="70%" date="8 Aug" />
        <Block darkHeight="90%" lightHeight="80%" date="20 Aug" />
        <Block darkHeight="55%" lightHeight="45%" date="25 Aug" />
        <Block darkHeight="85%" lightHeight="75%" date="5 Sep" />
        <Block darkHeight="50%" lightHeight="40%" date="10 sep" />
      </div>
    </div>
  );
}
