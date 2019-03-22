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

