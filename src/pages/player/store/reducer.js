import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  playList: [
    {
      "name": "有何不可",
      "id": 167876,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "600902000007916021",
      "fee": 8,
      "v": 49,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 16953,
        "name": "自定义",
        "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
        "tns": [],
        "pic_str": "18590542604286213",
        "pic": 18590542604286212
      },
      "dt": 241840,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9675799,
        "vd": -21099
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5805497,
        "vd": -18400
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3870346,
        "vd": -16900
      },
      "a": null,
      "cd": "1",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "mst": 9,
      "cp": 14026,
      "rtype": 0,
      "rurl": null,
      "publishTime": 1231516800000
    },
    {"name":"圣诞夜惊魂","id":386195,"pst":0,"t":0,"ar":[{"id":13193,"name":"五月天","tns":[],"alias":[]}],"alia":[],"pop":90,"st":0,"rt":"600902000000028832","fee":8,"v":48,"crbt":null,"cf":"","al":{"id":38259,"name":"神的孩子都在跳舞","picUrl":"https://p1.music.126.net/ovsWnGqQYBy0XC8WD1lULw==/109951163188724796.jpg","tns":[],"pic_str":"109951163188724796","pic":109951163188724800},"dt":163000,"h":{"br":320000,"fid":0,"size":6534835,"vd":-33200},"m":{"br":192000,"fid":0,"size":3920918,"vd":-30800},"l":{"br":128000,"fid":0,"size":2613959,"vd":-29300},"a":null,"cd":"1","no":12,"rtUrl":null,"ftype":0,"rtUrls":[],"djId":0,"copyright":2,"s_id":0,"mark":1125899906850816,"originCoverType":0,"originSongSimpleData":null,"tagPicList":null,"resourceState":true,"version":48,"songJumpInfo":null,"entertainmentTags":null,"single":0,"noCopyrightRcmd":null,"cp":684010,"rtype":0,"rurl":null,"mst":9,"mv":10929707,"publishTime":1099238400000}
    ,
    {"name":"爱的奇妙物语","id":1294924867,"pst":0,"t":0,"ar":[{"id":1049463,"name":"张子枫","tns":[],"alias":[]}],"alia":["网络剧《我和两个他》林圆人物曲"],"pop":70,"st":0,"rt":null,"fee":8,"v":12,"crbt":null,"cf":"","al":{"id":71852117,"name":"爱的奇妙物语","picUrl":"https://p2.music.126.net/gQEPZ9Wa2lspfqqWXvH3kg==/109951163426141250.jpg","tns":[],"pic_str":"109951163426141250","pic":109951163426141250},"dt":233333,"h":{"br":320000,"fid":0,"size":9336207,"vd":-18300},"m":{"br":192000,"fid":0,"size":5601742,"vd":-15800},"l":{"br":128000,"fid":0,"size":3734509,"vd":-14200},"a":null,"cd":"1","no":1,"rtUrl":null,"ftype":0,"rtUrls":[],"djId":0,"copyright":0,"s_id":0,"mark":73728,"originCoverType":0,"originSongSimpleData":null,"tagPicList":null,"resourceState":true,"version":12,"songJumpInfo":null,"entertainmentTags":null,"single":0,"noCopyrightRcmd":null,"mv":0,"rtype":0,"rurl":null,"mst":9,"cp":1416303,"publishTime":1532448000007}
    ,
    {"name":"米字路口","id":1882657341,"pst":0,"t":0,"ar":[{"id":1197168,"name":"徐秉龙","tns":[],"alias":[]}],"alia":[],"pop":100,"st":0,"rt":"","fee":8,"v":4,"crbt":null,"cf":"","al":{"id":134021677,"name":"米字路口","picUrl":"https://p1.music.126.net/wnXI3OZGg1VhKNOnX9HAfg==/109951166470116159.jpg","tns":[],"pic_str":"109951166470116159","pic":109951166470116160},"dt":271780,"h":{"br":320000,"fid":0,"size":10874297,"vd":-31982},"m":{"br":192000,"fid":0,"size":6524595,"vd":-29369},"l":{"br":128000,"fid":0,"size":4349745,"vd":-27663},"a":null,"cd":"01","no":0,"rtUrl":null,"ftype":0,"rtUrls":[],"djId":0,"copyright":0,"s_id":0,"mark":0,"originCoverType":0,"originSongSimpleData":null,"tagPicList":null,"resourceState":true,"version":4,"songJumpInfo":null,"entertainmentTags":null,"single":0,"noCopyrightRcmd":null,"rtype":0,"rurl":null,"mst":9,"cp":0,"mv":0,"publishTime":0}
    ,
    {"name":"给你给我","id":569200210,"pst":0,"t":0,"ar":[{"id":12138269,"name":"毛不易","tns":[],"alias":[]}],"alia":[],"pop":100,"st":0,"rt":null,"fee":8,"v":107,"crbt":null,"cf":"","al":{"id":39483040,"name":"平凡的一天","picUrl":"https://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg","tns":[],"pic_str":"109951163350929740","pic":109951163350929740},"dt":241226,"h":{"br":320000,"fid":0,"size":9651766,"vd":-2},"m":{"br":192000,"fid":0,"size":5791077,"vd":0},"l":{"br":128000,"fid":0,"size":3860733,"vd":-2},"a":null,"cd":"1","no":2,"rtUrl":null,"ftype":0,"rtUrls":[],"djId":0,"copyright":2,"s_id":0,"mark":8192,"originCoverType":1,"originSongSimpleData":null,"tagPicList":null,"resourceState":true,"version":107,"songJumpInfo":null,"entertainmentTags":null,"single":0,"noCopyrightRcmd":null,"rtype":0,"rurl":null,"mst":9,"cp":2708402,"mv":10952407,"publishTime":1530547200007}
    ,
    {"name":"鱼儿","id":476631850,"pst":0,"t":0,"ar":[{"id":893253,"name":"鲁向卉","tns":[],"alias":[]}],"alia":[],"pop":95,"st":0,"rt":null,"fee":8,"v":14,"crbt":null,"cf":"","al":{"id":35456378,"name":"鱼儿","picUrl":"https://p2.music.126.net/QBm2v4tOY4X7ttgCurnWlw==/18549860674103071.jpg","tns":[],"pic_str":"18549860674103071","pic":18549860674103070},"dt":269318,"h":{"br":320000,"fid":0,"size":10775031,"vd":-10599},"m":{"br":192000,"fid":0,"size":6465036,"vd":-8000},"l":{"br":128000,"fid":0,"size":4310039,"vd":-6200},"a":null,"cd":"1","no":1,"rtUrl":null,"ftype":0,"rtUrls":[],"djId":0,"copyright":0,"s_id":0,"mark":8256,"originCoverType":1,"originSongSimpleData":null,"tagPicList":null,"resourceState":true,"version":14,"songJumpInfo":null,"entertainmentTags":null,"single":0,"noCopyrightRcmd":null,"mst":9,"cp":468011,"rtype":0,"rurl":null,"mv":0,"publishTime":1494000000007}
    ,
    {
      "name": "雅俗共赏",
      "id": 411214279,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 31,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 34749138,
        "name": "青年晚报",
        "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
        "tns": [],
        "pic": 3431575794705764
      },
      "dt": 249621,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9987177,
        "vd": -22200
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5992323,
        "vd": -19600
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3994896,
        "vd": -17800
      },
      "a": null,
      "cd": "1",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 5302271,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 14026,
      "publishTime": 1461723397683
    }, {
      "name": "拥抱", "id": 546723152, "pst": 0, "t": 0,
      "ar": [{ "id": 1197168, "name": "徐秉龙", "tns": [], "alias": [] }], "alia": [], "pop": 100, "st": 0,
      "rt": null, "fee": 8, "v": 26, "crbt": null, "cf": "", "al": {
        "id": 37987043, "name": "拥抱",
        "picUrl": "https://p2.music.126.net/eiLjPHK1pzuhU2LILmfznA==/109951166095219298.jpg", "tns": [],
        "pic_str": "109951166095219298", "pic": 109951166095219300
      }, "dt": 185789, "h": {
        "br": 320000, "fid": 0, "size": 7434493,
        "vd": -57422
      }, "m": { "br": 192000, "fid": 0, "size": 4460713, "vd": -54796 }, "l": {
        "br": 128000, "fid": 0, "size": 2973823,
        "vd": -53290
      }, "a": null, "cd": "01", "no": 1, "rtUrl": null, "ftype": 0, "rtUrls": [], "djId": 0, "copyright": 1, "s_id": 0,
      "mark": 8256, "originCoverType": 1, "originSongSimpleData": null, "tagPicList": null, "resourceState": true,
      "version": 26, "songJumpInfo": null, "entertainmentTags": null, "single": 0, "noCopyrightRcmd": null, "mv": 0,
      "rtype": 0, "rurl": null, "mst": 9, "cp": -1, "publishTime": 1521648000000
    }
  ],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, // 0 循环 1 随机 2 单曲
  lyricList: [],
  currentLyricIndex: 0
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    default:
      return state;
  }
}

export default reducer;

