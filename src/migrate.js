"use strict";

import { versionUtilities } from "necessary";

import { migrateToVersion2 } from "./state/version2";
import { migrateToVersion3 } from "./state/version3";
import { migrateToVersion4 } from "./state/version4";
import { migrateToVersion5 } from "./state/version5";
import { VERSION_1, VERSION_2, VERSION_3, VERSION_4, VERSION_5 } from "./versions";

const { migrate } = versionUtilities;

export function migrateState(state) {
  const migrationMap = {
          [VERSION_1]: migrateToVersion2,
          [VERSION_2]: migrateToVersion3,
          [VERSION_3]: migrateToVersion4,
          [VERSION_4]: migrateToVersion5
        },
        latestVersion = VERSION_5;

  state = migrate(state, migrationMap, latestVersion);

  return state;
}
