const duplicates = [
    {
        "idiom": "阿塞拜疆",
        "idiom2": "阿塞拜彊",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "c",
            "final": "oi",
            "tone": "3"
        },
        "w2": {
            "initial": "b",
            "final": "aai",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oeng",
            "tone": "1"
        }
    },
    {
        "idiom": "阿加力膠",
        "idiom2": "亞加力膠",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ik",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "aau",
            "tone": "1"
        }
    },
    {
        "idiom": "阿狗阿貓",
        "idiom2": "亞狗亞貓",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w3": {
            "initial": "m",
            "final": "aau",
            "tone": "1"
        }
    },
    {
        "idiom": "阿茂整餅",
        "idiom2": "亞茂整餅",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "m",
            "final": "au",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "ing",
            "tone": "2"
        },
        "w3": {
            "initial": "b",
            "final": "eng",
            "tone": "2"
        }
    },
    {
        "idiom": "阿美尼亞",
        "idiom2": "亞美尼亞",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "n",
            "final": "ei",
            "tone": "4"
        },
        "w3": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        }
    },
    {
        "idiom": "阿斯匹林",
        "idiom2": "阿司匹林",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "p",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "am",
            "tone": "4"
        }
    },
    {
        "idiom": "阿斯匹靈",
        "idiom2": "亞斯匹靈",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "p",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        }
    },
    {
        "idiom": "阿士匹靈",
        "idiom2": "亞士匹靈",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "p",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        }
    },
    {
        "idiom": "阿豬阿狗",
        "idiom2": "亞豬亞狗",
        "w0": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w1": {
            "initial": "z",
            "final": "yu",
            "tone": "1"
        },
        "w2": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "挨挨憑憑",
        "idiom2": "挨挨凭凭",
        "w0": {
            "initial": "a",
            "final": "ai",
            "tone": "1"
        },
        "w1": {
            "initial": "a",
            "final": "ai",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "ang",
            "tone": "6"
        },
        "w3": {
            "initial": "b",
            "final": "ang",
            "tone": "6"
        }
    },
    {
        "idiom": "把口唔收",
        "idiom2": "把口唔修",
        "w0": {
            "initial": "b",
            "final": "aa",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "1"
        }
    },
    {
        "idiom": "百屌成纔",
        "idiom2": "百屌成材",
        "w0": {
            "initial": "b",
            "final": "aak",
            "tone": "3"
        },
        "w1": {
            "initial": "d",
            "final": "iu",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        }
    },
    {
        "idiom": "百廢具興",
        "idiom2": "百廢俱興",
        "w0": {
            "initial": "b",
            "final": "aak",
            "tone": "3"
        },
        "w1": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        },
        "w2": {
            "initial": "k",
            "final": "eoi",
            "tone": "1"
        },
        "w3": {
            "initial": "h",
            "final": "ing",
            "tone": "1"
        }
    },
    {
        "idiom": "八達通咭",
        "idiom2": "八達通卡",
        "w0": {
            "initial": "b",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "d",
            "final": "aat",
            "tone": "6"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "k",
            "final": "aat",
            "tone": "1"
        }
    },
    {
        "idiom": "包尾大翻",
        "idiom2": "包尾大幡",
        "w0": {
            "initial": "b",
            "final": "aau",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        }
    },
    {
        "idiom": "北迴歸線",
        "idiom2": "北回歸線",
        "w0": {
            "initial": "b",
            "final": "ak",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "ui",
            "tone": "4"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "in",
            "tone": "3"
        }
    },
    {
        "idiom": "比手畫腳",
        "idiom2": "比手劃腳",
        "w0": {
            "initial": "b",
            "final": "ei",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "w",
            "final": "aak",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "嗶哩叭啦",
        "idiom2": "啤哩叭啦",
        "w0": {
            "initial": "b",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aa",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "aa",
            "tone": "1"
        }
    },
    {
        "idiom": "嗶哩吧啦",
        "idiom2": "啤哩叭啦",
        "w0": {
            "initial": "b",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aa",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "aa",
            "tone": "1"
        }
    },
    {
        "idiom": "嗶哩吧啦",
        "idiom2": "嗶哩叭啦",
        "w0": {
            "initial": "b",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aa",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "aa",
            "tone": "1"
        }
    },
    {
        "idiom": "逼於無奈",
        "idiom2": "迫於無奈",
        "w0": {
            "initial": "b",
            "final": "ik",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "yu",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w3": {
            "initial": "n",
            "final": "oi",
            "tone": "6"
        }
    },
    {
        "idiom": "逼上梁山",
        "idiom2": "迫上梁山",
        "w0": {
            "initial": "b",
            "final": "ik",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "oeng",
            "tone": "6"
        },
        "w2": {
            "initial": "l",
            "final": "oeng",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "aan",
            "tone": "1"
        }
    },
    {
        "idiom": "邊個話架",
        "idiom2": "邊個話㗎",
        "w0": {
            "initial": "b",
            "final": "in",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "o",
            "tone": "3"
        },
        "w2": {
            "initial": "w",
            "final": "aa",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "砰呤嘭唥",
        "idiom2": "乒鈴嘭唥",
        "w0": {
            "initial": "b",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aang",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "aang",
            "tone": "4"
        }
    },
    {
        "idiom": "並駕齊驅",
        "idiom2": "並架齊驅",
        "w0": {
            "initial": "b",
            "final": "ing",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "aa",
            "tone": "3"
        },
        "w2": {
            "initial": "c",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "k",
            "final": "eoi",
            "tone": "1"
        }
    },
    {
        "idiom": "波濤粼粼",
        "idiom2": "波濤磷磷",
        "w0": {
            "initial": "b",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "eon",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "eon",
            "tone": "4"
        }
    },
    {
        "idiom": "博覽群書",
        "idiom2": "博覽羣書",
        "w0": {
            "initial": "b",
            "final": "ok",
            "tone": "3"
        },
        "w1": {
            "initial": "l",
            "final": "aam",
            "tone": "5"
        },
        "w2": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "yu",
            "tone": "1"
        }
    },
    {
        "idiom": "駁嘴駁舌",
        "idiom2": "駁咀駁舌",
        "w0": {
            "initial": "b",
            "final": "ok",
            "tone": "3"
        },
        "w1": {
            "initial": "z",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "b",
            "final": "ok",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "it",
            "tone": "6"
        }
    },
    {
        "idiom": "補闕拾遺",
        "idiom2": "補缺拾遺",
        "w0": {
            "initial": "b",
            "final": "ou",
            "tone": "2"
        },
        "w1": {
            "initial": "k",
            "final": "yut",
            "tone": "3"
        },
        "w2": {
            "initial": "s",
            "final": "ap",
            "tone": "6"
        },
        "w3": {
            "initial": "w",
            "final": "ai",
            "tone": "4"
        }
    },
    {
        "idiom": "步步進逼",
        "idiom2": "步步進迫",
        "w0": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "eon",
            "tone": "3"
        },
        "w3": {
            "initial": "b",
            "final": "ik",
            "tone": "1"
        }
    },
    {
        "idiom": "半斤八兩",
        "idiom2": "半斤八両",
        "w0": {
            "initial": "b",
            "final": "un",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aat",
            "tone": "3"
        },
        "w3": {
            "initial": "l",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "半途而癈",
        "idiom2": "半途而廢",
        "w0": {
            "initial": "b",
            "final": "un",
            "tone": "3"
        },
        "w1": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w3": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "撐竿跳高",
        "idiom2": "撐桿跳高",
        "w0": {
            "initial": "c",
            "final": "aang",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "on",
            "tone": "1"
        },
        "w2": {
            "initial": "t",
            "final": "iu",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "擦存在感",
        "idiom2": "刷存在感",
        "w0": {
            "initial": "c",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "c",
            "final": "yun",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "oi",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "am",
            "tone": "2"
        }
    },
    {
        "idiom": "巢皮掹雞",
        "idiom2": "䩌皮掹雞",
        "w0": {
            "initial": "c",
            "final": "aau",
            "tone": "4"
        },
        "w1": {
            "initial": "p",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ai",
            "tone": "1"
        }
    },
    {
        "idiom": "皺皮掹雞",
        "idiom2": "䩌皮掹雞",
        "w0": {
            "initial": "c",
            "final": "aau",
            "tone": "4"
        },
        "w1": {
            "initial": "p",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ai",
            "tone": "1"
        }
    },
    {
        "idiom": "皺皮掹雞",
        "idiom2": "巢皮掹雞",
        "w0": {
            "initial": "c",
            "final": "aau",
            "tone": "4"
        },
        "w1": {
            "initial": "p",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ai",
            "tone": "1"
        }
    },
    {
        "idiom": "尋根究柢",
        "idiom2": "尋根究底",
        "w0": {
            "initial": "c",
            "final": "am",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "au",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ai",
            "tone": "2"
        }
    },
    {
        "idiom": "沉魚落雁",
        "idiom2": "沈魚落雁",
        "w0": {
            "initial": "c",
            "final": "am",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "yu",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "ok",
            "tone": "6"
        },
        "w3": {
            "initial": "n",
            "final": "gaan",
            "tone": "6"
        }
    },
    {
        "idiom": "親家兩免",
        "idiom2": "襯家兩免",
        "w0": {
            "initial": "c",
            "final": "an",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "oeng",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "in",
            "tone": "5"
        }
    },
    {
        "idiom": "七情六欲",
        "idiom2": "七情六慾",
        "w0": {
            "initial": "c",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "uk",
            "tone": "6"
        },
        "w3": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        }
    },
    {
        "idiom": "柒吓柒吓",
        "idiom2": "柒下柒下",
        "w0": {
            "initial": "c",
            "final": "at",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "c",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "秋後算賬",
        "idiom2": "秋後算帳",
        "w0": {
            "initial": "c",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "6"
        },
        "w2": {
            "initial": "s",
            "final": "yun",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "oeng",
            "tone": "3"
        }
    },
    {
        "idiom": "扯線公仔",
        "idiom2": "扯綫公仔",
        "w0": {
            "initial": "c",
            "final": "e",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "in",
            "tone": "3"
        },
        "w2": {
            "initial": "g",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "ai",
            "tone": "2"
        }
    },
    {
        "idiom": "趨化作用",
        "idiom2": "催化作用",
        "w0": {
            "initial": "c",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "aa",
            "tone": "3"
        },
        "w2": {
            "initial": "z",
            "final": "ok",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "ung",
            "tone": "6"
        }
    },
    {
        "idiom": "出返啖氣",
        "idiom2": "出番啖氣",
        "w0": {
            "initial": "c",
            "final": "eot",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aam",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "黐黐笠笠",
        "idiom2": "黐黐立立",
        "w0": {
            "initial": "c",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "n",
            "final": "ap",
            "tone": "6"
        },
        "w3": {
            "initial": "n",
            "final": "ap",
            "tone": "6"
        }
    },
    {
        "idiom": "辭不達意",
        "idiom2": "詞不達意",
        "w0": {
            "initial": "c",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aat",
            "tone": "6"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "持之以恒",
        "idiom2": "持之以恆",
        "w0": {
            "initial": "c",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "5"
        },
        "w3": {
            "initial": "h",
            "final": "ang",
            "tone": "4"
        }
    },
    {
        "idiom": "叱咤風雲",
        "idiom2": "叱吒風雲",
        "w0": {
            "initial": "c",
            "final": "ik",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "aak",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "w",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "摵起條筋",
        "idiom2": "嘁起條筋",
        "w0": {
            "initial": "c",
            "final": "ik",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "iu",
            "tone": "4"
        },
        "w3": {
            "initial": "g",
            "final": "an",
            "tone": "1"
        }
    },
    {
        "idiom": "千鈞一髮",
        "idiom2": "千鈞一發",
        "w0": {
            "initial": "c",
            "final": "in",
            "tone": "1"
        },
        "w1": {
            "initial": "gw",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        }
    },
    {
        "idiom": "淺嚐輒止",
        "idiom2": "淺嘗輒止",
        "w0": {
            "initial": "c",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "oeng",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "ip",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "前赴後繼",
        "idiom2": "前仆後繼",
        "w0": {
            "initial": "c",
            "final": "in",
            "tone": "4"
        },
        "w1": {
            "initial": "f",
            "final": "u",
            "tone": "6"
        },
        "w2": {
            "initial": "h",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "前世唔收",
        "idiom2": "前世唔修",
        "w0": {
            "initial": "c",
            "final": "in",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "ai",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "1"
        }
    },
    {
        "idiom": "前思後想",
        "idiom2": "前思后想",
        "w0": {
            "initial": "c",
            "final": "in",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "埕埕塔塔",
        "idiom2": "埕埕䍇䍇",
        "w0": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "情情塌塌",
        "idiom2": "埕埕䍇䍇",
        "w0": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "情情塌塌",
        "idiom2": "埕埕塔塔",
        "w0": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "情情塔塔",
        "idiom2": "埕埕䍇䍇",
        "w0": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "情情塔塔",
        "idiom2": "埕埕塔塔",
        "w0": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "情情塔塔",
        "idiom2": "情情塌塌",
        "w0": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "懲一警百",
        "idiom2": "懲一儆百",
        "w0": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "ing",
            "tone": "2"
        },
        "w3": {
            "initial": "b",
            "final": "aak",
            "tone": "3"
        }
    },
    {
        "idiom": "彳亍噉轉",
        "idiom2": "切卓噉轉",
        "w0": {
            "initial": "c",
            "final": "it",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "oet",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "am",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "yun",
            "tone": "3"
        }
    },
    {
        "idiom": "搓圓撳扁",
        "idiom2": "搓圓㩒扁",
        "w0": {
            "initial": "c",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "yun",
            "tone": "4"
        },
        "w2": {
            "initial": "g",
            "final": "am",
            "tone": "6"
        },
        "w3": {
            "initial": "b",
            "final": "in",
            "tone": "2"
        }
    },
    {
        "idiom": "初嚟報到",
        "idiom2": "初嚟埗到",
        "w0": {
            "initial": "c",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "初嚟甫到",
        "idiom2": "初嚟埗到",
        "w0": {
            "initial": "c",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "初嚟甫到",
        "idiom2": "初嚟報到",
        "w0": {
            "initial": "c",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "初嚟步到",
        "idiom2": "初嚟暴到",
        "w0": {
            "initial": "c",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "坐無影櫈",
        "idiom2": "坐無影凳",
        "w0": {
            "initial": "c",
            "final": "o",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "ing",
            "tone": "2"
        },
        "w3": {
            "initial": "d",
            "final": "ang",
            "tone": "3"
        }
    },
    {
        "idiom": "卓爾不群",
        "idiom2": "卓爾不羣",
        "w0": {
            "initial": "c",
            "final": "oek",
            "tone": "3"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "5"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "長命工夫",
        "idiom2": "長命功夫",
        "w0": {
            "initial": "c",
            "final": "oeng",
            "tone": "4"
        },
        "w1": {
            "initial": "m",
            "final": "eng",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "f",
            "final": "u",
            "tone": "1"
        }
    },
    {
        "idiom": "牀鋪被蓆",
        "idiom2": "牀鋪被席",
        "w0": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w1": {
            "initial": "p",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "p",
            "final": "ei",
            "tone": "5"
        },
        "w3": {
            "initial": "z",
            "final": "ek",
            "tone": "6"
        }
    },
    {
        "idiom": "粗身大細",
        "idiom2": "粗身大勢",
        "w0": {
            "initial": "c",
            "final": "ou",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "充橕場面",
        "idiom2": "充撐場面",
        "w0": {
            "initial": "c",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "aang",
            "tone": "1"
        },
        "w2": {
            "initial": "c",
            "final": "oeng",
            "tone": "4"
        },
        "w3": {
            "initial": "m",
            "final": "in",
            "tone": "2"
        }
    },
    {
        "idiom": "衝昏頭腦",
        "idiom2": "沖昏頭腦",
        "w0": {
            "initial": "c",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "n",
            "final": "ou",
            "tone": "5"
        }
    },
    {
        "idiom": "重鎚出擊",
        "idiom2": "重錘出擊",
        "w0": {
            "initial": "c",
            "final": "ung",
            "tone": "5"
        },
        "w1": {
            "initial": "c",
            "final": "eoi",
            "tone": "4"
        },
        "w2": {
            "initial": "c",
            "final": "eot",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ik",
            "tone": "1"
        }
    },
    {
        "idiom": "穿流不息",
        "idiom2": "川流不息",
        "w0": {
            "initial": "c",
            "final": "yun",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ik",
            "tone": "1"
        }
    },
    {
        "idiom": "寸過馬撚",
        "idiom2": "串過馬撚",
        "w0": {
            "initial": "c",
            "final": "yun",
            "tone": "3"
        },
        "w1": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w3": {
            "initial": "l",
            "final": "an",
            "tone": "2"
        }
    },
    {
        "idiom": "全神貫注",
        "idiom2": "全神灌注",
        "w0": {
            "initial": "c",
            "final": "yun",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "g",
            "final": "un",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "yu",
            "tone": "3"
        }
    },
    {
        "idiom": "大纔小用",
        "idiom2": "大材小用",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "iu",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "ung",
            "tone": "6"
        }
    },
    {
        "idiom": "大癲大廢",
        "idiom2": "大癲大䛍",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "大癲大肺",
        "idiom2": "大癲大䛍",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "大癲大肺",
        "idiom2": "大癲大廢",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "大快朵頤",
        "idiom2": "大塊朵頤",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "f",
            "final": "aai",
            "tone": "3"
        },
        "w2": {
            "initial": "d",
            "final": "o",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        }
    },
    {
        "idiom": "大吉利是",
        "idiom2": "大吉利事",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ai",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        }
    },
    {
        "idiom": "大人大者",
        "idiom2": "大人大姐",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "e",
            "tone": "2"
        }
    },
    {
        "idiom": "大有逕庭",
        "idiom2": "大有徑庭",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w2": {
            "initial": "g",
            "final": "ing",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "ing",
            "tone": "4"
        }
    },
    {
        "idiom": "大模斯樣",
        "idiom2": "大模屍樣",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        }
    },
    {
        "idiom": "大無私樣",
        "idiom2": "大模屍樣",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        }
    },
    {
        "idiom": "大無私樣",
        "idiom2": "大模斯樣",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        }
    },
    {
        "idiom": "大安指擬",
        "idiom2": "大安指意",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "o",
            "final": "n",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "大安旨意",
        "idiom2": "大安指意",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "o",
            "final": "n",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "大安旨意",
        "idiom2": "大安指擬",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "o",
            "final": "n",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "大蛇痾尿",
        "idiom2": "大蛇屙尿",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "e",
            "tone": "4"
        },
        "w2": {
            "initial": "o",
            "final": "",
            "tone": "1"
        },
        "w3": {
            "initial": "n",
            "final": "iu",
            "tone": "6"
        }
    },
    {
        "idiom": "大蛇痾屎",
        "idiom2": "大蛇屙屎",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "e",
            "tone": "4"
        },
        "w2": {
            "initial": "o",
            "final": "",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "大相逕庭",
        "idiom2": "大相徑庭",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "oeng",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "ing",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "ing",
            "tone": "4"
        }
    },
    {
        "idiom": "大隻纍纍",
        "idiom2": "大隻累累",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "z",
            "final": "ek",
            "tone": "3"
        },
        "w2": {
            "initial": "l",
            "final": "eoi",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "eoi",
            "tone": "4"
        }
    },
    {
        "idiom": "擔擔擡擡",
        "idiom2": "担担擡擡",
        "w0": {
            "initial": "d",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "aam",
            "tone": "1"
        },
        "w2": {
            "initial": "t",
            "final": "oi",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "oi",
            "tone": "4"
        }
    },
    {
        "idiom": "眈天望地",
        "idiom2": "擔天望地",
        "w0": {
            "initial": "d",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "耽天望地",
        "idiom2": "擔天望地",
        "w0": {
            "initial": "d",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "耽天望地",
        "idiom2": "眈天望地",
        "w0": {
            "initial": "d",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "頕天望地",
        "idiom2": "擔天望地",
        "w0": {
            "initial": "d",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "頕天望地",
        "idiom2": "眈天望地",
        "w0": {
            "initial": "d",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "頕天望地",
        "idiom2": "耽天望地",
        "w0": {
            "initial": "d",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "膽顫心驚",
        "idiom2": "膽戰心驚",
        "w0": {
            "initial": "d",
            "final": "aam",
            "tone": "2"
        },
        "w1": {
            "initial": "z",
            "final": "in",
            "tone": "3"
        },
        "w2": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "eng",
            "tone": "1"
        }
    },
    {
        "idiom": "得意趣致",
        "idiom2": "得意趣緻",
        "w0": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        },
        "w2": {
            "initial": "c",
            "final": "eoi",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "得意洋洋",
        "idiom2": "得意揚揚",
        "w0": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "oeng",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "4"
        }
    },
    {
        "idiom": "得唔得架",
        "idiom2": "得唔得㗎",
        "w0": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "揼心揼肺",
        "idiom2": "抌心抌肺",
        "w0": {
            "initial": "d",
            "final": "am",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "am",
            "tone": "2"
        },
        "w3": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "等閒之輩",
        "idiom2": "等閑之輩",
        "w0": {
            "initial": "d",
            "final": "ang",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "aan",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ui",
            "tone": "3"
        }
    },
    {
        "idiom": "斗零都冇",
        "idiom2": "斗令都冇",
        "w0": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        },
        "w1": {
            "initial": "l",
            "final": "ing",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        }
    },
    {
        "idiom": "豆膶咁細",
        "idiom2": "豆潤咁細",
        "w0": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w1": {
            "initial": "j",
            "final": "eon",
            "tone": "2"
        },
        "w2": {
            "initial": "g",
            "final": "am",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "豆寇年華",
        "idiom2": "荳蔻年華",
        "w0": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w1": {
            "initial": "k",
            "final": "au",
            "tone": "3"
        },
        "w2": {
            "initial": "n",
            "final": "in",
            "tone": "4"
        },
        "w3": {
            "initial": "w",
            "final": "aa",
            "tone": "4"
        }
    },
    {
        "idiom": "豆蔻年華",
        "idiom2": "荳蔻年華",
        "w0": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w1": {
            "initial": "k",
            "final": "au",
            "tone": "3"
        },
        "w2": {
            "initial": "n",
            "final": "in",
            "tone": "4"
        },
        "w3": {
            "initial": "w",
            "final": "aa",
            "tone": "4"
        }
    },
    {
        "idiom": "豆蔻年華",
        "idiom2": "豆寇年華",
        "w0": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w1": {
            "initial": "k",
            "final": "au",
            "tone": "3"
        },
        "w2": {
            "initial": "n",
            "final": "in",
            "tone": "4"
        },
        "w3": {
            "initial": "w",
            "final": "aa",
            "tone": "4"
        }
    },
    {
        "idiom": "的的骰骰",
        "idiom2": "的的式式",
        "w0": {
            "initial": "d",
            "final": "ik",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "ik",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "ik",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ik",
            "tone": "1"
        }
    },
    {
        "idiom": "的起心肝",
        "idiom2": "扚起心肝",
        "w0": {
            "initial": "d",
            "final": "ik",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "on",
            "tone": "1"
        }
    },
    {
        "idiom": "癲癲肺肺",
        "idiom2": "癲癲廢廢",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        },
        "w3": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "典牀典蓆",
        "idiom2": "䠄牀䠄席",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "ek",
            "tone": "6"
        }
    },
    {
        "idiom": "捵牀捵蓆",
        "idiom2": "䠄牀䠄席",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "ek",
            "tone": "6"
        }
    },
    {
        "idiom": "捵牀捵蓆",
        "idiom2": "典牀典蓆",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "ek",
            "tone": "6"
        }
    },
    {
        "idiom": "痶牀痶席",
        "idiom2": "䠄牀䠄席",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "ek",
            "tone": "6"
        }
    },
    {
        "idiom": "痶牀痶席",
        "idiom2": "典牀典蓆",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "ek",
            "tone": "6"
        }
    },
    {
        "idiom": "痶牀痶席",
        "idiom2": "捵牀捵蓆",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "ek",
            "tone": "6"
        }
    },
    {
        "idiom": "捵下捵下",
        "idiom2": "典下典下",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "d",
            "final": "in",
            "tone": "2"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "電磁軌砲",
        "idiom2": "電磁軌炮",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "6"
        },
        "w1": {
            "initial": "c",
            "final": "i",
            "tone": "4"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "p",
            "final": "aau",
            "tone": "3"
        }
    },
    {
        "idiom": "電線膠布",
        "idiom2": "電綫膠布",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "in",
            "tone": "3"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "電線膠紙",
        "idiom2": "電綫膠紙",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "in",
            "tone": "3"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "電子奶嘴",
        "idiom2": "電子奶咀",
        "w0": {
            "initial": "d",
            "final": "in",
            "tone": "6"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w2": {
            "initial": "n",
            "final": "aai",
            "tone": "5"
        },
        "w3": {
            "initial": "z",
            "final": "eoi",
            "tone": "2"
        }
    },
    {
        "idiom": "叮叮髧髧",
        "idiom2": "叮叮揼揼",
        "w0": {
            "initial": "d",
            "final": "ing",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "am",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "am",
            "tone": "3"
        }
    },
    {
        "idiom": "椗呤鄧㨢",
        "idiom2": "叮拎等㨢",
        "w0": {
            "initial": "d",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "ang",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "ang",
            "tone": "3"
        }
    },
    {
        "idiom": "疊埋心水",
        "idiom2": "叠埋心水",
        "w0": {
            "initial": "d",
            "final": "ip",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "aai",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        }
    },
    {
        "idiom": "刁喬扭擰",
        "idiom2": "刁僑扭擰",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "1"
        },
        "w1": {
            "initial": "k",
            "final": "iu",
            "tone": "4"
        },
        "w2": {
            "initial": "n",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "刁橋扭擰",
        "idiom2": "刁僑扭擰",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "1"
        },
        "w1": {
            "initial": "k",
            "final": "iu",
            "tone": "4"
        },
        "w2": {
            "initial": "n",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "刁橋扭擰",
        "idiom2": "刁喬扭擰",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "1"
        },
        "w1": {
            "initial": "k",
            "final": "iu",
            "tone": "4"
        },
        "w2": {
            "initial": "n",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "屌你老味",
        "idiom2": "屌你滷味",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "屌你老尾",
        "idiom2": "屌你滷味",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "屌你老尾",
        "idiom2": "屌你老味",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "屌你鹵味",
        "idiom2": "屌你滷味",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "屌你鹵味",
        "idiom2": "屌你老味",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "屌你鹵味",
        "idiom2": "屌你老尾",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "屌你屎窟",
        "idiom2": "屌你屎忽",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "f",
            "final": "at",
            "tone": "1"
        }
    },
    {
        "idiom": "釣高嚟賣",
        "idiom2": "吊高嚟賣",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "m",
            "final": "aai",
            "tone": "6"
        }
    },
    {
        "idiom": "弔起嚟賣",
        "idiom2": "吊起嚟賣",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "m",
            "final": "aai",
            "tone": "6"
        }
    },
    {
        "idiom": "釣起嚟賣",
        "idiom2": "吊起嚟賣",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "m",
            "final": "aai",
            "tone": "6"
        }
    },
    {
        "idiom": "釣起嚟賣",
        "idiom2": "弔起嚟賣",
        "w0": {
            "initial": "d",
            "final": "iu",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "m",
            "final": "aai",
            "tone": "6"
        }
    },
    {
        "idiom": "多姿多采",
        "idiom2": "多姿多彩",
        "w0": {
            "initial": "d",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        }
    },
    {
        "idiom": "度身訂做",
        "idiom2": "度身定做",
        "w0": {
            "initial": "d",
            "final": "ok",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "eng",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        }
    },
    {
        "idiom": "度身訂造",
        "idiom2": "度身定做",
        "w0": {
            "initial": "d",
            "final": "ok",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "eng",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        }
    },
    {
        "idiom": "度身訂造",
        "idiom2": "度身訂做",
        "w0": {
            "initial": "d",
            "final": "ok",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "eng",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        }
    },
    {
        "idiom": "倒吊砂煲",
        "idiom2": "倒吊沙煲",
        "w0": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w1": {
            "initial": "d",
            "final": "iu",
            "tone": "3"
        },
        "w2": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "督口督鼻",
        "idiom2": "㧻口㧻鼻",
        "w0": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "篤口篤鼻",
        "idiom2": "㧻口㧻鼻",
        "w0": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "篤口篤鼻",
        "idiom2": "督口督鼻",
        "w0": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "厾口厾面",
        "idiom2": "㧻口㧻面",
        "w0": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "in",
            "tone": "6"
        }
    },
    {
        "idiom": "厾眼厾鼻",
        "idiom2": "㧻眼㧻鼻",
        "w0": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "篤眼篤鼻",
        "idiom2": "㧻眼㧻鼻",
        "w0": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "篤眼篤鼻",
        "idiom2": "厾眼厾鼻",
        "w0": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "東施效顰",
        "idiom2": "東施傚顰",
        "w0": {
            "initial": "d",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "aau",
            "tone": "6"
        },
        "w3": {
            "initial": "p",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "戙起牀板",
        "idiom2": "㢥起牀板",
        "w0": {
            "initial": "d",
            "final": "ung",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w3": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        }
    },
    {
        "idiom": "戙起牀版",
        "idiom2": "㢥起牀板",
        "w0": {
            "initial": "d",
            "final": "ung",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w3": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        }
    },
    {
        "idiom": "戙起牀版",
        "idiom2": "戙起牀板",
        "w0": {
            "initial": "d",
            "final": "ung",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "ong",
            "tone": "4"
        },
        "w3": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        }
    },
    {
        "idiom": "戙徛水魚",
        "idiom2": "戙企水魚",
        "w0": {
            "initial": "d",
            "final": "ung",
            "tone": "6"
        },
        "w1": {
            "initial": "k",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "yu",
            "tone": "2"
        }
    },
    {
        "idiom": "花哩花碌",
        "idiom2": "花呢花碌",
        "w0": {
            "initial": "f",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "aa",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "快快趣趣",
        "idiom2": "快快脆脆",
        "w0": {
            "initial": "f",
            "final": "aai",
            "tone": "3"
        },
        "w1": {
            "initial": "f",
            "final": "aai",
            "tone": "3"
        },
        "w2": {
            "initial": "c",
            "final": "eoi",
            "tone": "3"
        },
        "w3": {
            "initial": "c",
            "final": "eoi",
            "tone": "3"
        }
    },
    {
        "idiom": "返風落雨",
        "idiom2": "翻風落雨",
        "w0": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ok",
            "tone": "6"
        },
        "w3": {
            "initial": "j",
            "final": "yu",
            "tone": "5"
        }
    },
    {
        "idiom": "幡竿燈籠",
        "idiom2": "幡杆燈籠",
        "w0": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "on",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        }
    },
    {
        "idiom": "翻然悔悟",
        "idiom2": "幡然悔悟",
        "w0": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "in",
            "tone": "4"
        },
        "w2": {
            "initial": "f",
            "final": "ui",
            "tone": "3"
        },
        "w3": {
            "initial": "",
            "final": "ng",
            "tone": "6"
        }
    },
    {
        "idiom": "返璞歸真",
        "idiom2": "反璞歸真",
        "w0": {
            "initial": "f",
            "final": "aan",
            "tone": "2"
        },
        "w1": {
            "initial": "p",
            "final": "ok",
            "tone": "3"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "an",
            "tone": "1"
        }
    },
    {
        "idiom": "發憤圖強",
        "idiom2": "發奮圖強",
        "w0": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "f",
            "final": "an",
            "tone": "5"
        },
        "w2": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        },
        "w3": {
            "initial": "k",
            "final": "oeng",
            "tone": "4"
        }
    },
    {
        "idiom": "發過豬蹄",
        "idiom2": "發過豬啼",
        "w0": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        },
        "w2": {
            "initial": "z",
            "final": "yu",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "ai",
            "tone": "4"
        }
    },
    {
        "idiom": "發過豬頭",
        "idiom2": "發個豬頭",
        "w0": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        },
        "w2": {
            "initial": "z",
            "final": "yu",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        }
    },
    {
        "idiom": "發姣發燉",
        "idiom2": "發姣發扽",
        "w0": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "aau",
            "tone": "4"
        },
        "w2": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "發姣發躉",
        "idiom2": "發姣發扽",
        "w0": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "aau",
            "tone": "4"
        },
        "w2": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "發姣發躉",
        "idiom2": "發姣發燉",
        "w0": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "aau",
            "tone": "4"
        },
        "w2": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "發人深醒",
        "idiom2": "發人深省",
        "w0": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ing",
            "tone": "2"
        }
    },
    {
        "idiom": "廢事睬你",
        "idiom2": "廢事啋你",
        "w0": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "廢時啋你",
        "idiom2": "廢事啋你",
        "w0": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "廢時啋你",
        "idiom2": "廢事睬你",
        "w0": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "費事睬你",
        "idiom2": "廢事啋你",
        "w0": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "費事睬你",
        "idiom2": "廢事睬你",
        "w0": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "費事睬你",
        "idiom2": "廢時啋你",
        "w0": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "非分之想",
        "idiom2": "非份之想",
        "w0": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "an",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "飛禽大咬",
        "idiom2": "飛擒大咬",
        "w0": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "k",
            "final": "am",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "n",
            "final": "gaau",
            "tone": "5"
        }
    },
    {
        "idiom": "飛砂走奶",
        "idiom2": "飛沙走奶",
        "w0": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "aai",
            "tone": "5"
        }
    },
    {
        "idiom": "火燄雪糕",
        "idiom2": "火焰雪糕",
        "w0": {
            "initial": "f",
            "final": "o",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "im",
            "tone": "6"
        },
        "w2": {
            "initial": "s",
            "final": "yut",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "火燄雪山",
        "idiom2": "火焰雪山",
        "w0": {
            "initial": "f",
            "final": "o",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "im",
            "tone": "6"
        },
        "w2": {
            "initial": "s",
            "final": "yut",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "aan",
            "tone": "1"
        }
    },
    {
        "idiom": "放低幾兩",
        "idiom2": "放低幾両",
        "w0": {
            "initial": "f",
            "final": "ong",
            "tone": "3"
        },
        "w1": {
            "initial": "d",
            "final": "ai",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "ei",
            "tone": "2"
        },
        "w3": {
            "initial": "l",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "放低二兩",
        "idiom2": "放低二両",
        "w0": {
            "initial": "f",
            "final": "ong",
            "tone": "3"
        },
        "w1": {
            "initial": "d",
            "final": "ai",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "放蕩不覊",
        "idiom2": "放蕩不羈",
        "w0": {
            "initial": "f",
            "final": "ong",
            "tone": "3"
        },
        "w1": {
            "initial": "d",
            "final": "ong",
            "tone": "6"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ei",
            "tone": "1"
        }
    },
    {
        "idiom": "夫唱婦隨",
        "idiom2": "夫倡婦隨",
        "w0": {
            "initial": "f",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "oeng",
            "tone": "3"
        },
        "w2": {
            "initial": "f",
            "final": "u",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "eoi",
            "tone": "4"
        }
    },
    {
        "idiom": "虎踞龍蟠",
        "idiom2": "虎踞龍盤",
        "w0": {
            "initial": "f",
            "final": "u",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "eoi",
            "tone": "3"
        },
        "w2": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "p",
            "final": "un",
            "tone": "4"
        }
    },
    {
        "idiom": "虎口虎面",
        "idiom2": "苦口苦面",
        "w0": {
            "initial": "f",
            "final": "u",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "f",
            "final": "u",
            "tone": "2"
        },
        "w3": {
            "initial": "m",
            "final": "in",
            "tone": "6"
        }
    },
    {
        "idiom": "庫克群島",
        "idiom2": "庫克羣島",
        "w0": {
            "initial": "f",
            "final": "u",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "ak",
            "tone": "1"
        },
        "w2": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "2"
        }
    },
    {
        "idiom": "負債纍纍",
        "idiom2": "負債累累",
        "w0": {
            "initial": "f",
            "final": "u",
            "tone": "6"
        },
        "w1": {
            "initial": "z",
            "final": "aai",
            "tone": "3"
        },
        "w2": {
            "initial": "l",
            "final": "eoi",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "eoi",
            "tone": "4"
        }
    },
    {
        "idiom": "福爾摩莎",
        "idiom2": "福爾摩沙",
        "w0": {
            "initial": "f",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "5"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        }
    },
    {
        "idiom": "豐衣粥食",
        "idiom2": "豐依足食",
        "w0": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ik",
            "tone": "6"
        }
    },
    {
        "idiom": "豐衣足食",
        "idiom2": "豐依足食",
        "w0": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ik",
            "tone": "6"
        }
    },
    {
        "idiom": "豐衣足食",
        "idiom2": "豐衣粥食",
        "w0": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ik",
            "tone": "6"
        }
    },
    {
        "idiom": "風雨飄搖",
        "idiom2": "風雨漂搖",
        "w0": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "yu",
            "tone": "5"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "iu",
            "tone": "4"
        }
    },
    {
        "idiom": "峰迴路轉",
        "idiom2": "峯回路轉",
        "w0": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "ui",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "yun",
            "tone": "2"
        }
    },
    {
        "idiom": "奉旨成婚",
        "idiom2": "奉子成婚",
        "w0": {
            "initial": "f",
            "final": "ung",
            "tone": "6"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "f",
            "final": "an",
            "tone": "1"
        }
    },
    {
        "idiom": "加官進爵",
        "idiom2": "加官晉爵",
        "w0": {
            "initial": "g",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "un",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "eon",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "伽馬射線",
        "idiom2": "伽瑪射線",
        "w0": {
            "initial": "g",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "e",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "in",
            "tone": "3"
        }
    },
    {
        "idiom": "家俬雜物",
        "idiom2": "傢俬雜物",
        "w0": {
            "initial": "g",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "m",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "家庭煮夫",
        "idiom2": "家庭主夫",
        "w0": {
            "initial": "g",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "yu",
            "tone": "2"
        },
        "w3": {
            "initial": "f",
            "final": "u",
            "tone": "1"
        }
    },
    {
        "idiom": "隔離鄰舍",
        "idiom2": "隔籬隣舎",
        "w0": {
            "initial": "g",
            "final": "aak",
            "tone": "3"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "eon",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "e",
            "tone": "3"
        }
    },
    {
        "idiom": "監人賴厚",
        "idiom2": "監人勑厚",
        "w0": {
            "initial": "g",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aai",
            "tone": "5"
        },
        "w3": {
            "initial": "h",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "監人賴逅",
        "idiom2": "監人勑厚",
        "w0": {
            "initial": "g",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aai",
            "tone": "5"
        },
        "w3": {
            "initial": "h",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "監人賴逅",
        "idiom2": "監人賴厚",
        "w0": {
            "initial": "g",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aai",
            "tone": "5"
        },
        "w3": {
            "initial": "h",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "敆錢送禮",
        "idiom2": "合錢送禮",
        "w0": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w1": {
            "initial": "c",
            "final": "in",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "ung",
            "tone": "3"
        },
        "w3": {
            "initial": "l",
            "final": "ai",
            "tone": "5"
        }
    },
    {
        "idiom": "敆份送禮",
        "idiom2": "佮份送禮",
        "w0": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w1": {
            "initial": "f",
            "final": "an",
            "tone": "6"
        },
        "w2": {
            "initial": "s",
            "final": "ung",
            "tone": "3"
        },
        "w3": {
            "initial": "l",
            "final": "ai",
            "tone": "5"
        }
    },
    {
        "idiom": "夾手夾腳",
        "idiom2": "合手合脚",
        "w0": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "敆手敆脚",
        "idiom2": "合手合脚",
        "w0": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "敆手敆脚",
        "idiom2": "夾手夾腳",
        "w0": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "攪風攪雨",
        "idiom2": "搞風搞雨",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "yu",
            "tone": "5"
        }
    },
    {
        "idiom": "搞乜鬼啊",
        "idiom2": "搞乜鬼呀",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "m",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        }
    },
    {
        "idiom": "攪乜鬼呀",
        "idiom2": "搞乜鬼呀",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "m",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        }
    },
    {
        "idiom": "攪乜鬼呀",
        "idiom2": "搞乜鬼啊",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "m",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        }
    },
    {
        "idiom": "攪呢攪嚕",
        "idiom2": "搞呢搞嚕",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w3": {
            "initial": "l",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "攪呢攪路",
        "idiom2": "搞呢搞路",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "n",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w3": {
            "initial": "l",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "攪三攪四",
        "idiom2": "搞三搞四",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "aam",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "攪屎攪棍",
        "idiom2": "搞屎搞棍",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "2"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w3": {
            "initial": "gw",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "攪是攪非",
        "idiom2": "搞是搞非",
        "w0": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w3": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        }
    },
    {
        "idiom": "金盤洗手",
        "idiom2": "金盆洗手",
        "w0": {
            "initial": "g",
            "final": "am",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "un",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "撳地游水",
        "idiom2": "㩒地游水",
        "w0": {
            "initial": "g",
            "final": "am",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        }
    },
    {
        "idiom": "羹藜唅糗",
        "idiom2": "羹藜含糗",
        "w0": {
            "initial": "g",
            "final": "ang",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w2": {
            "initial": "h",
            "final": "am",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "au",
            "tone": "3"
        }
    },
    {
        "idiom": "九龍城砦",
        "idiom2": "九龍城寨",
        "w0": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "aai",
            "tone": "6"
        }
    },
    {
        "idiom": "九龍砦城",
        "idiom2": "九龍寨城",
        "w0": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "ing",
            "tone": "4"
        }
    },
    {
        "idiom": "鳩之孖碌",
        "idiom2": "鳩之媽碌",
        "w0": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "機場快線",
        "idiom2": "機場快綫",
        "w0": {
            "initial": "g",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "oeng",
            "tone": "4"
        },
        "w2": {
            "initial": "f",
            "final": "aai",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "in",
            "tone": "3"
        }
    },
    {
        "idiom": "饑寒交迫",
        "idiom2": "飢寒交迫",
        "w0": {
            "initial": "g",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "on",
            "tone": "4"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ik",
            "tone": "1"
        }
    },
    {
        "idiom": "驚到飆尿",
        "idiom2": "驚到標尿",
        "w0": {
            "initial": "g",
            "final": "eng",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w2": {
            "initial": "b",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "n",
            "final": "iu",
            "tone": "6"
        }
    },
    {
        "idiom": "嘰嘰屹屹",
        "idiom2": "嘰嘰咭咭",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "嘰嘰訖訖",
        "idiom2": "嘰嘰咭咭",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "嘰嘰訖訖",
        "idiom2": "嘰嘰屹屹",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "嘰嘰趷趷",
        "idiom2": "嘰嘰咭咭",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "嘰嘰趷趷",
        "idiom2": "嘰嘰屹屹",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "嘰嘰趷趷",
        "idiom2": "嘰嘰訖訖",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "齮齮齕齕",
        "idiom2": "嘰嘰咭咭",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "齮齮齕齕",
        "idiom2": "嘰嘰屹屹",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "齮齮齕齕",
        "idiom2": "嘰嘰訖訖",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "齮齮齕齕",
        "idiom2": "嘰嘰趷趷",
        "w0": {
            "initial": "g",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "驕奢淫逸",
        "idiom2": "驕奢淫佚",
        "w0": {
            "initial": "g",
            "final": "iu",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "e",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "am",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "矯揉造作",
        "idiom2": "矯揉做作",
        "w0": {
            "initial": "g",
            "final": "iu",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "ok",
            "tone": "3"
        }
    },
    {
        "idiom": "歌舞昇平",
        "idiom2": "歌舞升平",
        "w0": {
            "initial": "g",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "ing",
            "tone": "1"
        },
        "w3": {
            "initial": "p",
            "final": "ing",
            "tone": "4"
        }
    },
    {
        "idiom": "各師各法",
        "idiom2": "各司各法",
        "w0": {
            "initial": "g",
            "final": "ok",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "ok",
            "tone": "3"
        },
        "w3": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        }
    },
    {
        "idiom": "各施各法",
        "idiom2": "各司各法",
        "w0": {
            "initial": "g",
            "final": "ok",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "ok",
            "tone": "3"
        },
        "w3": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        }
    },
    {
        "idiom": "各施各法",
        "idiom2": "各師各法",
        "w0": {
            "initial": "g",
            "final": "ok",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "ok",
            "tone": "3"
        },
        "w3": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        }
    },
    {
        "idiom": "干炒牛河",
        "idiom2": "乾炒牛河",
        "w0": {
            "initial": "g",
            "final": "on",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "aau",
            "tone": "2"
        },
        "w2": {
            "initial": "n",
            "final": "gau",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "o",
            "tone": "2"
        }
    },
    {
        "idiom": "孤苦零丁",
        "idiom2": "孤苦伶仃",
        "w0": {
            "initial": "g",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "u",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "d",
            "final": "ing",
            "tone": "1"
        }
    },
    {
        "idiom": "蠱靈精怪",
        "idiom2": "古靈精怪",
        "w0": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w1": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "ing",
            "tone": "1"
        },
        "w3": {
            "initial": "gw",
            "final": "aai",
            "tone": "3"
        }
    },
    {
        "idiom": "故步自封",
        "idiom2": "固步自封",
        "w0": {
            "initial": "g",
            "final": "u",
            "tone": "3"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "6"
        },
        "w3": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        }
    },
    {
        "idiom": "故技重演",
        "idiom2": "故伎重演",
        "w0": {
            "initial": "g",
            "final": "u",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "ei",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "in",
            "tone": "2"
        }
    },
    {
        "idiom": "谷精上腦",
        "idiom2": "唂精上腦",
        "w0": {
            "initial": "g",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "oeng",
            "tone": "5"
        },
        "w3": {
            "initial": "n",
            "final": "ou",
            "tone": "5"
        }
    },
    {
        "idiom": "冠絕群倫",
        "idiom2": "冠絕羣倫",
        "w0": {
            "initial": "g",
            "final": "un",
            "tone": "3"
        },
        "w1": {
            "initial": "z",
            "final": "yut",
            "tone": "6"
        },
        "w2": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "eon",
            "tone": "4"
        }
    },
    {
        "idiom": "供出同夥",
        "idiom2": "供出同伙",
        "w0": {
            "initial": "g",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "eot",
            "tone": "1"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "f",
            "final": "o",
            "tone": "2"
        }
    },
    {
        "idiom": "歸根結柢",
        "idiom2": "歸根結底",
        "w0": {
            "initial": "gw",
            "final": "ai",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "it",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ai",
            "tone": "2"
        }
    },
    {
        "idiom": "歸納論證",
        "idiom2": "歸納論証",
        "w0": {
            "initial": "gw",
            "final": "ai",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "aap",
            "tone": "6"
        },
        "w2": {
            "initial": "l",
            "final": "eon",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        }
    },
    {
        "idiom": "鬼計多端",
        "idiom2": "詭計多端",
        "w0": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "ai",
            "tone": "3"
        },
        "w2": {
            "initial": "d",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "yun",
            "tone": "1"
        }
    },
    {
        "idiom": "鬼哭狼嚎",
        "idiom2": "鬼哭狼嗥",
        "w0": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "uk",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ong",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "滾水熝腳",
        "idiom2": "滾水淥腳",
        "w0": {
            "initial": "gw",
            "final": "an",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "uk",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "狷窿狷罅",
        "idiom2": "捐窿捐罅",
        "w0": {
            "initial": "g",
            "final": "yun",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "yun",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "蜎窿蜎罅",
        "idiom2": "捐窿捐罅",
        "w0": {
            "initial": "g",
            "final": "yun",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "yun",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "蜎窿蜎罅",
        "idiom2": "狷窿狷罅",
        "w0": {
            "initial": "g",
            "final": "yun",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "yun",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "捲舌元音",
        "idiom2": "卷舌元音",
        "w0": {
            "initial": "g",
            "final": "yun",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "it",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "yun",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "am",
            "tone": "1"
        }
    },
    {
        "idiom": "捲土重來",
        "idiom2": "卷土重來",
        "w0": {
            "initial": "g",
            "final": "yun",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "ou",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "oi",
            "tone": "4"
        }
    },
    {
        "idiom": "蝦得就蝦",
        "idiom2": "㗇得就㗇",
        "w0": {
            "initial": "h",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "1"
        }
    },
    {
        "idiom": "蝦蝦霸霸",
        "idiom2": "㗇㗇霸霸",
        "w0": {
            "initial": "h",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aa",
            "tone": "3"
        },
        "w3": {
            "initial": "b",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "下扒輕輕",
        "idiom2": "下巴輕輕",
        "w0": {
            "initial": "h",
            "final": "aa",
            "tone": "6"
        },
        "w1": {
            "initial": "p",
            "final": "aa",
            "tone": "4"
        },
        "w2": {
            "initial": "h",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "h",
            "final": "eng",
            "tone": "1"
        }
    },
    {
        "idiom": "夏威夷裇",
        "idiom2": "夏威夷恤",
        "w0": {
            "initial": "h",
            "final": "aa",
            "tone": "6"
        },
        "w1": {
            "initial": "w",
            "final": "ai",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "eot",
            "tone": "1"
        }
    },
    {
        "idiom": "赫耳墨斯",
        "idiom2": "赫爾墨斯",
        "w0": {
            "initial": "h",
            "final": "aak",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "5"
        },
        "w2": {
            "initial": "m",
            "final": "ak",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        }
    },
    {
        "idiom": "鹹魚返生",
        "idiom2": "鹹魚翻生",
        "w0": {
            "initial": "h",
            "final": "aam",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "yu",
            "tone": "2"
        },
        "w2": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "aang",
            "tone": "1"
        }
    },
    {
        "idiom": "慳返啖氣",
        "idiom2": "慳番啖氣",
        "w0": {
            "initial": "h",
            "final": "aan",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aam",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "閒情逸緻",
        "idiom2": "閑情逸致",
        "w0": {
            "initial": "h",
            "final": "aan",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "閒情逸致",
        "idiom2": "閑情逸致",
        "w0": {
            "initial": "h",
            "final": "aan",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "閒情逸致",
        "idiom2": "閒情逸緻",
        "w0": {
            "initial": "h",
            "final": "aan",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "姣屍扽督",
        "idiom2": "姣屍扽㞘",
        "w0": {
            "initial": "h",
            "final": "aau",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "姣屍燉篤",
        "idiom2": "姣屍扽㞘",
        "w0": {
            "initial": "h",
            "final": "aau",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "姣屍燉篤",
        "idiom2": "姣屍扽督",
        "w0": {
            "initial": "h",
            "final": "aau",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "閪口閪面",
        "idiom2": "㞓口㞓面",
        "w0": {
            "initial": "h",
            "final": "ai",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "h",
            "final": "ai",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "in",
            "tone": "6"
        }
    },
    {
        "idiom": "係乜嚟架",
        "idiom2": "係乜嚟㗎",
        "w0": {
            "initial": "h",
            "final": "ai",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "g",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "黑布蒙頭",
        "idiom2": "黑布朦頭",
        "w0": {
            "initial": "h",
            "final": "ak",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        }
    },
    {
        "idiom": "剋己奉公",
        "idiom2": "克己奉公",
        "w0": {
            "initial": "h",
            "final": "ak",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "f",
            "final": "ung",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "ung",
            "tone": "1"
        }
    },
    {
        "idiom": "憨態可鞠",
        "idiom2": "憨態可掬",
        "w0": {
            "initial": "h",
            "final": "am",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "aai",
            "tone": "3"
        },
        "w2": {
            "initial": "h",
            "final": "o",
            "tone": "2"
        },
        "w3": {
            "initial": "g",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "扻頭埋牆",
        "idiom2": "坎頭埋牆",
        "w0": {
            "initial": "h",
            "final": "am",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "aai",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "oeng",
            "tone": "5"
        }
    },
    {
        "idiom": "撼頭埋牆",
        "idiom2": "坎頭埋牆",
        "w0": {
            "initial": "h",
            "final": "am",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "aai",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "oeng",
            "tone": "5"
        }
    },
    {
        "idiom": "撼頭埋牆",
        "idiom2": "扻頭埋牆",
        "w0": {
            "initial": "h",
            "final": "am",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "aai",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "oeng",
            "tone": "5"
        }
    },
    {
        "idiom": "恨死隔離",
        "idiom2": "恨死隔籬",
        "w0": {
            "initial": "h",
            "final": "an",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "g",
            "final": "aak",
            "tone": "3"
        },
        "w3": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        }
    },
    {
        "idiom": "行政區畫",
        "idiom2": "行政區劃",
        "w0": {
            "initial": "h",
            "final": "ang",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        },
        "w2": {
            "initial": "k",
            "final": "eoi",
            "tone": "1"
        },
        "w3": {
            "initial": "w",
            "final": "aak",
            "tone": "6"
        }
    },
    {
        "idiom": "合晒荷車",
        "idiom2": "合晒合尺",
        "w0": {
            "initial": "h",
            "final": "ap",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "aai",
            "tone": "3"
        },
        "w2": {
            "initial": "h",
            "final": "o",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "e",
            "tone": "1"
        }
    },
    {
        "idiom": "口同鼻詏",
        "idiom2": "口同鼻拗",
        "w0": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "ei",
            "tone": "6"
        },
        "w3": {
            "initial": "a",
            "final": "au",
            "tone": "3"
        }
    },
    {
        "idiom": "希伯萊語",
        "idiom2": "希伯來語",
        "w0": {
            "initial": "h",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "aak",
            "tone": "3"
        },
        "w2": {
            "initial": "l",
            "final": "oi",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "yu",
            "tone": "5"
        }
    },
    {
        "idiom": "熙熙攘攘",
        "idiom2": "熙熙壤壤",
        "w0": {
            "initial": "h",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        }
    },
    {
        "idiom": "豈有此理",
        "idiom2": "喜有此履",
        "w0": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w2": {
            "initial": "c",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "l",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "喫裏爬外",
        "idiom2": "喫裏扒外",
        "w0": {
            "initial": "h",
            "final": "ek",
            "tone": "3"
        },
        "w1": {
            "initial": "l",
            "final": "eoi",
            "tone": "5"
        },
        "w2": {
            "initial": "p",
            "final": "aa",
            "tone": "4"
        },
        "w3": {
            "initial": "n",
            "final": "goi",
            "tone": "6"
        }
    },
    {
        "idiom": "虛無縹渺",
        "idiom2": "虛無漂渺",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無縹緲",
        "idiom2": "虛無漂渺",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無縹緲",
        "idiom2": "虛無縹渺",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無飄渺",
        "idiom2": "虛無漂渺",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無飄渺",
        "idiom2": "虛無縹渺",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無飄渺",
        "idiom2": "虛無縹緲",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無飄眇",
        "idiom2": "虛無漂渺",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無飄眇",
        "idiom2": "虛無縹渺",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無飄眇",
        "idiom2": "虛無縹緲",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "虛無飄眇",
        "idiom2": "虛無飄渺",
        "w0": {
            "initial": "h",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "p",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        }
    },
    {
        "idiom": "慶過火屎",
        "idiom2": "㷫過火屎",
        "w0": {
            "initial": "h",
            "final": "ing",
            "tone": "3"
        },
        "w1": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        },
        "w2": {
            "initial": "f",
            "final": "o",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "㷫過辣雞",
        "idiom2": "㷫過焫雞",
        "w0": {
            "initial": "h",
            "final": "ing",
            "tone": "3"
        },
        "w1": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        },
        "w2": {
            "initial": "n",
            "final": "aat",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "ai",
            "tone": "1"
        }
    },
    {
        "idiom": "慶興含含",
        "idiom2": "慶慶含含",
        "w0": {
            "initial": "h",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "h",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "am",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "am",
            "tone": "4"
        }
    },
    {
        "idiom": "興興冚冚",
        "idiom2": "慶慶含含",
        "w0": {
            "initial": "h",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "h",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "am",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "am",
            "tone": "4"
        }
    },
    {
        "idiom": "興興冚冚",
        "idiom2": "慶興含含",
        "w0": {
            "initial": "h",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "h",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "am",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "am",
            "tone": "4"
        }
    },
    {
        "idiom": "開發週期",
        "idiom2": "開發周期",
        "w0": {
            "initial": "h",
            "final": "oi",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w2": {
            "initial": "z",
            "final": "au",
            "tone": "1"
        },
        "w3": {
            "initial": "k",
            "final": "ei",
            "tone": "4"
        }
    },
    {
        "idiom": "開天闢地",
        "idiom2": "開天辟地",
        "w0": {
            "initial": "h",
            "final": "oi",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "p",
            "final": "ik",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "害群之馬",
        "idiom2": "害羣之馬",
        "w0": {
            "initial": "h",
            "final": "oi",
            "tone": "6"
        },
        "w1": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "鶴立雞群",
        "idiom2": "鶴立雞羣",
        "w0": {
            "initial": "h",
            "final": "ok",
            "tone": "6"
        },
        "w1": {
            "initial": "l",
            "final": "aap",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "ai",
            "tone": "1"
        },
        "w3": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "好人好者",
        "idiom2": "好人好姐",
        "w0": {
            "initial": "h",
            "final": "ou",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "h",
            "final": "ou",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "e",
            "tone": "2"
        }
    },
    {
        "idiom": "空空蕩蕩",
        "idiom2": "空空盪盪",
        "w0": {
            "initial": "h",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ong",
            "tone": "6"
        }
    },
    {
        "idiom": "空心老官",
        "idiom2": "空心老倌",
        "w0": {
            "initial": "h",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "g",
            "final": "un",
            "tone": "1"
        }
    },
    {
        "idiom": "空心老棺",
        "idiom2": "空心老倌",
        "w0": {
            "initial": "h",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "g",
            "final": "un",
            "tone": "1"
        }
    },
    {
        "idiom": "空心老棺",
        "idiom2": "空心老官",
        "w0": {
            "initial": "h",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "g",
            "final": "un",
            "tone": "1"
        }
    },
    {
        "idiom": "凶神惡煞",
        "idiom2": "兇神惡煞",
        "w0": {
            "initial": "h",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "o",
            "final": "k",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "aat",
            "tone": "3"
        }
    },
    {
        "idiom": "恐怖分子",
        "idiom2": "恐怖份子",
        "w0": {
            "initial": "h",
            "final": "ung",
            "tone": "2"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "3"
        },
        "w2": {
            "initial": "f",
            "final": "an",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "鴻福齊天",
        "idiom2": "洪福齊天",
        "w0": {
            "initial": "h",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "f",
            "final": "uk",
            "tone": "1"
        },
        "w2": {
            "initial": "c",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        }
    },
    {
        "idiom": "廿文廿武",
        "idiom2": "也文也武",
        "w0": {
            "initial": "j",
            "final": "aa",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "aa",
            "tone": "6"
        },
        "w3": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        }
    },
    {
        "idiom": "擪高褲腳",
        "idiom2": "押高褲腳",
        "w0": {
            "initial": "j",
            "final": "aap",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "u",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "陰滋陰滋",
        "idiom2": "陰吱陰吱",
        "w0": {
            "initial": "j",
            "final": "am",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        }
    },
    {
        "idiom": "人敆人緣",
        "idiom2": "人夾人緣",
        "w0": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "yun",
            "tone": "4"
        }
    },
    {
        "idiom": "人細鬼大",
        "idiom2": "人細詭大",
        "w0": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "ai",
            "tone": "3"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        }
    },
    {
        "idiom": "人心肉造",
        "idiom2": "人心肉做",
        "w0": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        }
    },
    {
        "idiom": "揖揖揚揚",
        "idiom2": "揖揖抰抰",
        "w0": {
            "initial": "j",
            "final": "ap",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "ap",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "oeng",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "泣泣揚揚",
        "idiom2": "揖揖抰抰",
        "w0": {
            "initial": "j",
            "final": "ap",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "ap",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "oeng",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "泣泣揚揚",
        "idiom2": "揖揖揚揚",
        "w0": {
            "initial": "j",
            "final": "ap",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "ap",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "oeng",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "壹敗塗地",
        "idiom2": "一敗塗地",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "aai",
            "tone": "6"
        },
        "w2": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "一筆抹煞",
        "idiom2": "一筆抹殺",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ut",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "aat",
            "tone": "3"
        }
    },
    {
        "idiom": "一沉百踩",
        "idiom2": "一沈百踩",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "am",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "aak",
            "tone": "3"
        },
        "w3": {
            "initial": "c",
            "final": "aai",
            "tone": "2"
        }
    },
    {
        "idiom": "一搊一掕",
        "idiom2": "一抽一掕",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "ang",
            "tone": "3"
        }
    },
    {
        "idiom": "一抽二褦",
        "idiom2": "一抽二掕",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "ang",
            "tone": "3"
        }
    },
    {
        "idiom": "一搊二掕",
        "idiom2": "一抽二掕",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "ang",
            "tone": "3"
        }
    },
    {
        "idiom": "一搊二掕",
        "idiom2": "一抽二褦",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "ang",
            "tone": "3"
        }
    },
    {
        "idiom": "一棟都冇",
        "idiom2": "一戙都冇",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "ung",
            "tone": "6"
        },
        "w2": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        }
    },
    {
        "idiom": "一言九鼎",
        "idiom2": "一言九頂",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "in",
            "tone": "4"
        },
        "w2": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "d",
            "final": "ing",
            "tone": "2"
        }
    },
    {
        "idiom": "一於唔制",
        "idiom2": "一於唔䎺",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "yu",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "一目瞭然",
        "idiom2": "一目了然",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "uk",
            "tone": "6"
        },
        "w2": {
            "initial": "l",
            "final": "iu",
            "tone": "5"
        },
        "w3": {
            "initial": "j",
            "final": "in",
            "tone": "4"
        }
    },
    {
        "idiom": "壹伍壹拾",
        "idiom2": "一五一十",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "",
            "final": "ng",
            "tone": "5"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ap",
            "tone": "6"
        }
    },
    {
        "idiom": "一巖一窟",
        "idiom2": "一岩一窟",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaam",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "f",
            "final": "at",
            "tone": "1"
        }
    },
    {
        "idiom": "一仆一趢",
        "idiom2": "一仆一碌",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "uk",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "一仆一轆",
        "idiom2": "一仆一碌",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "uk",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "一仆一轆",
        "idiom2": "一仆一趢",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "uk",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "一僕一碌",
        "idiom2": "一仆一碌",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "uk",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "一僕一碌",
        "idiom2": "一仆一趢",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "uk",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "一僕一碌",
        "idiom2": "一仆一轆",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "uk",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "一色一樣",
        "idiom2": "一式一樣",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "ik",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        }
    },
    {
        "idiom": "一相情願",
        "idiom2": "一廂情願",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "oeng",
            "tone": "1"
        },
        "w2": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "yun",
            "tone": "6"
        }
    },
    {
        "idiom": "一字咁錢",
        "idiom2": "一字咁淺",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "am",
            "tone": "3"
        },
        "w3": {
            "initial": "c",
            "final": "in",
            "tone": "2"
        }
    },
    {
        "idiom": "日訛夜訛",
        "idiom2": "日哦夜哦",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "go",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "e",
            "tone": "6"
        },
        "w3": {
            "initial": "n",
            "final": "go",
            "tone": "4"
        }
    },
    {
        "idiom": "日鵝夜鵝",
        "idiom2": "日哦夜哦",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "go",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "e",
            "tone": "6"
        },
        "w3": {
            "initial": "n",
            "final": "go",
            "tone": "4"
        }
    },
    {
        "idiom": "日鵝夜鵝",
        "idiom2": "日訛夜訛",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "go",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "e",
            "tone": "6"
        },
        "w3": {
            "initial": "n",
            "final": "go",
            "tone": "4"
        }
    },
    {
        "idiom": "日曬雨淋",
        "idiom2": "日晒雨淋",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "aai",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "yu",
            "tone": "5"
        },
        "w3": {
            "initial": "l",
            "final": "am",
            "tone": "4"
        }
    },
    {
        "idiom": "優哉游哉",
        "idiom2": "優哉悠哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "優哉遊哉",
        "idiom2": "優哉悠哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "優哉遊哉",
        "idiom2": "優哉游哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "悠哉悠哉",
        "idiom2": "優哉悠哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "悠哉悠哉",
        "idiom2": "優哉游哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "悠哉悠哉",
        "idiom2": "優哉遊哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "悠哉遊哉",
        "idiom2": "優哉悠哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "悠哉遊哉",
        "idiom2": "優哉游哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "悠哉遊哉",
        "idiom2": "優哉遊哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "悠哉遊哉",
        "idiom2": "悠哉悠哉",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "1"
        }
    },
    {
        "idiom": "由此至終",
        "idiom2": "由始至終",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "i",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "ung",
            "tone": "1"
        }
    },
    {
        "idiom": "有形有款",
        "idiom2": "有型有款",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w1": {
            "initial": "j",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "f",
            "final": "un",
            "tone": "2"
        }
    },
    {
        "idiom": "有紋有路",
        "idiom2": "有文有路",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "l",
            "final": "ou",
            "tone": "6"
        }
    },
    {
        "idiom": "有咩咿喐",
        "idiom2": "有咩依郁",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "e",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "有冇攪錯",
        "idiom2": "有冇搞錯",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "2"
        },
        "w3": {
            "initial": "c",
            "final": "o",
            "tone": "3"
        }
    },
    {
        "idiom": "咿咿挹挹",
        "idiom2": "咿咿咠咠",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "ap",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "ap",
            "tone": "1"
        }
    },
    {
        "idiom": "咿咿喐喐",
        "idiom2": "依依郁郁",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "依牙鬆弶",
        "idiom2": "依牙鬆䚗",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaa",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ong",
            "tone": "3"
        }
    },
    {
        "idiom": "依牙鬆槓",
        "idiom2": "依牙鬆䚗",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaa",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ong",
            "tone": "3"
        }
    },
    {
        "idiom": "依牙鬆槓",
        "idiom2": "依牙鬆弶",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaa",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ong",
            "tone": "3"
        }
    },
    {
        "idiom": "依牙鬆鋼",
        "idiom2": "依牙鬆䚗",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaa",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ong",
            "tone": "3"
        }
    },
    {
        "idiom": "依牙鬆鋼",
        "idiom2": "依牙鬆弶",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaa",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ong",
            "tone": "3"
        }
    },
    {
        "idiom": "依牙鬆鋼",
        "idiom2": "依牙鬆槓",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaa",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ong",
            "tone": "3"
        }
    },
    {
        "idiom": "咦咿哦哦",
        "idiom2": "依依鵝鵝",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "n",
            "final": "go",
            "tone": "4"
        },
        "w3": {
            "initial": "n",
            "final": "go",
            "tone": "4"
        }
    },
    {
        "idiom": "咦咦哦哦",
        "idiom2": "依依哦哦",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "o",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "o",
            "final": "",
            "tone": "4"
        }
    },
    {
        "idiom": "咿咿哦哦",
        "idiom2": "依依哦哦",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "o",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "o",
            "final": "",
            "tone": "4"
        }
    },
    {
        "idiom": "咿咿哦哦",
        "idiom2": "咦咦哦哦",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "o",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "o",
            "final": "",
            "tone": "4"
        }
    },
    {
        "idiom": "宜咿哦哦",
        "idiom2": "依依哦哦",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "o",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "o",
            "final": "",
            "tone": "4"
        }
    },
    {
        "idiom": "宜咿哦哦",
        "idiom2": "咦咦哦哦",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "o",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "o",
            "final": "",
            "tone": "4"
        }
    },
    {
        "idiom": "宜咿哦哦",
        "idiom2": "咿咿哦哦",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "o",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "o",
            "final": "",
            "tone": "4"
        }
    },
    {
        "idiom": "而字噉手",
        "idiom2": "而字咁手",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "am",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "義正辭嚴",
        "idiom2": "義正詞嚴",
        "w0": {
            "initial": "j",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        },
        "w2": {
            "initial": "c",
            "final": "i",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "im",
            "tone": "4"
        }
    },
    {
        "idiom": "奄尖聲悶",
        "idiom2": "㤿憸腥悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "淹尖聲悶",
        "idiom2": "㤿憸腥悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "淹尖聲悶",
        "idiom2": "奄尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "腌尖聲悶",
        "idiom2": "㤿憸腥悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "腌尖聲悶",
        "idiom2": "奄尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "腌尖聲悶",
        "idiom2": "淹尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "腌尖腥悶",
        "idiom2": "㤿憸腥悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "腌尖腥悶",
        "idiom2": "奄尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "腌尖腥悶",
        "idiom2": "淹尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "腌尖腥悶",
        "idiom2": "腌尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃尖聲悶",
        "idiom2": "㤿憸腥悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃尖聲悶",
        "idiom2": "奄尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃尖聲悶",
        "idiom2": "淹尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃尖聲悶",
        "idiom2": "腌尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃尖聲悶",
        "idiom2": "腌尖腥悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃臢腥悶",
        "idiom2": "㤿憸腥悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃臢腥悶",
        "idiom2": "奄尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃臢腥悶",
        "idiom2": "淹尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃臢腥悶",
        "idiom2": "腌尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃臢腥悶",
        "idiom2": "腌尖腥悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "醃臢腥悶",
        "idiom2": "醃尖聲悶",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "掩掩揚揚",
        "idiom2": "掩掩抰抰",
        "w0": {
            "initial": "j",
            "final": "im",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "im",
            "tone": "2"
        },
        "w2": {
            "initial": "j",
            "final": "oeng",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "演繹論證",
        "idiom2": "演繹論証",
        "w0": {
            "initial": "j",
            "final": "in",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "ik",
            "tone": "6"
        },
        "w2": {
            "initial": "l",
            "final": "eon",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        }
    },
    {
        "idiom": "絃外之音",
        "idiom2": "弦外之音",
        "w0": {
            "initial": "j",
            "final": "in",
            "tone": "4"
        },
        "w1": {
            "initial": "n",
            "final": "goi",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "am",
            "tone": "1"
        }
    },
    {
        "idiom": "言外之意",
        "idiom2": "弦外之意",
        "w0": {
            "initial": "j",
            "final": "in",
            "tone": "4"
        },
        "w1": {
            "initial": "n",
            "final": "goi",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "扷心扷肺",
        "idiom2": "么心么肺",
        "w0": {
            "initial": "j",
            "final": "iu",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "iu",
            "tone": "1"
        },
        "w3": {
            "initial": "f",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "約翰壹書",
        "idiom2": "約翰一書",
        "w0": {
            "initial": "j",
            "final": "oek",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "on",
            "tone": "6"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "yu",
            "tone": "1"
        }
    },
    {
        "idiom": "約翰貳書",
        "idiom2": "約翰二書",
        "w0": {
            "initial": "j",
            "final": "oek",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "on",
            "tone": "6"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "yu",
            "tone": "1"
        }
    },
    {
        "idiom": "羊群心理",
        "idiom2": "羊羣心理",
        "w0": {
            "initial": "j",
            "final": "oeng",
            "tone": "4"
        },
        "w1": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "養虎遺患",
        "idiom2": "養虎爲患",
        "w0": {
            "initial": "j",
            "final": "oeng",
            "tone": "5"
        },
        "w1": {
            "initial": "f",
            "final": "u",
            "tone": "2"
        },
        "w2": {
            "initial": "w",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "w",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "養家餬口",
        "idiom2": "養家糊口",
        "w0": {
            "initial": "j",
            "final": "oeng",
            "tone": "5"
        },
        "w1": {
            "initial": "g",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "郁身郁勢",
        "idiom2": "喐身喐勢",
        "w0": {
            "initial": "j",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "郁手郁腳",
        "idiom2": "喐手喐腳",
        "w0": {
            "initial": "j",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "j",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "欲仙欲死",
        "idiom2": "慾仙慾死",
        "w0": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "茸茸爛爛",
        "idiom2": "溶溶爛爛",
        "w0": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "蓉蓉爛爛",
        "idiom2": "溶溶爛爛",
        "w0": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "蓉蓉爛爛",
        "idiom2": "茸茸爛爛",
        "w0": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "融融爛爛",
        "idiom2": "溶溶爛爛",
        "w0": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "融融爛爛",
        "idiom2": "茸茸爛爛",
        "w0": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "融融爛爛",
        "idiom2": "蓉蓉爛爛",
        "w0": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "迂迴曲折",
        "idiom2": "迂回曲折",
        "w0": {
            "initial": "j",
            "final": "yu",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "ui",
            "tone": "4"
        },
        "w2": {
            "initial": "k",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "it",
            "tone": "3"
        }
    },
    {
        "idiom": "如法炮製",
        "idiom2": "如法泡製",
        "w0": {
            "initial": "j",
            "final": "yu",
            "tone": "4"
        },
        "w1": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        },
        "w2": {
            "initial": "p",
            "final": "aau",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "如雷貫耳",
        "idiom2": "如雷灌耳",
        "w0": {
            "initial": "j",
            "final": "yu",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "eoi",
            "tone": "4"
        },
        "w2": {
            "initial": "g",
            "final": "un",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "5"
        }
    },
    {
        "idiom": "越描越黑",
        "idiom2": "愈描愈黑",
        "w0": {
            "initial": "j",
            "final": "yut",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "iu",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "yut",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "ak",
            "tone": "1"
        }
    },
    {
        "idiom": "搇一巴掌",
        "idiom2": "冚一巴掌",
        "w0": {
            "initial": "k",
            "final": "am",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aa",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "禽禽青青",
        "idiom2": "擒擒青青",
        "w0": {
            "initial": "k",
            "final": "am",
            "tone": "4"
        },
        "w1": {
            "initial": "k",
            "final": "am",
            "tone": "4"
        },
        "w2": {
            "initial": "c",
            "final": "eng",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "eng",
            "tone": "1"
        }
    },
    {
        "idiom": "汲取教訓",
        "idiom2": "吸取教訓",
        "w0": {
            "initial": "k",
            "final": "ap",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "g",
            "final": "aau",
            "tone": "3"
        },
        "w3": {
            "initial": "f",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "傾盤大雨",
        "idiom2": "傾盆大雨",
        "w0": {
            "initial": "k",
            "final": "ing",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "un",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "j",
            "final": "yu",
            "tone": "5"
        }
    },
    {
        "idiom": "蹺口劖手",
        "idiom2": "蹺口㔆手",
        "w0": {
            "initial": "k",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "aam",
            "tone": "5"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "蹺口巉手",
        "idiom2": "蹺口㔆手",
        "w0": {
            "initial": "k",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "aam",
            "tone": "5"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "蹺口巉手",
        "idiom2": "蹺口劖手",
        "w0": {
            "initial": "k",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "aam",
            "tone": "5"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "蹺口杉手",
        "idiom2": "蹺口㔆手",
        "w0": {
            "initial": "k",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "aam",
            "tone": "5"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "蹺口杉手",
        "idiom2": "蹺口劖手",
        "w0": {
            "initial": "k",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "aam",
            "tone": "5"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "蹺口杉手",
        "idiom2": "蹺口巉手",
        "w0": {
            "initial": "k",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "c",
            "final": "aam",
            "tone": "5"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "蓋世英雄",
        "idiom2": "丐世英雄",
        "w0": {
            "initial": "k",
            "final": "oi",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "ai",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "ing",
            "tone": "1"
        },
        "w3": {
            "initial": "h",
            "final": "ung",
            "tone": "4"
        }
    },
    {
        "idiom": "群策群力",
        "idiom2": "羣策羣力",
        "w0": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "aak",
            "tone": "3"
        },
        "w2": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "ik",
            "tone": "6"
        }
    },
    {
        "idiom": "群龍無首",
        "idiom2": "羣龍無首",
        "w0": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "群星拱照",
        "idiom2": "羣星拱照",
        "w0": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "ung",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "揦口揦面",
        "idiom2": "嗱口嗱面",
        "w0": {
            "initial": "l",
            "final": "aa",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "aa",
            "tone": "2"
        },
        "w3": {
            "initial": "m",
            "final": "in",
            "tone": "6"
        }
    },
    {
        "idiom": "揦喉揦脷",
        "idiom2": "剌喉剌脷",
        "w0": {
            "initial": "l",
            "final": "aa",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "aa",
            "tone": "2"
        },
        "w3": {
            "initial": "l",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "賴賴晒晒",
        "idiom2": "殀殀晒晒",
        "w0": {
            "initial": "l",
            "final": "aai",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "aai",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "aai",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "aai",
            "tone": "4"
        }
    },
    {
        "idiom": "躝屍趷路",
        "idiom2": "躝屍趌路",
        "w0": {
            "initial": "l",
            "final": "aan",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "ou",
            "tone": "6"
        }
    },
    {
        "idiom": "立竿見影",
        "idiom2": "立杆見影",
        "w0": {
            "initial": "l",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "on",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "in",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "ing",
            "tone": "2"
        }
    },
    {
        "idiom": "立立雜雜",
        "idiom2": "垃垃雜雜",
        "w0": {
            "initial": "l",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "l",
            "final": "aap",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "aap",
            "tone": "6"
        }
    },
    {
        "idiom": "捩橫折曲",
        "idiom2": "戾橫折曲",
        "w0": {
            "initial": "l",
            "final": "ai",
            "tone": "2"
        },
        "w1": {
            "initial": "w",
            "final": "aang",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "it",
            "tone": "3"
        },
        "w3": {
            "initial": "k",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "甩甩咳咳",
        "idiom2": "犖犖确确",
        "w0": {
            "initial": "l",
            "final": "ak",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ak",
            "tone": "1"
        },
        "w2": {
            "initial": "k",
            "final": "ak",
            "tone": "1"
        },
        "w3": {
            "initial": "k",
            "final": "ak",
            "tone": "1"
        }
    },
    {
        "idiom": "淋灕盡致",
        "idiom2": "淋漓盡致",
        "w0": {
            "initial": "l",
            "final": "am",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "eon",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "褸丘僂侸",
        "idiom2": "嬲休僂斗",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "褸丘僂斗",
        "idiom2": "嬲休僂斗",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "褸丘僂斗",
        "idiom2": "褸丘僂侸",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "褸幽僂斗",
        "idiom2": "嬲休僂斗",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "褸幽僂斗",
        "idiom2": "褸丘僂侸",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "褸幽僂斗",
        "idiom2": "褸丘僂斗",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "留芳百世",
        "idiom2": "流芳百世",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "4"
        },
        "w1": {
            "initial": "f",
            "final": "ong",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aak",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "琉球羣島",
        "idiom2": "流球羣島",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "4"
        },
        "w1": {
            "initial": "k",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "2"
        }
    },
    {
        "idiom": "流離浪蕩",
        "idiom2": "流離朗蕩",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "ong",
            "tone": "5"
        },
        "w3": {
            "initial": "d",
            "final": "ong",
            "tone": "6"
        }
    },
    {
        "idiom": "留連忘返",
        "idiom2": "流連忘返",
        "w0": {
            "initial": "l",
            "final": "au",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "in",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "ong",
            "tone": "4"
        },
        "w3": {
            "initial": "f",
            "final": "aan",
            "tone": "2"
        }
    },
    {
        "idiom": "李氏力牆",
        "idiom2": "李氏力場",
        "w0": {
            "initial": "l",
            "final": "ei",
            "tone": "5"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w2": {
            "initial": "l",
            "final": "ik",
            "tone": "6"
        },
        "w3": {
            "initial": "c",
            "final": "oeng",
            "tone": "4"
        }
    },
    {
        "idiom": "擂沙湯圓",
        "idiom2": "擂沙湯丸",
        "w0": {
            "initial": "l",
            "final": "eoi",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "t",
            "final": "ong",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "yun",
            "tone": "2"
        }
    },
    {
        "idiom": "廉正公署",
        "idiom2": "廉政公署",
        "w0": {
            "initial": "l",
            "final": "im",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        },
        "w2": {
            "initial": "g",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "yu",
            "tone": "5"
        }
    },
    {
        "idiom": "連珠砲發",
        "idiom2": "連珠炮發",
        "w0": {
            "initial": "l",
            "final": "in",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "yu",
            "tone": "1"
        },
        "w2": {
            "initial": "p",
            "final": "aau",
            "tone": "3"
        },
        "w3": {
            "initial": "f",
            "final": "aat",
            "tone": "3"
        }
    },
    {
        "idiom": "零零林林",
        "idiom2": "凌凌林林",
        "w0": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "am",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "am",
            "tone": "4"
        }
    },
    {
        "idiom": "玲瓏浮突",
        "idiom2": "玲瓏浮凸",
        "w0": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "f",
            "final": "au",
            "tone": "4"
        },
        "w3": {
            "initial": "d",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "靈牙利齒",
        "idiom2": "伶牙俐齒",
        "w0": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "n",
            "final": "gaa",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "ei",
            "tone": "6"
        },
        "w3": {
            "initial": "c",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "囉哩囉嗦",
        "idiom2": "囉哩囉唆",
        "w0": {
            "initial": "l",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "兩道散手",
        "idiom2": "兩度散手",
        "w0": {
            "initial": "l",
            "final": "oeng",
            "tone": "5"
        },
        "w1": {
            "initial": "d",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "s",
            "final": "aan",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "兩脇插刀",
        "idiom2": "兩脅插刀",
        "w0": {
            "initial": "l",
            "final": "oeng",
            "tone": "5"
        },
        "w1": {
            "initial": "h",
            "final": "ip",
            "tone": "3"
        },
        "w2": {
            "initial": "c",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "兩相情願",
        "idiom2": "兩廂情願",
        "w0": {
            "initial": "l",
            "final": "oeng",
            "tone": "5"
        },
        "w1": {
            "initial": "s",
            "final": "oeng",
            "tone": "1"
        },
        "w2": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "yun",
            "tone": "6"
        }
    },
    {
        "idiom": "落地簽證",
        "idiom2": "落地簽証",
        "w0": {
            "initial": "l",
            "final": "ok",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "im",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        }
    },
    {
        "idiom": "駱驛不絕",
        "idiom2": "絡繹不絕",
        "w0": {
            "initial": "l",
            "final": "ok",
            "tone": "6"
        },
        "w1": {
            "initial": "j",
            "final": "ik",
            "tone": "6"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "yut",
            "tone": "6"
        }
    },
    {
        "idiom": "浪口洗面",
        "idiom2": "哴口洗面",
        "w0": {
            "initial": "l",
            "final": "ong",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "m",
            "final": "in",
            "tone": "6"
        }
    },
    {
        "idiom": "老奸巨猾",
        "idiom2": "老奸巨滑",
        "w0": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "g",
            "final": "aan",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "eoi",
            "tone": "6"
        },
        "w3": {
            "initial": "w",
            "final": "aat",
            "tone": "6"
        }
    },
    {
        "idiom": "老老豆豆",
        "idiom2": "老老竇竇",
        "w0": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w2": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "老少鹹宜",
        "idiom2": "老少咸宜",
        "w0": {
            "initial": "l",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "s",
            "final": "iu",
            "tone": "3"
        },
        "w2": {
            "initial": "h",
            "final": "aam",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        }
    },
    {
        "idiom": "碌人情咭",
        "idiom2": "碌人情卡",
        "w0": {
            "initial": "l",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "k",
            "final": "aat",
            "tone": "1"
        }
    },
    {
        "idiom": "窿窿罅罅",
        "idiom2": "窿㝫罅罅",
        "w0": {
            "initial": "l",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "aa",
            "tone": "3"
        },
        "w3": {
            "initial": "l",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "攣弮蝦米",
        "idiom2": "攣弓蝦米",
        "w0": {
            "initial": "l",
            "final": "yun",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "aa",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "ai",
            "tone": "5"
        }
    },
    {
        "idiom": "唔湊米氣",
        "idiom2": "唔嗅米氣",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "au",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "ai",
            "tone": "5"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "唔臭米氣",
        "idiom2": "唔嗅米氣",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "au",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "ai",
            "tone": "5"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "唔臭米氣",
        "idiom2": "唔湊米氣",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "au",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "ai",
            "tone": "5"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "唔爹唔弔",
        "idiom2": "唔爹唔吊",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "d",
            "final": "e",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "d",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "唔驚唔覺",
        "idiom2": "唔經唔覺",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "g",
            "final": "ok",
            "tone": "3"
        }
    },
    {
        "idiom": "唔好亂逳",
        "idiom2": "唔好亂喐",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "h",
            "final": "ou",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "yun",
            "tone": "6"
        },
        "w3": {
            "initial": "j",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "唔使面青",
        "idiom2": "唔使面靑",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "in",
            "tone": "6"
        },
        "w3": {
            "initial": "c",
            "final": "eng",
            "tone": "1"
        }
    },
    {
        "idiom": "唔使指擬",
        "idiom2": "唔使指意",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "唔使旨意",
        "idiom2": "唔使指意",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "唔使旨意",
        "idiom2": "唔使指擬",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "唔制得過",
        "idiom2": "唔䎺得過",
        "w0": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "ai",
            "tone": "3"
        },
        "w2": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w3": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        }
    },
    {
        "idiom": "咪使旨意",
        "idiom2": "咪使指意",
        "w0": {
            "initial": "m",
            "final": "ai",
            "tone": "5"
        },
        "w1": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "蚊螆噉聲",
        "idiom2": "蚊滋噉聲",
        "w0": {
            "initial": "m",
            "final": "an",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "am",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "eng",
            "tone": "1"
        }
    },
    {
        "idiom": "紋風不動",
        "idiom2": "文風不動",
        "w0": {
            "initial": "m",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ung",
            "tone": "6"
        }
    },
    {
        "idiom": "乜嘢料啊",
        "idiom2": "乜嘢料呀",
        "w0": {
            "initial": "m",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "e",
            "tone": "5"
        },
        "w2": {
            "initial": "l",
            "final": "iu",
            "tone": "2"
        },
        "w3": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        }
    },
    {
        "idiom": "美輪美奐",
        "idiom2": "美侖美奐",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "eon",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        },
        "w3": {
            "initial": "w",
            "final": "un",
            "tone": "6"
        }
    },
    {
        "idiom": "未水銅人",
        "idiom2": "昧水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "沒水銅人",
        "idiom2": "昧水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "沒水銅人",
        "idiom2": "未水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "沬水銅人",
        "idiom2": "昧水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "沬水銅人",
        "idiom2": "未水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "沬水銅人",
        "idiom2": "沒水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "眛水銅人",
        "idiom2": "昧水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "眛水銅人",
        "idiom2": "未水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "眛水銅人",
        "idiom2": "沒水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "眛水銅人",
        "idiom2": "沬水銅人",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "氼水舂牆",
        "idiom2": "昧水舂牆",
        "w0": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "oeng",
            "tone": "4"
        }
    },
    {
        "idiom": "咪咪嚤嚤",
        "idiom2": "咪咪嚒嚒",
        "w0": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "咪咪摩摩",
        "idiom2": "咪咪嚒嚒",
        "w0": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "咪咪摩摩",
        "idiom2": "咪咪嚤嚤",
        "w0": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "咪咪摸摸",
        "idiom2": "咪咪嚒嚒",
        "w0": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "咪咪摸摸",
        "idiom2": "咪咪嚤嚤",
        "w0": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "咪咪摸摸",
        "idiom2": "咪咪摩摩",
        "w0": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "面紅耳赤",
        "idiom2": "臉紅耳赤",
        "w0": {
            "initial": "m",
            "final": "in",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "ek",
            "tone": "3"
        }
    },
    {
        "idiom": "名列前茅",
        "idiom2": "名列前矛",
        "w0": {
            "initial": "m",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "it",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "in",
            "tone": "4"
        },
        "w3": {
            "initial": "m",
            "final": "aau",
            "tone": "4"
        }
    },
    {
        "idiom": "命中註定",
        "idiom2": "命中注定",
        "w0": {
            "initial": "m",
            "final": "ing",
            "tone": "6"
        },
        "w1": {
            "initial": "z",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "yu",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "廟嘴廟舌",
        "idiom2": "妙嘴妙舌",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "z",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "iu",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "it",
            "tone": "6"
        }
    },
    {
        "idiom": "藐嘴藐舌",
        "idiom2": "妙嘴妙舌",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "z",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "iu",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "it",
            "tone": "6"
        }
    },
    {
        "idiom": "藐嘴藐舌",
        "idiom2": "廟嘴廟舌",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "z",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "iu",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "it",
            "tone": "6"
        }
    },
    {
        "idiom": "杳無音訊",
        "idiom2": "杳無音信",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "eon",
            "tone": "3"
        }
    },
    {
        "idiom": "渺無音信",
        "idiom2": "杳無音信",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "eon",
            "tone": "3"
        }
    },
    {
        "idiom": "渺無音信",
        "idiom2": "杳無音訊",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "am",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "eon",
            "tone": "3"
        }
    },
    {
        "idiom": "渺無人菸",
        "idiom2": "杳無人菸",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        }
    },
    {
        "idiom": "摸頭摸髻",
        "idiom2": "摩頭摩髻",
        "w0": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "莫明其妙",
        "idiom2": "莫名其妙",
        "w0": {
            "initial": "m",
            "final": "ok",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "k",
            "final": "ei",
            "tone": "4"
        },
        "w3": {
            "initial": "m",
            "final": "iu",
            "tone": "6"
        }
    },
    {
        "idiom": "望乜嘢啊",
        "idiom2": "望乜嘢呀",
        "w0": {
            "initial": "m",
            "final": "ong",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "e",
            "tone": "5"
        },
        "w3": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        }
    },
    {
        "idiom": "無容置疑",
        "idiom2": "毋庸置疑",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        }
    },
    {
        "idiom": "無庸置疑",
        "idiom2": "毋庸置疑",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        }
    },
    {
        "idiom": "無庸置疑",
        "idiom2": "無容置疑",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        }
    },
    {
        "idiom": "無權無勇",
        "idiom2": "無拳無勇",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w1": {
            "initial": "k",
            "final": "yun",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "ung",
            "tone": "5"
        }
    },
    {
        "idiom": "無尾飛陀",
        "idiom2": "無尾飛砣",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        }
    },
    {
        "idiom": "冇得走趲",
        "idiom2": "冇得走盞",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "aan",
            "tone": "2"
        }
    },
    {
        "idiom": "冇掩雞籠",
        "idiom2": "冇厴雞籠",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "j",
            "final": "im",
            "tone": "2"
        },
        "w2": {
            "initial": "g",
            "final": "ai",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        }
    },
    {
        "idiom": "冇嚟正經",
        "idiom2": "冇厘正經",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ai",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "ing",
            "tone": "1"
        }
    },
    {
        "idiom": "冇嚟搭霎",
        "idiom2": "冇厘搭霎",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "冇釐搭霎",
        "idiom2": "冇厘搭霎",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "冇釐搭霎",
        "idiom2": "冇嚟搭霎",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "aap",
            "tone": "3"
        }
    },
    {
        "idiom": "冇釐神氣",
        "idiom2": "冇嚟神氣",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "冇離神氣",
        "idiom2": "冇嚟神氣",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "冇離神氣",
        "idiom2": "冇釐神氣",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "冇尾飛鉈",
        "idiom2": "冇尾飛砣",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        }
    },
    {
        "idiom": "冇尾飛陀",
        "idiom2": "冇尾飛砣",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        }
    },
    {
        "idiom": "冇尾飛陀",
        "idiom2": "冇尾飛鉈",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        }
    },
    {
        "idiom": "霧裡看花",
        "idiom2": "霧裏看花",
        "w0": {
            "initial": "m",
            "final": "ou",
            "tone": "6"
        },
        "w1": {
            "initial": "l",
            "final": "eoi",
            "tone": "5"
        },
        "w2": {
            "initial": "h",
            "final": "on",
            "tone": "3"
        },
        "w3": {
            "initial": "f",
            "final": "aa",
            "tone": "1"
        }
    },
    {
        "idiom": "目擊證人",
        "idiom2": "目擊証人",
        "w0": {
            "initial": "m",
            "final": "uk",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "ik",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "目無表情",
        "idiom2": "木無表情",
        "w0": {
            "initial": "m",
            "final": "uk",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "iu",
            "tone": "2"
        },
        "w3": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        }
    },
    {
        "idiom": "濛濛查查",
        "idiom2": "朦朦茶茶",
        "w0": {
            "initial": "m",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "m",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "c",
            "final": "aa",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "aa",
            "tone": "4"
        }
    },
    {
        "idiom": "蒙混過關",
        "idiom2": "矇混過關",
        "w0": {
            "initial": "m",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "6"
        },
        "w2": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        },
        "w3": {
            "initial": "gw",
            "final": "aan",
            "tone": "1"
        }
    },
    {
        "idiom": "矇在鼓裏",
        "idiom2": "朦在鼓裏",
        "w0": {
            "initial": "m",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w3": {
            "initial": "l",
            "final": "eoi",
            "tone": "5"
        }
    },
    {
        "idiom": "蒙在鼓裏",
        "idiom2": "朦在鼓裏",
        "w0": {
            "initial": "m",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w3": {
            "initial": "l",
            "final": "eoi",
            "tone": "5"
        }
    },
    {
        "idiom": "蒙在鼓裏",
        "idiom2": "矇在鼓裏",
        "w0": {
            "initial": "m",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "oi",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w3": {
            "initial": "l",
            "final": "eoi",
            "tone": "5"
        }
    },
    {
        "idiom": "諗返轉頭",
        "idiom2": "諗翻轉頭",
        "w0": {
            "initial": "n",
            "final": "am",
            "tone": "2"
        },
        "w1": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "yun",
            "tone": "3"
        },
        "w3": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        }
    },
    {
        "idiom": "能歌擅舞",
        "idiom2": "能歌善舞",
        "w0": {
            "initial": "n",
            "final": "ang",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "o",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "in",
            "tone": "6"
        },
        "w3": {
            "initial": "m",
            "final": "ou",
            "tone": "5"
        }
    },
    {
        "idiom": "凹凹突突",
        "idiom2": "凹凹凸凸",
        "w0": {
            "initial": "n",
            "final": "ap",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "ap",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "at",
            "tone": "6"
        }
    },
    {
        "idiom": "尼龍搭釦",
        "idiom2": "尼龍搭扣",
        "w0": {
            "initial": "n",
            "final": "ei",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aap",
            "tone": "3"
        },
        "w3": {
            "initial": "k",
            "final": "au",
            "tone": "3"
        }
    },
    {
        "idiom": "你最鍾意",
        "idiom2": "你最中意",
        "w0": {
            "initial": "n",
            "final": "ei",
            "tone": "5"
        },
        "w1": {
            "initial": "z",
            "final": "eoi",
            "tone": "3"
        },
        "w2": {
            "initial": "z",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "女人湯圓",
        "idiom2": "女人湯丸",
        "w0": {
            "initial": "n",
            "final": "eoi",
            "tone": "5"
        },
        "w1": {
            "initial": "j",
            "final": "an",
            "tone": "2"
        },
        "w2": {
            "initial": "t",
            "final": "ong",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "yun",
            "tone": "2"
        }
    },
    {
        "idiom": "五筆字形",
        "idiom2": "五筆字型",
        "w0": {
            "initial": "",
            "final": "ng",
            "tone": "5"
        },
        "w1": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "6"
        },
        "w3": {
            "initial": "j",
            "final": "ing",
            "tone": "4"
        }
    },
    {
        "idiom": "五彩賓紛",
        "idiom2": "五彩繽紛",
        "w0": {
            "initial": "",
            "final": "ng",
            "tone": "5"
        },
        "w1": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        },
        "w2": {
            "initial": "b",
            "final": "an",
            "tone": "1"
        },
        "w3": {
            "initial": "f",
            "final": "an",
            "tone": "1"
        }
    },
    {
        "idiom": "枒手枒腳",
        "idiom2": "掗手掗腳",
        "w0": {
            "initial": "n",
            "final": "gaa",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "n",
            "final": "gaa",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "捱更抵夜",
        "idiom2": "挨更抵夜",
        "w0": {
            "initial": "n",
            "final": "gaai",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "aang",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "e",
            "tone": "6"
        }
    },
    {
        "idiom": "捱飢抵餓",
        "idiom2": "挨飢抵餓",
        "w0": {
            "initial": "n",
            "final": "gaai",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "go",
            "tone": "6"
        }
    },
    {
        "idiom": "捱饑抵餓",
        "idiom2": "挨飢抵餓",
        "w0": {
            "initial": "n",
            "final": "gaai",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "go",
            "tone": "6"
        }
    },
    {
        "idiom": "捱饑抵餓",
        "idiom2": "捱飢抵餓",
        "w0": {
            "initial": "n",
            "final": "gaai",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "go",
            "tone": "6"
        }
    },
    {
        "idiom": "捱生捱死",
        "idiom2": "挨生挨死",
        "w0": {
            "initial": "n",
            "final": "gaai",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "aang",
            "tone": "1"
        },
        "w2": {
            "initial": "n",
            "final": "gaai",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "巖巖巉巉",
        "idiom2": "岩岩巉巉",
        "w0": {
            "initial": "n",
            "final": "gaam",
            "tone": "4"
        },
        "w1": {
            "initial": "n",
            "final": "gaam",
            "tone": "4"
        },
        "w2": {
            "initial": "c",
            "final": "aam",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "aam",
            "tone": "4"
        }
    },
    {
        "idiom": "吟吟沉沉",
        "idiom2": "吟吟尋尋",
        "w0": {
            "initial": "n",
            "final": "gam",
            "tone": "4"
        },
        "w1": {
            "initial": "n",
            "final": "gam",
            "tone": "4"
        },
        "w2": {
            "initial": "c",
            "final": "am",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "am",
            "tone": "4"
        }
    },
    {
        "idiom": "鉤心鬥角",
        "idiom2": "勾心鬥角",
        "w0": {
            "initial": "n",
            "final": "gau",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "au",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "ok",
            "tone": "3"
        }
    },
    {
        "idiom": "吽吽竇竇",
        "idiom2": "吽吽哣哣",
        "w0": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w2": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "吽吽豆豆",
        "idiom2": "吽吽哣哣",
        "w0": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w2": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "吽吽豆豆",
        "idiom2": "吽吽竇竇",
        "w0": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w2": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "吽吽逗逗",
        "idiom2": "吽吽哣哣",
        "w0": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w2": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "吽吽逗逗",
        "idiom2": "吽吽竇竇",
        "w0": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w2": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "吽吽逗逗",
        "idiom2": "吽吽豆豆",
        "w0": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w1": {
            "initial": "n",
            "final": "gau",
            "tone": "6"
        },
        "w2": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "外部鏈接",
        "idiom2": "外部連接",
        "w0": {
            "initial": "n",
            "final": "goi",
            "tone": "6"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "l",
            "final": "in",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "ip",
            "tone": "3"
        }
    },
    {
        "idiom": "糯米屎窟",
        "idiom2": "糯米屎忽",
        "w0": {
            "initial": "n",
            "final": "o",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ai",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "f",
            "final": "at",
            "tone": "1"
        }
    },
    {
        "idiom": "耐佢唔何",
        "idiom2": "奈佢唔何",
        "w0": {
            "initial": "n",
            "final": "oi",
            "tone": "6"
        },
        "w1": {
            "initial": "k",
            "final": "eoi",
            "tone": "5"
        },
        "w2": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "o",
            "tone": "4"
        }
    },
    {
        "idiom": "腦性麻痹",
        "idiom2": "腦性痲痹",
        "w0": {
            "initial": "n",
            "final": "ou",
            "tone": "5"
        },
        "w1": {
            "initial": "s",
            "final": "ing",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "4"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "按部就班",
        "idiom2": "按步就班",
        "w0": {
            "initial": "o",
            "final": "n",
            "tone": "3"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "au",
            "tone": "6"
        },
        "w3": {
            "initial": "b",
            "final": "aan",
            "tone": "1"
        }
    },
    {
        "idiom": "攀龍附鳳",
        "idiom2": "扳龍附鳳",
        "w0": {
            "initial": "p",
            "final": "aan",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "f",
            "final": "u",
            "tone": "6"
        },
        "w3": {
            "initial": "f",
            "final": "ung",
            "tone": "6"
        }
    },
    {
        "idiom": "披麻戴孝",
        "idiom2": "披麻帶孝",
        "w0": {
            "initial": "p",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "aa",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "3"
        },
        "w3": {
            "initial": "h",
            "final": "aau",
            "tone": "3"
        }
    },
    {
        "idiom": "披星戴月",
        "idiom2": "披星帶月",
        "w0": {
            "initial": "p",
            "final": "ei",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "yut",
            "tone": "6"
        }
    },
    {
        "idiom": "膀頭突額",
        "idiom2": "膀頭凸額",
        "w0": {
            "initial": "p",
            "final": "ong",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "n",
            "final": "gaak",
            "tone": "6"
        }
    },
    {
        "idiom": "普渡慈航",
        "idiom2": "慈航普渡",
        "w0": {
            "initial": "p",
            "final": "ou",
            "tone": "2"
        },
        "w1": {
            "initial": "d",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "i",
            "tone": "4"
        },
        "w3": {
            "initial": "h",
            "final": "ong",
            "tone": "4"
        }
    },
    {
        "idiom": "普渡衆生",
        "idiom2": "普度衆生",
        "w0": {
            "initial": "p",
            "final": "ou",
            "tone": "2"
        },
        "w1": {
            "initial": "d",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "z",
            "final": "ung",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "ang",
            "tone": "1"
        }
    },
    {
        "idiom": "蟠根錯節",
        "idiom2": "盤根錯節",
        "w0": {
            "initial": "p",
            "final": "un",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "c",
            "final": "o",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "it",
            "tone": "3"
        }
    },
    {
        "idiom": "沙煲罌罉",
        "idiom2": "沙煲甖罉",
        "w0": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "a",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "aang",
            "tone": "1"
        }
    },
    {
        "idiom": "砂煲甖罉",
        "idiom2": "沙煲甖罉",
        "w0": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "a",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "aang",
            "tone": "1"
        }
    },
    {
        "idiom": "砂煲甖罉",
        "idiom2": "沙煲罌罉",
        "w0": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "a",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "aang",
            "tone": "1"
        }
    },
    {
        "idiom": "砂煲罌罉",
        "idiom2": "沙煲甖罉",
        "w0": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "a",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "aang",
            "tone": "1"
        }
    },
    {
        "idiom": "砂煲罌罉",
        "idiom2": "沙煲罌罉",
        "w0": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "a",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "aang",
            "tone": "1"
        }
    },
    {
        "idiom": "砂煲罌罉",
        "idiom2": "砂煲甖罉",
        "w0": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "a",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "aang",
            "tone": "1"
        }
    },
    {
        "idiom": "砂煲兄弟",
        "idiom2": "沙煲兄弟",
        "w0": {
            "initial": "s",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "ing",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ai",
            "tone": "6"
        }
    },
    {
        "idiom": "耍手擰頭",
        "idiom2": "灑手擰頭",
        "w0": {
            "initial": "s",
            "final": "aa",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "n",
            "final": "ing",
            "tone": "6"
        },
        "w3": {
            "initial": "t",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "三點畢露",
        "idiom2": "三點不露",
        "w0": {
            "initial": "s",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "im",
            "tone": "2"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "ou",
            "tone": "6"
        }
    },
    {
        "idiom": "三道板斧",
        "idiom2": "三度板斧",
        "w0": {
            "initial": "s",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        },
        "w3": {
            "initial": "f",
            "final": "u",
            "tone": "2"
        }
    },
    {
        "idiom": "三顧茅蘆",
        "idiom2": "三顧茅廬",
        "w0": {
            "initial": "s",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "u",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "aau",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "三五成群",
        "idiom2": "三五成羣",
        "w0": {
            "initial": "s",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "",
            "final": "ng",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "kw",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "三爬兩撥",
        "idiom2": "三扒兩撥",
        "w0": {
            "initial": "s",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "aa",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "oeng",
            "tone": "5"
        },
        "w3": {
            "initial": "b",
            "final": "ut",
            "tone": "6"
        }
    },
    {
        "idiom": "山竉山罅",
        "idiom2": "山窿山罅",
        "w0": {
            "initial": "s",
            "final": "aan",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "l",
            "final": "aa",
            "tone": "3"
        }
    },
    {
        "idiom": "生蟲柺杖",
        "idiom2": "生蟲拐杖",
        "w0": {
            "initial": "s",
            "final": "aang",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "ung",
            "tone": "4"
        },
        "w2": {
            "initial": "gw",
            "final": "aai",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "生安白造",
        "idiom2": "生安白做",
        "w0": {
            "initial": "s",
            "final": "aang",
            "tone": "1"
        },
        "w1": {
            "initial": "o",
            "final": "n",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aak",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        }
    },
    {
        "idiom": "烚下烚下",
        "idiom2": "拾下拾下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "煠下煠下",
        "idiom2": "拾下拾下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "煠下煠下",
        "idiom2": "烚下烚下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "熠下熠下",
        "idiom2": "拾下拾下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "熠下熠下",
        "idiom2": "烚下烚下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "熠下熠下",
        "idiom2": "煠下煠下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎下霎下",
        "idiom2": "拾下拾下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎下霎下",
        "idiom2": "烚下烚下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎下霎下",
        "idiom2": "煠下煠下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎下霎下",
        "idiom2": "熠下熠下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎吓霎吓",
        "idiom2": "拾下拾下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎吓霎吓",
        "idiom2": "烚下烚下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎吓霎吓",
        "idiom2": "煠下煠下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎吓霎吓",
        "idiom2": "熠下熠下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "霎吓霎吓",
        "idiom2": "霎下霎下",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "煠熟狗頭",
        "idiom2": "烚熟狗頭",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "uk",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        }
    },
    {
        "idiom": "熠熟狗頭",
        "idiom2": "烚熟狗頭",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "uk",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        }
    },
    {
        "idiom": "熠熟狗頭",
        "idiom2": "煠熟狗頭",
        "w0": {
            "initial": "s",
            "final": "aap",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "uk",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        }
    },
    {
        "idiom": "殺雞警猴",
        "idiom2": "殺雞儆猴",
        "w0": {
            "initial": "s",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "ai",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "ing",
            "tone": "2"
        },
        "w3": {
            "initial": "h",
            "final": "au",
            "tone": "4"
        }
    },
    {
        "idiom": "煞氣騰騰",
        "idiom2": "殺氣騰騰",
        "w0": {
            "initial": "s",
            "final": "aat",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        },
        "w2": {
            "initial": "t",
            "final": "ang",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ang",
            "tone": "4"
        }
    },
    {
        "idiom": "洗定蘿柚",
        "idiom2": "洗定籮柚",
        "w0": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w1": {
            "initial": "d",
            "final": "ing",
            "tone": "6"
        },
        "w2": {
            "initial": "l",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "心驚膽顫",
        "idiom2": "心驚膽戰",
        "w0": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "eng",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aam",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "in",
            "tone": "3"
        }
    },
    {
        "idiom": "心砰砰跳",
        "idiom2": "心怦怦跳",
        "w0": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w1": {
            "initial": "p",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "p",
            "final": "ing",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "心拙口笨",
        "idiom2": "心拙口夯",
        "w0": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "yut",
            "tone": "3"
        },
        "w2": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "b",
            "final": "an",
            "tone": "6"
        }
    },
    {
        "idiom": "身驕肉貴",
        "idiom2": "身嬌肉貴",
        "w0": {
            "initial": "s",
            "final": "an",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "iu",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        },
        "w3": {
            "initial": "gw",
            "final": "ai",
            "tone": "3"
        }
    },
    {
        "idiom": "神推鬼擁",
        "idiom2": "神推鬼㧬",
        "w0": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "t",
            "final": "eoi",
            "tone": "1"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "u",
            "final": "ng",
            "tone": "2"
        }
    },
    {
        "idiom": "神臺貓屎",
        "idiom2": "神檯貓屎",
        "w0": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "t",
            "final": "oi",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "aau",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "神智不清",
        "idiom2": "神志不清",
        "w0": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "ing",
            "tone": "1"
        }
    },
    {
        "idiom": "手板眼見",
        "idiom2": "手扳眼見",
        "w0": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w1": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        },
        "w2": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        },
        "w3": {
            "initial": "g",
            "final": "in",
            "tone": "3"
        }
    },
    {
        "idiom": "手騰腳震",
        "idiom2": "手揗腳震",
        "w0": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "瘦骨癩柴",
        "idiom2": "瘦骨拉柴",
        "w0": {
            "initial": "s",
            "final": "au",
            "tone": "3"
        },
        "w1": {
            "initial": "gw",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "aai",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "aai",
            "tone": "4"
        }
    },
    {
        "idiom": "瘦骨賴柴",
        "idiom2": "瘦骨拉柴",
        "w0": {
            "initial": "s",
            "final": "au",
            "tone": "3"
        },
        "w1": {
            "initial": "gw",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "aai",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "aai",
            "tone": "4"
        }
    },
    {
        "idiom": "瘦骨賴柴",
        "idiom2": "瘦骨癩柴",
        "w0": {
            "initial": "s",
            "final": "au",
            "tone": "3"
        },
        "w1": {
            "initial": "gw",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "aai",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "aai",
            "tone": "4"
        }
    },
    {
        "idiom": "死不瞑目",
        "idiom2": "死不冥目",
        "w0": {
            "initial": "s",
            "final": "ei",
            "tone": "2"
        },
        "w1": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ing",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "uk",
            "tone": "6"
        }
    },
    {
        "idiom": "死過返生",
        "idiom2": "死過翻生",
        "w0": {
            "initial": "s",
            "final": "ei",
            "tone": "2"
        },
        "w1": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        },
        "w2": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "aang",
            "tone": "1"
        }
    },
    {
        "idiom": "死淨把口",
        "idiom2": "死剩把口",
        "w0": {
            "initial": "s",
            "final": "ei",
            "tone": "2"
        },
        "w1": {
            "initial": "z",
            "final": "ing",
            "tone": "6"
        },
        "w2": {
            "initial": "b",
            "final": "aa",
            "tone": "2"
        },
        "w3": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "斯文淡定",
        "idiom2": "斯文倓定",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aam",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "私私縮縮",
        "idiom2": "思思縮縮",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "uk",
            "tone": "1"
        }
    },
    {
        "idiom": "思華力腸",
        "idiom2": "司華力腸",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "aa",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "ik",
            "tone": "6"
        },
        "w3": {
            "initial": "c",
            "final": "oeng",
            "tone": "2"
        }
    },
    {
        "idiom": "屎窟撞棍",
        "idiom2": "屎忽撞棍",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "2"
        },
        "w1": {
            "initial": "f",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "gw",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "事九旦旦",
        "idiom2": "事九但但",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是九但但",
        "idiom2": "事九但但",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是九但但",
        "idiom2": "事九旦旦",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是九旦旦",
        "idiom2": "事九但但",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是九旦旦",
        "idiom2": "事九旦旦",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是九旦旦",
        "idiom2": "是九但但",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是狗彈彈",
        "idiom2": "事九但但",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是狗彈彈",
        "idiom2": "事九旦旦",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是狗彈彈",
        "idiom2": "是九但但",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "是狗彈彈",
        "idiom2": "是九旦旦",
        "w0": {
            "initial": "s",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "aan",
            "tone": "6"
        }
    },
    {
        "idiom": "食得瞓得",
        "idiom2": "食得睏得",
        "w0": {
            "initial": "s",
            "final": "ik",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "an",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        }
    },
    {
        "idiom": "食飯未啊",
        "idiom2": "食飯未吖",
        "w0": {
            "initial": "s",
            "final": "ik",
            "tone": "6"
        },
        "w1": {
            "initial": "f",
            "final": "aan",
            "tone": "6"
        },
        "w2": {
            "initial": "m",
            "final": "ei",
            "tone": "6"
        },
        "w3": {
            "initial": "a",
            "final": "a",
            "tone": "3"
        }
    },
    {
        "idiom": "食蓮子羹",
        "idiom2": "食蓮子羮",
        "w0": {
            "initial": "s",
            "final": "ik",
            "tone": "6"
        },
        "w1": {
            "initial": "l",
            "final": "in",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "g",
            "final": "ang",
            "tone": "1"
        }
    },
    {
        "idiom": "星羅棋布",
        "idiom2": "星羅棋佈",
        "w0": {
            "initial": "s",
            "final": "ing",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "o",
            "tone": "4"
        },
        "w2": {
            "initial": "k",
            "final": "ei",
            "tone": "4"
        },
        "w3": {
            "initial": "b",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "銷聲匿跡",
        "idiom2": "消聲匿跡",
        "w0": {
            "initial": "s",
            "final": "iu",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "n",
            "final": "ik",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "ik",
            "tone": "1"
        }
    },
    {
        "idiom": "小懲大誡",
        "idiom2": "小懲大戒",
        "w0": {
            "initial": "s",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "c",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "aai",
            "tone": "3"
        }
    },
    {
        "idiom": "小家碧玉",
        "idiom2": "小家璧玉",
        "w0": {
            "initial": "s",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "ik",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "uk",
            "tone": "2"
        }
    },
    {
        "idiom": "小兒麻痹",
        "idiom2": "小兒痲痹",
        "w0": {
            "initial": "s",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "4"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "小兒麻痺",
        "idiom2": "小兒痲痹",
        "w0": {
            "initial": "s",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "4"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "小兒麻痺",
        "idiom2": "小兒麻痹",
        "w0": {
            "initial": "s",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "4"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "4"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "少數民族",
        "idiom2": "小數民族",
        "w0": {
            "initial": "s",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "ou",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "z",
            "final": "uk",
            "tone": "6"
        }
    },
    {
        "idiom": "肇慶地區",
        "idiom2": "紹興地區",
        "w0": {
            "initial": "s",
            "final": "iu",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "ing",
            "tone": "3"
        },
        "w2": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        },
        "w3": {
            "initial": "k",
            "final": "eoi",
            "tone": "1"
        }
    },
    {
        "idiom": "鎖鎖碎碎",
        "idiom2": "瑣瑣碎碎",
        "w0": {
            "initial": "s",
            "final": "o",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "o",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "eoi",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "eoi",
            "tone": "3"
        }
    },
    {
        "idiom": "貪得無饜",
        "idiom2": "貪得無厭",
        "w0": {
            "initial": "t",
            "final": "aam",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "ak",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "im",
            "tone": "3"
        }
    },
    {
        "idiom": "歎爲觀止",
        "idiom2": "嘆爲觀止",
        "w0": {
            "initial": "t",
            "final": "aan",
            "tone": "3"
        },
        "w1": {
            "initial": "w",
            "final": "ai",
            "tone": "4"
        },
        "w2": {
            "initial": "g",
            "final": "un",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "體下點先",
        "idiom2": "睇下點先",
        "w0": {
            "initial": "t",
            "final": "ai",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "d",
            "final": "im",
            "tone": "2"
        },
        "w3": {
            "initial": "s",
            "final": "in",
            "tone": "1"
        }
    },
    {
        "idiom": "提拉米蘇",
        "idiom2": "堤拉米蘇",
        "w0": {
            "initial": "t",
            "final": "ai",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "aai",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "ai",
            "tone": "5"
        },
        "w3": {
            "initial": "s",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "偷眲拐騙",
        "idiom2": "偷呃拐騙",
        "w0": {
            "initial": "t",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "gaak",
            "tone": "1"
        },
        "w2": {
            "initial": "gw",
            "final": "aai",
            "tone": "2"
        },
        "w3": {
            "initial": "p",
            "final": "in",
            "tone": "3"
        }
    },
    {
        "idiom": "頭暈腦脹",
        "idiom2": "頭暈腦漲",
        "w0": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "n",
            "final": "ou",
            "tone": "5"
        },
        "w3": {
            "initial": "z",
            "final": "oeng",
            "tone": "3"
        }
    },
    {
        "idiom": "聽過隔離",
        "idiom2": "聽過隔籬",
        "w0": {
            "initial": "t",
            "final": "eng",
            "tone": "1"
        },
        "w1": {
            "initial": "gw",
            "final": "o",
            "tone": "3"
        },
        "w2": {
            "initial": "g",
            "final": "aak",
            "tone": "3"
        },
        "w3": {
            "initial": "l",
            "final": "ei",
            "tone": "4"
        }
    },
    {
        "idiom": "天花龍鳳",
        "idiom2": "天花龍鳯",
        "w0": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ung",
            "tone": "4"
        },
        "w3": {
            "initial": "f",
            "final": "ung",
            "tone": "6"
        }
    },
    {
        "idiom": "天方夜譚",
        "idiom2": "天方夜談",
        "w0": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "ong",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "e",
            "tone": "6"
        },
        "w3": {
            "initial": "t",
            "final": "aam",
            "tone": "4"
        }
    },
    {
        "idiom": "婷婷玉立",
        "idiom2": "亭亭玉立",
        "w0": {
            "initial": "t",
            "final": "ing",
            "tone": "4"
        },
        "w1": {
            "initial": "t",
            "final": "ing",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "aap",
            "tone": "6"
        }
    },
    {
        "idiom": "鐵版神數",
        "idiom2": "鐵板神數",
        "w0": {
            "initial": "t",
            "final": "it",
            "tone": "3"
        },
        "w1": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "鐵版神算",
        "idiom2": "鐵板神算",
        "w0": {
            "initial": "t",
            "final": "it",
            "tone": "3"
        },
        "w1": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "yun",
            "tone": "3"
        }
    },
    {
        "idiom": "鐵證如山",
        "idiom2": "鐵証如山",
        "w0": {
            "initial": "t",
            "final": "it",
            "tone": "3"
        },
        "w1": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "yu",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "aan",
            "tone": "1"
        }
    },
    {
        "idiom": "條脷好嚡",
        "idiom2": "條俐好嚡",
        "w0": {
            "initial": "t",
            "final": "iu",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "6"
        },
        "w2": {
            "initial": "h",
            "final": "ou",
            "tone": "2"
        },
        "w3": {
            "initial": "h",
            "final": "aai",
            "tone": "4"
        }
    },
    {
        "idiom": "陀手掕腳",
        "idiom2": "佗手掕腳",
        "w0": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "ang",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "陀手能腳",
        "idiom2": "佗手褦腳",
        "w0": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "n",
            "final": "ang",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "陀手褦腳",
        "idiom2": "佗手褦腳",
        "w0": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "n",
            "final": "ang",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "陀手褦腳",
        "idiom2": "陀手能腳",
        "w0": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "n",
            "final": "ang",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "檯檯櫈櫈",
        "idiom2": "檯檯凳凳",
        "w0": {
            "initial": "t",
            "final": "oi",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "oi",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "ang",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ang",
            "tone": "3"
        }
    },
    {
        "idiom": "土耳其玉",
        "idiom2": "土耳其浴",
        "w0": {
            "initial": "t",
            "final": "ou",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "i",
            "tone": "5"
        },
        "w2": {
            "initial": "k",
            "final": "ei",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        }
    },
    {
        "idiom": "通風報訊",
        "idiom2": "通風報信",
        "w0": {
            "initial": "t",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "eon",
            "tone": "3"
        }
    },
    {
        "idiom": "通訊協定",
        "idiom2": "通信協定",
        "w0": {
            "initial": "t",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "eon",
            "tone": "3"
        },
        "w2": {
            "initial": "h",
            "final": "ip",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "通訊衛星",
        "idiom2": "通信衛星",
        "w0": {
            "initial": "t",
            "final": "ung",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "eon",
            "tone": "3"
        },
        "w2": {
            "initial": "w",
            "final": "ai",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "ing",
            "tone": "1"
        }
    },
    {
        "idiom": "同等學歷",
        "idiom2": "同等學力",
        "w0": {
            "initial": "t",
            "final": "ung",
            "tone": "4"
        },
        "w1": {
            "initial": "d",
            "final": "ang",
            "tone": "2"
        },
        "w2": {
            "initial": "h",
            "final": "ok",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "ik",
            "tone": "6"
        }
    },
    {
        "idiom": "譁衆取寵",
        "idiom2": "嘩衆取寵",
        "w0": {
            "initial": "w",
            "final": "aa",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "ung",
            "tone": "3"
        },
        "w2": {
            "initial": "c",
            "final": "eoi",
            "tone": "2"
        },
        "w3": {
            "initial": "c",
            "final": "ung",
            "tone": "2"
        }
    },
    {
        "idiom": "畫花口面",
        "idiom2": "劃花口面",
        "w0": {
            "initial": "w",
            "final": "aak",
            "tone": "6"
        },
        "w1": {
            "initial": "f",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "au",
            "tone": "2"
        },
        "w3": {
            "initial": "m",
            "final": "in",
            "tone": "6"
        }
    },
    {
        "idiom": "橫徵暴斂",
        "idiom2": "橫征暴斂",
        "w0": {
            "initial": "w",
            "final": "aang",
            "tone": "4"
        },
        "w1": {
            "initial": "z",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "im",
            "tone": "5"
        }
    },
    {
        "idiom": "威逼利誘",
        "idiom2": "威迫利誘",
        "w0": {
            "initial": "w",
            "final": "ai",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ik",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ei",
            "tone": "6"
        },
        "w3": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        }
    },
    {
        "idiom": "譭譽參半",
        "idiom2": "毀譽參半",
        "w0": {
            "initial": "w",
            "final": "ai",
            "tone": "2"
        },
        "w1": {
            "initial": "j",
            "final": "yu",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "aam",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "un",
            "tone": "3"
        }
    },
    {
        "idiom": "萎靡不振",
        "idiom2": "委靡不振",
        "w0": {
            "initial": "w",
            "final": "ai",
            "tone": "2"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "違強陵弱",
        "idiom2": "違強凌弱",
        "w0": {
            "initial": "w",
            "final": "ai",
            "tone": "4"
        },
        "w1": {
            "initial": "k",
            "final": "oeng",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "oek",
            "tone": "6"
        }
    },
    {
        "idiom": "惟我獨尊",
        "idiom2": "唯我獨尊",
        "w0": {
            "initial": "w",
            "final": "ai",
            "tone": "4"
        },
        "w1": {
            "initial": "n",
            "final": "go",
            "tone": "5"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "yun",
            "tone": "1"
        }
    },
    {
        "idiom": "渾渾沌沌",
        "idiom2": "昏昏沌沌",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        }
    },
    {
        "idiom": "溫溫燉燉",
        "idiom2": "昏昏沌沌",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        }
    },
    {
        "idiom": "溫溫燉燉",
        "idiom2": "渾渾沌沌",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        }
    },
    {
        "idiom": "瘟瘟沌沌",
        "idiom2": "昏昏沌沌",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        }
    },
    {
        "idiom": "瘟瘟沌沌",
        "idiom2": "渾渾沌沌",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        }
    },
    {
        "idiom": "瘟瘟沌沌",
        "idiom2": "溫溫燉燉",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "an",
            "tone": "6"
        }
    },
    {
        "idiom": "穩紮穩打",
        "idiom2": "穩扎穩打",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "2"
        },
        "w1": {
            "initial": "z",
            "final": "aat",
            "tone": "3"
        },
        "w2": {
            "initial": "w",
            "final": "an",
            "tone": "2"
        },
        "w3": {
            "initial": "d",
            "final": "aa",
            "tone": "2"
        }
    },
    {
        "idiom": "渾頭渾腦",
        "idiom2": "暈頭暈腦",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "w",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "n",
            "final": "ou",
            "tone": "5"
        }
    },
    {
        "idiom": "蕓蕓衆生",
        "idiom2": "芸芸衆生",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "ung",
            "tone": "3"
        },
        "w3": {
            "initial": "s",
            "final": "ang",
            "tone": "1"
        }
    },
    {
        "idiom": "渾水摸魚",
        "idiom2": "混水摸魚",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "m",
            "final": "o",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "yu",
            "tone": "4"
        }
    },
    {
        "idiom": "渾渾噩噩",
        "idiom2": "混混噩噩",
        "w0": {
            "initial": "w",
            "final": "an",
            "tone": "6"
        },
        "w1": {
            "initial": "w",
            "final": "an",
            "tone": "6"
        },
        "w2": {
            "initial": "n",
            "final": "gok",
            "tone": "6"
        },
        "w3": {
            "initial": "n",
            "final": "gok",
            "tone": "6"
        }
    },
    {
        "idiom": "喂哇鬼叫",
        "idiom2": "依哇鬼叫",
        "w0": {
            "initial": "w",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "g",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "喴嘩鬼叫",
        "idiom2": "依哇鬼叫",
        "w0": {
            "initial": "w",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "g",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "喴嘩鬼叫",
        "idiom2": "喂哇鬼叫",
        "w0": {
            "initial": "w",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "w",
            "final": "aa",
            "tone": "1"
        },
        "w2": {
            "initial": "gw",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "g",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "黃樑一夢",
        "idiom2": "黃梁一夢",
        "w0": {
            "initial": "w",
            "final": "ong",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "oeng",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "ung",
            "tone": "6"
        }
    },
    {
        "idiom": "黃綠醫生",
        "idiom2": "黃六醫生",
        "w0": {
            "initial": "w",
            "final": "ong",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "uk",
            "tone": "6"
        },
        "w2": {
            "initial": "j",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ang",
            "tone": "1"
        }
    },
    {
        "idiom": "黃黃瘀瘀",
        "idiom2": "黃黃淤淤",
        "w0": {
            "initial": "w",
            "final": "ong",
            "tone": "4"
        },
        "w1": {
            "initial": "w",
            "final": "ong",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "yu",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "yu",
            "tone": "2"
        }
    },
    {
        "idiom": "烏七八糟",
        "idiom2": "污七八糟",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "c",
            "final": "at",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aat",
            "tone": "3"
        },
        "w3": {
            "initial": "z",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "污點證人",
        "idiom2": "污點証人",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "im",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "ing",
            "tone": "3"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "烏吓烏吓",
        "idiom2": "烏下烏下",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w3": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "烏菸瘴氣",
        "idiom2": "污菸障氣",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "oeng",
            "tone": "3"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "污唎單叨",
        "idiom2": "污哩單刀",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏厘單刀",
        "idiom2": "污哩單刀",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏厘單刀",
        "idiom2": "污唎單叨",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏哩單刀",
        "idiom2": "污哩單刀",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏哩單刀",
        "idiom2": "污唎單叨",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏哩單刀",
        "idiom2": "烏厘單刀",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏喱單刀",
        "idiom2": "污哩單刀",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏喱單刀",
        "idiom2": "污唎單叨",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏喱單刀",
        "idiom2": "烏厘單刀",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "烏喱單刀",
        "idiom2": "烏哩單刀",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aan",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "污唎馬喳",
        "idiom2": "污哩馬查",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "烏喱馬扠",
        "idiom2": "污哩馬查",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "烏喱馬扠",
        "idiom2": "污唎馬喳",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "烏喱馬紁",
        "idiom2": "污哩馬查",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "烏喱馬紁",
        "idiom2": "污唎馬喳",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "烏喱馬紁",
        "idiom2": "烏喱馬扠",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "aa",
            "tone": "5"
        }
    },
    {
        "idiom": "烏眉瞌睡",
        "idiom2": "烏眉恰睡",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "h",
            "final": "ap",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "eoi",
            "tone": "6"
        }
    },
    {
        "idiom": "烏茲別克",
        "idiom2": "烏滋別克",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "it",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "ak",
            "tone": "1"
        }
    },
    {
        "idiom": "胡哩馬杈",
        "idiom2": "胡哩馬叉",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "e",
            "tone": "5"
        },
        "w2": {
            "initial": "m",
            "final": "aa",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "aa",
            "tone": "1"
        }
    },
    {
        "idiom": "糊裏糊塗",
        "idiom2": "糊哩糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "糊里糊塗",
        "idiom2": "糊哩糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "糊里糊塗",
        "idiom2": "糊裏糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "胡裏胡塗",
        "idiom2": "糊哩糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "胡裏胡塗",
        "idiom2": "糊裏糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "胡裏胡塗",
        "idiom2": "糊里糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "胡里胡塗",
        "idiom2": "糊哩糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "胡里胡塗",
        "idiom2": "糊裏糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "胡里胡塗",
        "idiom2": "糊里糊塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "胡里胡塗",
        "idiom2": "胡裏胡塗",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w1": {
            "initial": "l",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "w",
            "final": "u",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "ou",
            "tone": "4"
        }
    },
    {
        "idiom": "回光返照",
        "idiom2": "回光反照",
        "w0": {
            "initial": "w",
            "final": "ui",
            "tone": "4"
        },
        "w1": {
            "initial": "gw",
            "final": "ong",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "aan",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "迴光返照",
        "idiom2": "回光反照",
        "w0": {
            "initial": "w",
            "final": "ui",
            "tone": "4"
        },
        "w1": {
            "initial": "gw",
            "final": "ong",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "aan",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "迴光返照",
        "idiom2": "回光返照",
        "w0": {
            "initial": "w",
            "final": "ui",
            "tone": "4"
        },
        "w1": {
            "initial": "gw",
            "final": "ong",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "aan",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "迴心轉意",
        "idiom2": "回心轉意",
        "w0": {
            "initial": "w",
            "final": "ui",
            "tone": "4"
        },
        "w1": {
            "initial": "s",
            "final": "am",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "yun",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "3"
        }
    },
    {
        "idiom": "詐顛扮傻",
        "idiom2": "詐癲扮傻",
        "w0": {
            "initial": "z",
            "final": "aa",
            "tone": "3"
        },
        "w1": {
            "initial": "d",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "o",
            "tone": "4"
        }
    },
    {
        "idiom": "斬下眼就",
        "idiom2": "䁪下眼就",
        "w0": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        },
        "w3": {
            "initial": "z",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "眨下眼就",
        "idiom2": "䁪下眼就",
        "w0": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        },
        "w3": {
            "initial": "z",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "眨下眼就",
        "idiom2": "斬下眼就",
        "w0": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        },
        "w3": {
            "initial": "z",
            "final": "au",
            "tone": "6"
        }
    },
    {
        "idiom": "眨眉眨眼",
        "idiom2": "䁪眉䁪眼",
        "w0": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        }
    },
    {
        "idiom": "蹔眉蹔眼",
        "idiom2": "䁪眉䁪眼",
        "w0": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        }
    },
    {
        "idiom": "蹔眉蹔眼",
        "idiom2": "眨眉眨眼",
        "w0": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w1": {
            "initial": "m",
            "final": "ei",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "aam",
            "tone": "2"
        },
        "w3": {
            "initial": "n",
            "final": "gaan",
            "tone": "5"
        }
    },
    {
        "idiom": "鏨亂歌柄",
        "idiom2": "暫亂歌柄",
        "w0": {
            "initial": "z",
            "final": "aam",
            "tone": "6"
        },
        "w1": {
            "initial": "l",
            "final": "yun",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "o",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "eng",
            "tone": "3"
        }
    },
    {
        "idiom": "爭返啖氣",
        "idiom2": "爭番啖氣",
        "w0": {
            "initial": "z",
            "final": "aang",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "aam",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "執返條命",
        "idiom2": "執翻條命",
        "w0": {
            "initial": "z",
            "final": "ap",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "aan",
            "tone": "1"
        },
        "w2": {
            "initial": "t",
            "final": "iu",
            "tone": "4"
        },
        "w3": {
            "initial": "m",
            "final": "eng",
            "tone": "6"
        }
    },
    {
        "idiom": "輯頭輯尾",
        "idiom2": "執頭執尾",
        "w0": {
            "initial": "z",
            "final": "ap",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "ap",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "ei",
            "tone": "5"
        }
    },
    {
        "idiom": "疾惡如仇",
        "idiom2": "嫉惡如仇",
        "w0": {
            "initial": "z",
            "final": "at",
            "tone": "6"
        },
        "w1": {
            "initial": "o",
            "final": "k",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "yu",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "au",
            "tone": "4"
        }
    },
    {
        "idiom": "週遊世界",
        "idiom2": "周遊世界",
        "w0": {
            "initial": "z",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "ai",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "aai",
            "tone": "3"
        }
    },
    {
        "idiom": "週年旺相",
        "idiom2": "周年旺相",
        "w0": {
            "initial": "z",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "n",
            "final": "in",
            "tone": "4"
        },
        "w2": {
            "initial": "w",
            "final": "ong",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "oeng",
            "tone": "3"
        }
    },
    {
        "idiom": "週身酸痛",
        "idiom2": "週身痠痛",
        "w0": {
            "initial": "z",
            "final": "au",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "yun",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "ung",
            "tone": "3"
        }
    },
    {
        "idiom": "走夾唔抖",
        "idiom2": "走夾唔唞",
        "w0": {
            "initial": "z",
            "final": "au",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "aap",
            "tone": "3"
        },
        "w2": {
            "initial": "m",
            "final": "",
            "tone": "4"
        },
        "w3": {
            "initial": "t",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "精乖靈利",
        "idiom2": "精乖伶俐",
        "w0": {
            "initial": "z",
            "final": "eng",
            "tone": "1"
        },
        "w1": {
            "initial": "gw",
            "final": "aai",
            "tone": "1"
        },
        "w2": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "l",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "盡地一煲",
        "idiom2": "儘地一煲",
        "w0": {
            "initial": "z",
            "final": "eon",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "b",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "盡地一鋪",
        "idiom2": "盡地一舖",
        "w0": {
            "initial": "z",
            "final": "eon",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "ei",
            "tone": "2"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "p",
            "final": "ou",
            "tone": "1"
        }
    },
    {
        "idiom": "滋油淡定",
        "idiom2": "滋悠淡定",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aam",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "滋游倓定",
        "idiom2": "滋悠淡定",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aam",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "滋游倓定",
        "idiom2": "滋油淡定",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "aam",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "ing",
            "tone": "6"
        }
    },
    {
        "idiom": "芝麻綠豆",
        "idiom2": "脂麻綠豆",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "m",
            "final": "aa",
            "tone": "4"
        },
        "w2": {
            "initial": "l",
            "final": "uk",
            "tone": "6"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "知識分子",
        "idiom2": "知識份子",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "s",
            "final": "ik",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "an",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "孳孳不倦",
        "idiom2": "孜孜不倦",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "yun",
            "tone": "6"
        }
    },
    {
        "idiom": "指吓個鼻",
        "idiom2": "指下個鼻",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w1": {
            "initial": "h",
            "final": "aa",
            "tone": "5"
        },
        "w2": {
            "initial": "g",
            "final": "o",
            "tone": "3"
        },
        "w3": {
            "initial": "b",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "指手厾腳",
        "idiom2": "指手㧻腳",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "指天督地",
        "idiom2": "指天㧻地",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "指天篤地",
        "idiom2": "指天㧻地",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "指天篤地",
        "idiom2": "指天督地",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w1": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "d",
            "final": "uk",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ei",
            "tone": "6"
        }
    },
    {
        "idiom": "紙紮下巴",
        "idiom2": "紙扎下巴",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w1": {
            "initial": "z",
            "final": "aat",
            "tone": "3"
        },
        "w2": {
            "initial": "h",
            "final": "aa",
            "tone": "6"
        },
        "w3": {
            "initial": "p",
            "final": "aa",
            "tone": "4"
        }
    },
    {
        "idiom": "自繇自在",
        "idiom2": "自由自在",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "j",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "6"
        },
        "w3": {
            "initial": "z",
            "final": "oi",
            "tone": "6"
        }
    },
    {
        "idiom": "即映即有",
        "idiom2": "即影即有",
        "w0": {
            "initial": "z",
            "final": "ik",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "ing",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "ik",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        }
    },
    {
        "idiom": "席捲一空",
        "idiom2": "席卷一空",
        "w0": {
            "initial": "z",
            "final": "ik",
            "tone": "6"
        },
        "w1": {
            "initial": "g",
            "final": "yun",
            "tone": "2"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "h",
            "final": "ung",
            "tone": "1"
        }
    },
    {
        "idiom": "沾寒沾凍",
        "idiom2": "尖寒尖凍",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "on",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ung",
            "tone": "3"
        }
    },
    {
        "idiom": "顫寒顫凍",
        "idiom2": "尖寒尖凍",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "on",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ung",
            "tone": "3"
        }
    },
    {
        "idiom": "顫寒顫凍",
        "idiom2": "沾寒沾凍",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "on",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ung",
            "tone": "3"
        }
    },
    {
        "idiom": "櫼頭對腳",
        "idiom2": "尖頭對腳",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "eoi",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "尖頭到腳",
        "idiom2": "尖頭倒腳",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "櫼頭倒腳",
        "idiom2": "尖頭倒腳",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "櫼頭倒腳",
        "idiom2": "尖頭到腳",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "櫼頭到腳",
        "idiom2": "尖頭倒腳",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "櫼頭到腳",
        "idiom2": "尖頭到腳",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "櫼頭到腳",
        "idiom2": "櫼頭倒腳",
        "w0": {
            "initial": "z",
            "final": "im",
            "tone": "1"
        },
        "w1": {
            "initial": "t",
            "final": "au",
            "tone": "4"
        },
        "w2": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "菁英主義",
        "idiom2": "精英主義",
        "w0": {
            "initial": "z",
            "final": "ing",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "yu",
            "tone": "2"
        },
        "w3": {
            "initial": "j",
            "final": "i",
            "tone": "6"
        }
    },
    {
        "idiom": "蒸蒸日上",
        "idiom2": "精蒸日上",
        "w0": {
            "initial": "z",
            "final": "ing",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "ing",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "6"
        },
        "w3": {
            "initial": "s",
            "final": "oeng",
            "tone": "5"
        }
    },
    {
        "idiom": "整蠱弄怪",
        "idiom2": "整古弄怪",
        "w0": {
            "initial": "z",
            "final": "ing",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w2": {
            "initial": "l",
            "final": "ung",
            "tone": "6"
        },
        "w3": {
            "initial": "gw",
            "final": "aai",
            "tone": "3"
        }
    },
    {
        "idiom": "整蠱作怪",
        "idiom2": "整古作怪",
        "w0": {
            "initial": "z",
            "final": "ing",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "ok",
            "tone": "3"
        },
        "w3": {
            "initial": "gw",
            "final": "aai",
            "tone": "3"
        }
    },
    {
        "idiom": "整蠱做怪",
        "idiom2": "整古做怪",
        "w0": {
            "initial": "z",
            "final": "ing",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        },
        "w3": {
            "initial": "gw",
            "final": "aai",
            "tone": "3"
        }
    },
    {
        "idiom": "整蠱造怪",
        "idiom2": "整古做怪",
        "w0": {
            "initial": "z",
            "final": "ing",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        },
        "w3": {
            "initial": "gw",
            "final": "aai",
            "tone": "3"
        }
    },
    {
        "idiom": "整蠱造怪",
        "idiom2": "整蠱做怪",
        "w0": {
            "initial": "z",
            "final": "ing",
            "tone": "2"
        },
        "w1": {
            "initial": "g",
            "final": "u",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        },
        "w3": {
            "initial": "gw",
            "final": "aai",
            "tone": "3"
        }
    },
    {
        "idiom": "擳胳肋底",
        "idiom2": "擮胳肋底",
        "w0": {
            "initial": "z",
            "final": "it",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "aak",
            "tone": "3"
        },
        "w2": {
            "initial": "l",
            "final": "aak",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ai",
            "tone": "2"
        }
    },
    {
        "idiom": "照版煮碗",
        "idiom2": "照板煮碗",
        "w0": {
            "initial": "z",
            "final": "iu",
            "tone": "3"
        },
        "w1": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "yu",
            "tone": "2"
        },
        "w3": {
            "initial": "w",
            "final": "un",
            "tone": "2"
        }
    },
    {
        "idiom": "照辦煮碗",
        "idiom2": "照板煮碗",
        "w0": {
            "initial": "z",
            "final": "iu",
            "tone": "3"
        },
        "w1": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "yu",
            "tone": "2"
        },
        "w3": {
            "initial": "w",
            "final": "un",
            "tone": "2"
        }
    },
    {
        "idiom": "照辦煮碗",
        "idiom2": "照版煮碗",
        "w0": {
            "initial": "z",
            "final": "iu",
            "tone": "3"
        },
        "w1": {
            "initial": "b",
            "final": "aan",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "yu",
            "tone": "2"
        },
        "w3": {
            "initial": "w",
            "final": "un",
            "tone": "2"
        }
    },
    {
        "idiom": "張燈結綵",
        "idiom2": "張燈結彩",
        "w0": {
            "initial": "z",
            "final": "oeng",
            "tone": "1"
        },
        "w1": {
            "initial": "d",
            "final": "ang",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "it",
            "tone": "3"
        },
        "w3": {
            "initial": "c",
            "final": "oi",
            "tone": "2"
        }
    },
    {
        "idiom": "再接再礪",
        "idiom2": "再接再厲",
        "w0": {
            "initial": "z",
            "final": "oi",
            "tone": "3"
        },
        "w1": {
            "initial": "z",
            "final": "ip",
            "tone": "3"
        },
        "w2": {
            "initial": "z",
            "final": "oi",
            "tone": "3"
        },
        "w3": {
            "initial": "l",
            "final": "ai",
            "tone": "6"
        }
    },
    {
        "idiom": "在水一方",
        "idiom2": "在水一坊",
        "w0": {
            "initial": "z",
            "final": "oi",
            "tone": "6"
        },
        "w1": {
            "initial": "s",
            "final": "eoi",
            "tone": "2"
        },
        "w2": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "f",
            "final": "ong",
            "tone": "1"
        }
    },
    {
        "idiom": "作姦犯科",
        "idiom2": "作奸犯科",
        "w0": {
            "initial": "z",
            "final": "ok",
            "tone": "3"
        },
        "w1": {
            "initial": "g",
            "final": "aan",
            "tone": "1"
        },
        "w2": {
            "initial": "f",
            "final": "aan",
            "tone": "6"
        },
        "w3": {
            "initial": "f",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "做到索氣",
        "idiom2": "做到嗍氣",
        "w0": {
            "initial": "z",
            "final": "ou",
            "tone": "6"
        },
        "w1": {
            "initial": "d",
            "final": "ou",
            "tone": "3"
        },
        "w2": {
            "initial": "s",
            "final": "ok",
            "tone": "3"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "竹織批蕩",
        "idiom2": "竹織批盪",
        "w0": {
            "initial": "z",
            "final": "uk",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "ik",
            "tone": "1"
        },
        "w2": {
            "initial": "p",
            "final": "ai",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "ong",
            "tone": "6"
        }
    },
    {
        "idiom": "衆所週知",
        "idiom2": "衆所周知",
        "w0": {
            "initial": "z",
            "final": "ung",
            "tone": "3"
        },
        "w1": {
            "initial": "s",
            "final": "o",
            "tone": "2"
        },
        "w2": {
            "initial": "z",
            "final": "au",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "i",
            "tone": "1"
        }
    },
    {
        "idiom": "作育英才",
        "idiom2": "作育英纔",
        "w0": {
            "initial": "z",
            "final": "ok",
            "tone": "3"
        },
        "w1": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        },
        "w2": {
            "initial": "j",
            "final": "ing",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        }
    },
    {
        "idiom": "自討苦吃",
        "idiom2": "自討苦喫",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "6"
        },
        "w1": {
            "initial": "t",
            "final": "ou",
            "tone": "2"
        },
        "w2": {
            "initial": "f",
            "final": "u",
            "tone": "2"
        },
        "w3": {
            "initial": "h",
            "final": "ek",
            "tone": "3"
        }
    },
    {
        "idiom": "志大才疏",
        "idiom2": "志大纔疏",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "3"
        },
        "w1": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w2": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        },
        "w3": {
            "initial": "s",
            "final": "o",
            "tone": "1"
        }
    },
    {
        "idiom": "指手畫腳",
        "idiom2": "指手劃腳",
        "w0": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w1": {
            "initial": "s",
            "final": "au",
            "tone": "2"
        },
        "w2": {
            "initial": "w",
            "final": "aak",
            "tone": "6"
        },
        "w3": {
            "initial": "g",
            "final": "oek",
            "tone": "3"
        }
    },
    {
        "idiom": "追根究柢",
        "idiom2": "追根究底",
        "w0": {
            "initial": "z",
            "final": "eoi",
            "tone": "1"
        },
        "w1": {
            "initial": "g",
            "final": "an",
            "tone": "1"
        },
        "w2": {
            "initial": "g",
            "final": "au",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "ai",
            "tone": "2"
        }
    },
    {
        "idiom": "爭風吃醋",
        "idiom2": "爭風喫醋",
        "w0": {
            "initial": "z",
            "final": "ang",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "ek",
            "tone": "3"
        },
        "w3": {
            "initial": "c",
            "final": "ou",
            "tone": "3"
        }
    },
    {
        "idiom": "振振有辭",
        "idiom2": "振振有詞",
        "w0": {
            "initial": "z",
            "final": "an",
            "tone": "3"
        },
        "w1": {
            "initial": "z",
            "final": "an",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w3": {
            "initial": "c",
            "final": "i",
            "tone": "4"
        }
    },
    {
        "idiom": "烏煙瘴氣",
        "idiom2": "污菸障氣",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "oeng",
            "tone": "3"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "烏煙瘴氣",
        "idiom2": "烏菸瘴氣",
        "w0": {
            "initial": "w",
            "final": "u",
            "tone": "1"
        },
        "w1": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "z",
            "final": "oeng",
            "tone": "3"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        }
    },
    {
        "idiom": "維妙維肖",
        "idiom2": "惟妙惟肖",
        "w0": {
            "initial": "w",
            "final": "ai",
            "tone": "4"
        },
        "w1": {
            "initial": "m",
            "final": "iu",
            "tone": "6"
        },
        "w2": {
            "initial": "w",
            "final": "ai",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "iu",
            "tone": "3"
        }
    },
    {
        "idiom": "懷才不遇",
        "idiom2": "懷纔不遇",
        "w0": {
            "initial": "w",
            "final": "aai",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "yu",
            "tone": "6"
        }
    },
    {
        "idiom": "尚方寶劍",
        "idiom2": "上方寶劍",
        "w0": {
            "initial": "s",
            "final": "oeng",
            "tone": "6"
        },
        "w1": {
            "initial": "f",
            "final": "ong",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "ou",
            "tone": "2"
        },
        "w3": {
            "initial": "g",
            "final": "im",
            "tone": "3"
        }
    },
    {
        "idiom": "盛氣凌人",
        "idiom2": "盛氣淩人",
        "w0": {
            "initial": "s",
            "final": "ing",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "ei",
            "tone": "3"
        },
        "w2": {
            "initial": "l",
            "final": "ing",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        }
    },
    {
        "idiom": "食慾不振",
        "idiom2": "食欲不振",
        "w0": {
            "initial": "s",
            "final": "ik",
            "tone": "6"
        },
        "w1": {
            "initial": "j",
            "final": "uk",
            "tone": "6"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "z",
            "final": "an",
            "tone": "3"
        }
    },
    {
        "idiom": "五勞七傷",
        "idiom2": "五癆七傷",
        "w0": {
            "initial": "",
            "final": "ng",
            "tone": "5"
        },
        "w1": {
            "initial": "l",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "c",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "oeng",
            "tone": "1"
        }
    },
    {
        "idiom": "杳無人煙",
        "idiom2": "杳無人菸",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        }
    },
    {
        "idiom": "杳無人煙",
        "idiom2": "渺無人菸",
        "w0": {
            "initial": "m",
            "final": "iu",
            "tone": "5"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w3": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        }
    },
    {
        "idiom": "狼煙四起",
        "idiom2": "狼菸四起",
        "w0": {
            "initial": "l",
            "final": "ong",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "ei",
            "tone": "3"
        },
        "w3": {
            "initial": "h",
            "final": "ei",
            "tone": "2"
        }
    },
    {
        "idiom": "郎才女貌",
        "idiom2": "郎纔女貌",
        "w0": {
            "initial": "l",
            "final": "ong",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        },
        "w2": {
            "initial": "j",
            "final": "yu",
            "tone": "5"
        },
        "w3": {
            "initial": "m",
            "final": "aau",
            "tone": "6"
        }
    },
    {
        "idiom": "紈褲子弟",
        "idiom2": "紈絝子弟",
        "w0": {
            "initial": "j",
            "final": "yun",
            "tone": "4"
        },
        "w1": {
            "initial": "f",
            "final": "u",
            "tone": "3"
        },
        "w2": {
            "initial": "z",
            "final": "i",
            "tone": "2"
        },
        "w3": {
            "initial": "d",
            "final": "ai",
            "tone": "6"
        }
    },
    {
        "idiom": "有鑑於此",
        "idiom2": "有鑒於此",
        "w0": {
            "initial": "j",
            "final": "au",
            "tone": "5"
        },
        "w1": {
            "initial": "g",
            "final": "aam",
            "tone": "3"
        },
        "w2": {
            "initial": "j",
            "final": "yu",
            "tone": "1"
        },
        "w3": {
            "initial": "c",
            "final": "i",
            "tone": "2"
        }
    },
    {
        "idiom": "一箭雙雕",
        "idiom2": "一箭雙鵰",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "z",
            "final": "in",
            "tone": "3"
        },
        "w2": {
            "initial": "s",
            "final": "oeng",
            "tone": "1"
        },
        "w3": {
            "initial": "d",
            "final": "iu",
            "tone": "1"
        }
    },
    {
        "idiom": "一飛沖天",
        "idiom2": "一飛衝天",
        "w0": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "c",
            "final": "ung",
            "tone": "1"
        },
        "w3": {
            "initial": "t",
            "final": "in",
            "tone": "1"
        }
    },
    {
        "idiom": "人煙稀少",
        "idiom2": "人菸稀少",
        "w0": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        },
        "w2": {
            "initial": "h",
            "final": "ei",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "iu",
            "tone": "2"
        }
    },
    {
        "idiom": "人才濟濟",
        "idiom2": "人纔濟濟",
        "w0": {
            "initial": "j",
            "final": "an",
            "tone": "4"
        },
        "w1": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        },
        "w2": {
            "initial": "z",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "z",
            "final": "ai",
            "tone": "2"
        }
    },
    {
        "idiom": "吃喝玩樂",
        "idiom2": "喫喝玩樂",
        "w0": {
            "initial": "h",
            "final": "ek",
            "tone": "3"
        },
        "w1": {
            "initial": "h",
            "final": "ot",
            "tone": "3"
        },
        "w2": {
            "initial": "w",
            "final": "un",
            "tone": "6"
        },
        "w3": {
            "initial": "l",
            "final": "ok",
            "tone": "6"
        }
    },
    {
        "idiom": "見風使舵",
        "idiom2": "見風駛舵",
        "w0": {
            "initial": "g",
            "final": "in",
            "tone": "3"
        },
        "w1": {
            "initial": "f",
            "final": "ung",
            "tone": "1"
        },
        "w2": {
            "initial": "s",
            "final": "ai",
            "tone": "2"
        },
        "w3": {
            "initial": "t",
            "final": "o",
            "tone": "4"
        }
    },
    {
        "idiom": "灰飛煙滅",
        "idiom2": "灰飛菸滅",
        "w0": {
            "initial": "f",
            "final": "ui",
            "tone": "1"
        },
        "w1": {
            "initial": "f",
            "final": "ei",
            "tone": "1"
        },
        "w2": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        },
        "w3": {
            "initial": "m",
            "final": "it",
            "tone": "6"
        }
    },
    {
        "idiom": "大模廝樣",
        "idiom2": "大模屍樣",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        }
    },
    {
        "idiom": "大模廝樣",
        "idiom2": "大模斯樣",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        }
    },
    {
        "idiom": "大模廝樣",
        "idiom2": "大無私樣",
        "w0": {
            "initial": "d",
            "final": "aai",
            "tone": "6"
        },
        "w1": {
            "initial": "m",
            "final": "ou",
            "tone": "4"
        },
        "w2": {
            "initial": "s",
            "final": "i",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "oeng",
            "tone": "6"
        }
    },
    {
        "idiom": "才高八斗",
        "idiom2": "纔高八斗",
        "w0": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        },
        "w1": {
            "initial": "g",
            "final": "ou",
            "tone": "1"
        },
        "w2": {
            "initial": "b",
            "final": "aat",
            "tone": "3"
        },
        "w3": {
            "initial": "d",
            "final": "au",
            "tone": "2"
        }
    },
    {
        "idiom": "七孔生煙",
        "idiom2": "七孔生菸",
        "w0": {
            "initial": "c",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "ung",
            "tone": "2"
        },
        "w2": {
            "initial": "s",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        }
    },
    {
        "idiom": "七竅生煙",
        "idiom2": "七竅生菸",
        "w0": {
            "initial": "c",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "h",
            "final": "iu",
            "tone": "3"
        },
        "w2": {
            "initial": "s",
            "final": "ang",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "in",
            "tone": "1"
        }
    },
    {
        "idiom": "七步奇才",
        "idiom2": "七步奇纔",
        "w0": {
            "initial": "c",
            "final": "at",
            "tone": "1"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "k",
            "final": "ei",
            "tone": "4"
        },
        "w3": {
            "initial": "c",
            "final": "oi",
            "tone": "4"
        }
    },
    {
        "idiom": "步步高陞",
        "idiom2": "步步高昇",
        "w0": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w1": {
            "initial": "b",
            "final": "ou",
            "tone": "6"
        },
        "w2": {
            "initial": "g",
            "final": "ou",
            "tone": "1"
        },
        "w3": {
            "initial": "s",
            "final": "ing",
            "tone": "1"
        }
    },
    {
        "idiom": "表裡不一",
        "idiom2": "表裏不一",
        "w0": {
            "initial": "b",
            "final": "iu",
            "tone": "2"
        },
        "w1": {
            "initial": "l",
            "final": "eoi",
            "tone": "5"
        },
        "w2": {
            "initial": "b",
            "final": "at",
            "tone": "1"
        },
        "w3": {
            "initial": "j",
            "final": "at",
            "tone": "1"
        }
    },
    {
        "idiom": "白吃白喝",
        "idiom2": "白喫白喝",
        "w0": {
            "initial": "b",
            "final": "aak",
            "tone": "6"
        },
        "w1": {
            "initial": "h",
            "final": "ek",
            "tone": "3"
        },
        "w2": {
            "initial": "b",
            "final": "aak",
            "tone": "6"
        },
        "w3": {
            "initial": "h",
            "final": "ot",
            "tone": "3"
        }
    }
]

export default duplicates