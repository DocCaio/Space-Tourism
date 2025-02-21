import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components";
import { Router } from "next/router";

export default function Home() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route path='/' extract></Route>
          <Route path='/destination'></Route>
          <Route path='/crew'></Route>
          <Route path='/technology'></Route>

        </Switch>

      </Header>

    </Router>
  );
}
