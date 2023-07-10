/**
 * https://vuetifyjs.com
 * https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
 */

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  theme: { defaultTheme: 'dark' },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
});
