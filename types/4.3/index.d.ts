// Minimum TypeScript Version: 4.3
import style9, { CustomProperties } from '../index';
import { AtRules } from '../Style';

type AtRulesKey = `${AtRules} ${string}`;

declare module '../Style' {
  type Style = {
    [key in AtRulesKey]: Style;
  };
}

export default style9;
export { CustomProperties };
