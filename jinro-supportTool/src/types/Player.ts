//日単位変動データ
export type DailyRecord = {
  day: number;              // 今何日目か
  isAlive: boolean;         // その日に生存していたか
  votedToId: number | null; //投票先
  suspiciousId?: number[];  //黒印象（疑ってる）
  trustedId?: number[];     //白印象（信じてる）
  memo?: string;             //自由記述メモ
  coRole?: string;          // COした役職
};

//総合プレイヤーデータ
export type Player = {
  id: number;             // プレイヤー番号
  name: string;           // プレイヤー名
  realRole?: string;      // 本当の役職
  
  // 日単位の全記録を配列で保持
  records: DailyRecord[]; 
};