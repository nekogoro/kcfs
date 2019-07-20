# kcfs
KanColle Fit-gun Sort

## JSON の設定（暫定）

```
[
  {
    "id":"000", // 図鑑ID 数字3桁
    "type":"小口径主砲", // 主砲、魚雷など
    "title":"12cm単装砲改二", // 装備名
    "bonus":[ // 装備ボーナスの配列
      {
        "synergy":"単体", // 「単体」か相互シナジーが確認されている組み合わせ
        "items":[ // 艦種別ボーナス
          {
            "text":"火力+2　対空+1　回避+3", // ボーナスの内容
            "ship_class":"kamikaze" // クラス（時雨改二など個別に記載することもある）
          }
        ]
      }
    ]
  }
}
```

## ship_class 例

|艦娘|表記|備考|
|---|---|---|
|金剛型全体|kongou||
|金剛|kongou_kongou|`{class}_{name}`|
|金剛改|kongou_kongou_1|未改造と改が省略される場合もある|
|金剛改二|kongou_kongou_2||
|金剛改二丙|kongou_kongou_2c|`甲=a`, `乙=b`, `丙=c` など|
|浜風乙改|kagerou_hamakaze_b1|「乙」と「改」の位置を反映|
|鈴谷航改二|mogami-v_suzuya_v2|`航=v`(暫定), `mogami`(重巡) と `mogami-v`(軽空母)は区別する(暫定)|
