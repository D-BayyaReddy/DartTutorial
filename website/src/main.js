/*
  =============================================================================
  DART MASTER: APPLICATION ENTRY POINT (BOOTSTRAP)
  =============================================================================
*/

import { DartMasterApp } from "./app/app.js";

// Mount and initialize the app on DOM content load
document.addEventListener("DOMContentLoaded", () => {
  const app = new DartMasterApp();
  app.init().catch(err => {
    console.error("Critical error during application initialization:", err);
  });
});
