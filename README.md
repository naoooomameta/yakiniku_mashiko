# 焼肉ましこ 公式サイト

栃木県益子町の焼肉店「焼肉ましこ」の公式サイト（静的サイト / Netlify ホスティング）。

公開URL: https://yakiniku-mashiko.netlify.app/

## 構成

- `index.html` … エントリポイント
- `src/*.jsx` … **ソース**（React コンポーネント。ここを編集する）
- `src/*.js` … `src/*.jsx` を事前変換した**配信用ファイル**（ブラウザはこちらを読み込む）
- `src/styles.css` … スタイル
- `src/image-slot.js` … 画像表示用カスタム要素（編集ツール連携機能込み・素のJS）
- `assets/` … 画像
- `assets/vendor/` … 自前ホストした React / ReactDOM（UMD）

## 開発・ビルド

ブラウザ内 Babel 変換を廃止し、表示を高速化しています。
**`src/*.jsx` を編集したら、必ずビルドして `src/*.js` を再生成してください。**

```bash
npm install          # 初回のみ（esbuild など）
npm run build        # src/*.jsx -> src/*.js を再生成
```

`src/*.js` はコミット対象です（Netlify はビルドせず静的配信するため）。
`.jsx` を編集して `npm run build` を忘れると、サイトに反映されません。

### React のバージョンを上げる場合

```bash
npm install react@<version> react-dom@<version>
npm run vendor       # assets/vendor/ にUMDをコピー（ファイル名のバージョンも更新し、index.html の参照も合わせる）
```

## パフォーマンス上の工夫

- ブラウザ内 Babel 変換を廃止（esbuild で事前変換）
- React / ReactDOM を自前ホスト（第三者CDNを critical path から排除）
- スクリプトは `defer` で非ブロッキング読み込み＋実行順を保証
- 画面外の画像はネイティブ遅延読み込み（`loading="lazy"`）。ヒーローのみ即時読み込み＋先読み
- 画像は mozjpeg で再エンコード（圧縮）
