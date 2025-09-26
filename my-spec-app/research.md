# Research: ToDoアプリケーション

## 1. 調査課題
- React 18の状態管理のベストプラクティス
- TypeScriptでの型設計
- LocalStorageのデータ永続化パターン
- レスポンシブデザインの実装手法
- テストフレームワークの選定
- モダンなデザインの実装

## 2. 調査内容と結論

### 2.1 React 18の状態管理
- **調査結果**: useStateとuseReducerの使い分けが推奨される
- **決定理由**: シンプルなアプリなのでuseStateを中心に設計
- **他の選択肢**: Redux, Zustand（今回は不要）

### 2.2 TypeScript型設計
- **調査結果**: interfaceとtypeエイリアスを使い分けるのが一般的
- **決定理由**: Task型はinterfaceで定義し、ユーティリティ型はtypeで定義
- **他の選択肢**: クラスベース設計（今回は関数型で統一）

### 2.3 LocalStorageのデータ永続化
- **調査結果**: useEffectとJSON.stringify/parseで実装するのが一般的
- **決定理由**: 外部ライブラリ不要でシンプルに実装可能
- **他の選択肢**: IndexedDB, 外部DB（今回は不要）

### 2.4 レスポンシブデザイン
- **調査結果**: CSS ModulesやTailwind CSSが主流
- **決定理由**: Tailwind CSSを採用予定。小規模ならCSS Modulesでも可
- **他の選択肢**: styled-components, Emotion


### 2.5 テストフレームワーク
- **調査結果**: Jest + React Testing Libraryが主流
- **決定理由**: ドキュメント・事例が豊富で学習コストが低い
- **他の選択肢**: Vitest, Cypress（E2E用）

### 2.6 モダンなデザインの実装
- **調査結果**: モダンなUIデザインには、Tailwind CSSやMaterial UI、Radix UIなどのUIフレームワークがよく使われる。特にTailwind CSSはカスタマイズ性と開発効率が高く、デザインシステムの導入も容易。
- **決定理由**: Tailwind CSSをベースに、必要に応じてMaterial UIやRadix UIのコンポーネントを組み合わせる。ダークモード対応やアクセシビリティ（a11y）も考慮。
- **実装方針**:
	- Tailwind CSSで全体のスタイリングを統一
	- カード型レイアウト、余白・影・角丸などのモダンな要素を活用
	- ダークモード切替をサポート
	- フォントや配色はGoogle FontsやTailwindのカラーパレットを活用
	- アクセシビリティ（キーボード操作・コントラスト・aria属性）を重視
- **他の選択肢**: Chakra UI, Ant Design, Bootstrap（今回はTailwind CSS中心で進める）

## 3. 参考資料
- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)
- [Jest公式ドキュメント](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Tailwind CSS公式](https://tailwindcss.com/)