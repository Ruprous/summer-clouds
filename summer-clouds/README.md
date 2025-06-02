# 夏空ポートフォリオプロジェクト

このプロジェクトは、夏空と入道雲をテーマにしたポートフォリオサイトです。GSAPを使用して雲のアニメーションを実装し、ページ下部には電柱と電線のデザインを配置しています。

## プロジェクトの構成

- **src/App.jsx**: アプリケーションのエントリポイントで、HeroSectionや他のセクションをレンダリングします。
- **src/HeroSection.jsx**: 青空背景と入道雲を表示するコンポーネントで、GSAPを使用して雲のアニメーションを管理します。
- **src/HeroSection.css**: HeroSectionのスタイルを定義するCSSファイルです。背景色や雲のデザインに関するスタイルが含まれます。
- **src/components/Cloud.jsx**: 雲を表示するためのコンポーネントで、アニメーションやスタイルを適用します。
- **src/components/Cloud.svg**: 雲のSVG画像ファイルです。透過やアニメーションに適した形式です。
- **src/components/UtilityPole.jsx**: 電柱を表示するためのコンポーネントで、ページ下部に配置されます。
- **src/components/UtilityPole.svg**: 電柱のSVG画像ファイルです。
- **src/assets/react.svg**: Reactのロゴ画像ファイルです。
- **src/index.css**: プロジェクト全体のスタイルを定義するCSSファイルです。初期の背景色や余白の調整が必要です。
- **src/main.jsx**: アプリケーションのエントリポイントで、Reactのルートを設定します。
- **src/sections/AboutSection.jsx**: Aboutセクションを表示するためのコンポーネントです。
- **src/sections/ContactSection.jsx**: Contactセクションを表示するためのコンポーネントです。

## 開発環境

- Node.jsとVSCodeを使用して開発しています。
- ReactとViteを使用してプロジェクトを構築しています。
- GSAPを使用してアニメーションを管理しています。
- Google Fonts（Orbitronなど）を使用してHUD感を演出する予定です。

## インストールと実行

1. リポジトリをクローンまたはダウンロードします。
2. プロジェクトディレクトリに移動します。
3. 依存関係をインストールします:
   ```
   npm install
   ```
4. 開発サーバーを起動します:
   ```
   npm run dev
   ```

## 今後の進行

- HeroSectionのデザインを青空と雲に変更します。
- GSAPで雲のアニメーションを追加します。
- ページ下部に電柱と電線を実装します。
- AboutSectionやContactSectionを必要に応じて作成します。
- JSONデータ管理や作品ページはテーマ決定後に再検討します。