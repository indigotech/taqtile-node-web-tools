import { Plugin } from 'webpack';

import { ConfigComposer } from './config.composer';
import { setProperty } from './set-property';

/**
 * Add one or more plugins to config
 * @param plugins
 */
export function addPlugins(...plugins: Plugin[]): ConfigComposer {
  return setProperty('plugins', plugins);
}
