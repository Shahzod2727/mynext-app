import React, { Fragment } from "react";

import Link from "next/link";

export default function News() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framwork">
            NextJs Is A Great Framwork
          </Link>
        </li>
        <li>Someting else</li>
      </ul>
    </Fragment>
  );
}
