"use strict";

import { versionUtilities } from "necessary";

import { migrateToVersion2 } from "./state/version2";
import { migrateToVersion3 } from "./state/version3";
import { VERSION_1, VERSION_2, VERSION_3 } from "./versions";

const { migrate } = versionUtilities;

export function migrateState(state) {
  const migrationMap = {
          [VERSION_1]: migrateToVersion2,
          [VERSION_2]: migrateToVersion3
        },
        latestVersion = VERSION_3;

  state = migrate(state, migrationMap, latestVersion);

  return state;
}
