// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { birds } from "../data/birds";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://birdsift.com/api/birds", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(birds);
  }),
];
