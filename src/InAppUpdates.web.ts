// @ts-expect-error
import { compareVersions } from './utils';
import InAppUpdatesBase from './InAppUpdatesBase';
import type {
  CheckOptions,
  NeedsUpdateResponseBase,
} from './types';
import { getVersion } from 'react-native-device-info';

const noop = () => {};

export default class InAppUpdates extends InAppUpdatesBase {
  public checkNeedsUpdate(
    checkOptions?: CheckOptions
  ): Promise<NeedsUpdateResponseBase> {
    const { curVersion } = checkOptions || {};

    let appVersion: string;
    if (curVersion) {
      appVersion = curVersion;
    } else {
      appVersion = getVersion();
    }

    return Promise.resolve({
      shouldUpdate: false,
      storeVersion: appVersion,
      reason: "",
    });
  }

  startUpdate(): Promise<void> {
    return Promise.resolve();
  }

  installUpdate = noop;
  addStatusUpdateListener = noop;
  removeStatusUpdateListener = noop;
  addIntentSelectionListener = noop;
  removeIntentSelectionListener = noop;
}
