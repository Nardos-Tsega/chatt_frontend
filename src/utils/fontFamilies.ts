import {isIOS} from './platform';

export const fontFamilies = {
  LORA: {
    normal: isIOS() ? 'Lora Regular' : 'Lora-Regular',
    medium: isIOS() ? 'Lora Medium' : 'Lora-Medium',
    bold: isIOS() ? 'Lora Bold' : 'Lora-Bold',
  },
  BODONI: {
    normal: isIOS() ? 'Bodoni Moda SC 72pt Regular' : 'BodoniModaSC_72pt-Regular',
    medium: isIOS() ? 'Bodoni Moda SC 72pt Medium' : 'BodoniModaSC_72pt-Medium',
    bold: isIOS() ? 'Bodoni Moda SC 72pt Bold' : 'BodoniModaSC_72pt-Bold',
  },
};
