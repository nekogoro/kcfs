# kcfs
KanColle Fit-gun Sort

## JSON の設定（暫定）

```
[
  {
    "id":"1", // 図鑑ID
    "type":"小口径主砲", // 主砲、魚雷など
    "title":"12cm単装砲改二", // 装備名
    "bonus":[ // 装備ボーナスの配列
      {
        "synergy":"単体", // 「単体」か「相互シナジー」
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
