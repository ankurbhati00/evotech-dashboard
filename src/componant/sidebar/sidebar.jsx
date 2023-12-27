import style from './sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={style.sidebar_container}>
      <h1>DASHBOARD</h1>
      <h3>Dashboard</h3>
      <h5>CUSTOM</h5>
      <ul>
        <li>
          <dl>
            <dt>Applications</dt>
            <dd>- users</dd>
            <dd>- contacts</dd>
            <dd>- chat</dd>
          </dl>
        </li>
        <li>Pages</li>
      </ul>
    </aside>
  );
}
