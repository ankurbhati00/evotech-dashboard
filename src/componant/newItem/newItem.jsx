import style from "./newItem.module.css";

export default function NewItem({ title, image, status, price , bg, color}) {
  return (
    <div className={style.container}>
      <div >
        <img src={image} alt={title} />
      </div>
      <div className={style.text_content}>
        <h3>
          <span>{title}</span>
          <span>{`$${price}`}</span>
        </h3>
        <h5>
          <span>
            <b>FTP:</b> bprow@bnc.cc
          </span>
          <span>Paid</span>
        </h5>
      </div>

      <div className={style.status_button}>
        <button style={{backgroundColor:bg, color}}>{status}</button>
      </div>
      <div className={style.buttons_container}>
        <button>
          <img src="assets/newArrivals/Button Settings.png" alt={title} />
        </button>
        <button>
          <img src="assets/newArrivals/Button Edit.png" alt={title} />
        </button>
        <button>
          <img src="assets/newArrivals/Button Trash.png" alt={title} />
        </button>
      </div>
    </div>
  );
}
