import style from "./dashboard.module.css";
import Header from "../header/header";
import Card from "../headerCards/card";
import Widget1 from "../widget1/widget1";
import Widget2 from "../widget2/widget2";
import SectionHeader from "../sectionHeader/sectionHeader";
import NewItem from "../newItem/newItem";
import Graph from "../graph/graph";
export default function Dashboard() {
  return (
    <section className={style.main_container}>
      <Header />
      <div className={style.card_container}>
        <Card url="assets/icons/Library.png" title="Saas Applications" />
        <Card
          url="assets/icons/Layout-4-blocks-gray.png"
          title="Main Categories"
        />
        <Card url="assets/icons/CombinedShape.png" title="Video Tutorials" />
        <Card url="assets/icons/Equalizer-gray.png" title="Sales Statistics" />
        <Card url="assets/icons/Shield-check.png" title="ARC Security Check" />
      </div>
      <section id={style.section1}>
        <Widget1 />
        <Widget2 />
      </section>
      <section id={style.section2}>
        <SectionHeader title="New Arrivals" />
        <div id={style.items_container}>
          <NewItem
            title="Sant Outstanding"
            image="assets/newArrivals/184-plurk.png"
            price="2,000,000"
            status="Approved"
            bg="#EEE5FF"
            color="#8950FC"
          />
          <NewItem
            title="Telegram Application"
            image="assets/newArrivals/186-telegram.png"
            price="4,600,000"
            bg="#FFF4DE"
            color="#FFA800"
            status="In Progress"
          />
          <NewItem
            title="Cisco Management"
            image="assets/newArrivals/194-puzzle.png"
            price="560,000"
            bg="#C9F7F5"
            color="#1BC5BD"
            status="Success"
          />
          <NewItem
            title="HR Management"
            image="assets/newArrivals/182-bebo.png"
            price="57,000"
            bg="#FFE2E5"
            color="#F64E60"
            status="Rejected"
          />
          <NewItem
            title="KTR Mobile Application"
            image="assets/newArrivals/187-kickstarter.png"
            price="45,200,000"
            bg="#FFF4DE"
            color="#FFA800"
            status="In Progress"
          />
        </div>
      </section>
      <section id={style.section3}>
        <SectionHeader title="Recent Stats" />
        <Graph />
      </section>
    </section>
  );
}
