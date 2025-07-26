"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    const sentryError = error instanceof Error ? error : new Error(String(error));
    Sentry.captureException(sentryError);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} />
      </body>
    </html>
  );
}
