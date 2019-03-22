# 第2回

Webアプリを作るために、今回はユーザーから何かを入力してもらうための部品を学びましょう。

## input type="text"

`input` 要素を配置すると、いろんな入力欄を作ることができます。 `type` 属性で種類を指定します。

まずは1行の入力欄を表示する部品です。 `type="text"` とします。 たとえばログイン画面の「メールアドレス」入力欄を作ったりするときに使います。

```
<input type="text" id="email">
```

## input type="password"

`type="password"` とすると、入力したものが●などでマスクされます。 ログイン画面のパスワード入力欄を作ったりするときに使います。

```
<input type="password" id="pass">
```

## input type="checkbox"

チェックボックスが表示されます。チェックボックスしか表示されないので、 `label` を使って説明をつけるようにしましょう。

```
<input type="checkbox" id="remember"><label for="remember">ログイン状態を保持する</label>
```

## input type="file"

ユーザーにファイルを選択してもらうためのボタンを作ります。

```
<input type="file" id="myImage">
```

## select

複数の選択肢から1つ選んでもらうときに使います。選択肢は `option` を使います。

```
<select id="gender">
  <option value="m">男性</option>
  <option value="f">女性</option>
</select>
```

## JavaScriptとの連携

HTMLで配置した部品は、 `id` をつけておくと、JavaScriptで「オブジェクト」として扱うことができます。HTML文書をオブジェクトとして扱う仕組みを *DOM(Document Object Model)* と呼びます。

例えば、JavaScriptで `id="email"` がついた要素を取り出すには、次のように `document.getElementById()` を呼びます。

```
let inputElem = document.getElementById('email')
```

取り出した要素（ここでは変数 `inputElem` に入っている）に対し、いろんな質問ができます。例えば入力してもらった値を取り出すには、次のようにします。

```
let inputElem = document.getElementById('email')
let email = inputElem.value
```

`innerHTML` に値をセットすることで、画面上の表示を変化させたりもできます。

```
let pElem = document.getElementById('counter')
pElem.innerHTML = 'カウンター' + counter
```

