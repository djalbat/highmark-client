"use strict";

import { versionUtilities } from "necessary";

import { migrateToVersion2 } from "./state/version2";
import { VERSION_1, VERSION_2 } from "./versions";

const { migrate } = versionUtilities;

export function migrateState(state) {
  const migrationMap = {
          [VERSION_1]: migrateToVersion2
        },
        latestVersion = VERSION_2;

  state = migrate(state, migrationMap, latestVersion);

  return state;
}
