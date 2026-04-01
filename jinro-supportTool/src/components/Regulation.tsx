import { useState } from "react";

export type Regulation = {
  readonly numbers: number;
  readonly text: string;
  readonly isCustom?: boolean;
};

const REGULATION_PRESETS: readonly Regulation[] = [
  {numbers : 9, text:'人村：狼２、狂人１、占１、霊１、狩１、村３'},
  {numbers : 13, text:'人村：狼３、狂人１、占１、霊１、狩１、村６'},
  {numbers : 14, text:'人村：狼３、狂人１、占１、霊１、狩１、村７'}
] as const;

export const RegulationManager = () => {
  //レギュレーション判定
  const [selectReg, setSelectReg] = useState(REGULATION_PRESETS[1]);

  //特殊レギュ用カスタム
  const handleSelect (num: number) => {
    const found = REGULATION_PRESETS.find(r => r.numbers === num);
    if(found) setSelectReg(found);
  }
}