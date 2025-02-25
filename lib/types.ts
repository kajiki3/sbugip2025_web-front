export interface MentalItem {
    overall: string;      // 概要
    challenge: string;    // 課題
    advise: string;       // アドバイス
    point: number;        // 0～100 の満足度（数値が高いほど良い）
}

export interface Mental {
    id: string;                        // UUID 形式の文字列
    date: string;                      // "YYYY-MM-DD" 形式の文字列（Date 型に変換することも可能）
    friendship: MentalItem;            // 友人関係
    school: MentalItem;                // 学校
    behavior: MentalItem;              // 行為
    sociality: MentalItem;             // 向社会性
    cognitive_features: MentalItem;    // 認知的特徴
    stress_resistance: MentalItem;     // ストレス耐性
    physical_symptoms: boolean;        // 体の症状
    mental_symptoms: boolean;          // 精神症状
    self_harm: boolean;                // 自傷行為
    insomnia: boolean;                 // 不眠症
}