//import "./App.css";
import { Card } from "./components/Card.jsx";
import Message from "./components/Message.jsx";
import { People } from "./components/People.jsx";

import reactLogo from "./assets/react.svg";
import { Cards } from "./components/Cards.jsx";
import { PeopleTable } from "./components/PeopleTable.jsx";
import { Header } from "./core/header/Header.jsx";

import { Counter } from "./components/Counter.jsx";
import { Accordion } from "./components/collapsable/Accordion.jsx";
import { Accordion2 } from "./components/collapsable/Accordion2.jsx";
import { Collapsable } from "./components/collapsable/Collapsable.jsx";

import { useState, useEffect } from "react";

import { Clock } from "./components/collapsable/Clock.jsx";
import { Route, Routes } from "react-router-dom";
import { NoRoute } from "./core/NoRoute.jsx";
import { Jsonplaceholder } from "./components/posts/Jsonplaceholder.jsx";
import { PostsInfo } from "./components/posts/postsInfo.jsx";
import { Students } from "./components/training/Students.jsx";
import { StudentInfo } from "./components/training/studentInfo.jsx";
import { Mui } from "./components/Mui.jsx";

function App() {
  let cardsInfo = [
    {
      title: "First Title",
      content: "First content",
    },
    {
      title: "Second Title",
      content: "Second content",
    },
    {
      title: "Third Title",
      content: "Third content",
    },
  ];

  {
    /* <h1>Hello {name} </h1>
      <Message /> */
  }
  {
    /* <People /> */
  }
  {
    /* <PeopleTable /> */
  }
  {
    /* <Card title="First title" content="some content" />
      <Card title="Second title" content="some content" />
      <Card title="Third title" content="some content" /> */
  }

  {
    /* <Cards data={cardsInfo} /> */
  }

  {
    /* <Counter /> */
  }
  {
    /* <Accordion data={cardsInfo} /> */
  }
  {
    /* <Accordion
        title="First title"
        content="Users\rahel\dev\Hamburg Coding school\react\project-react\node_modules\@babel\parser\lib\index.js:10548:23) "
      /> */
  }
  {
    /* <Accordion title="Second title" content="Second title content" /> */
  }
  {
    /* <Collapsable data={cardsInfo} /> */
  }
  {
    /* <Accordion2 data={cardsInfo} /> */
  }

  /* <Clock /> */
  // const { postId } = useParams();
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Cards data={cardsInfo} />} />
          <Route path="clock" element={<Clock />} />
          <Route
            path="collapsable"
            element={<Collapsable data={cardsInfo} />}
          />

          <Route
            path="composite"
            element={
              <>
                <Cards data={cardsInfo} /> <Clock />
              </>
            }
          />
          <Route path="randomText" element={<p>Hello there!!!</p>} />

          <Route path="json" element={<Jsonplaceholder />} />

          <Route path="json/:postId" element={<PostsInfo />} />

          <Route path="students" element={<Students />}>
            <Route path=":studentId" element={<StudentInfo />} />
          </Route>
          <Route path="mui" element={<Mui />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </main>
      <footer>Made in 2025</footer>
    </>
  );
}

export default App;
