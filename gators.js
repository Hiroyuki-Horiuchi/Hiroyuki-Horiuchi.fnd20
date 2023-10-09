'use strict'


// ワニ合計数を保持するため関数の外で宣言
let sum = 0;

function waniDisplay() {
    // 入力フォームの値を引っ張る, 文字列扱い
    const waniNum = document.getElementById('waniNumber').value;

    // 入力した数の分だけループ
    for (let i = 0; i < waniNum; i++) {
        // ワニ画像を表示する場所を指定
        let p = document.querySelector('p');
        // ワニ画像を代入
        p.append("🐊");
    }

    // ワニ合計数を計算
    sum = sum + Number(waniNum);
    // ワニ合計数を入力する位置を指定
    let waniSum = document.getElementsByTagName('p')[1]
    // ワニ合計数を表示させるため代入
    waniSum.innerText = "ワニ 合計 " + sum + " 匹";
}

// HTMLのボタン"ワニ放出" をjsで扱い易いように変数化
const wani = document.getElementById('waniBtn');

// ボタンクリックで関数が発動するようイベントリスナー設定
wani.addEventListener('click', waniDisplay, false);



function resetDisplay() {
    let p = document.querySelector('p');
    p.innerText="";
    sum = 0;
    let waniSum = document.getElementsByTagName('p')[1];
    waniSum.innerText = "ワニ 合計 " + sum + " 匹";
}


// リセット
const resetAll = document.getElementById('resetBtn');
resetAll.addEventListener('click', resetDisplay, false);
