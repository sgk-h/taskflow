# Data Model: ToDoアプリケーション

## 1. Task型（タスク）
```typescript
interface Task {
  id: string; // 一意なID（UUID推奨）
  title: string; // タスク名（必須）
  description?: string; // 詳細説明（任意）
  completed: boolean; // 完了状態
  priority: 'low' | 'medium' | 'high'; // 優先度
  category?: string; // カテゴリ（任意）
  createdAt: string; // 作成日時（ISO8601文字列）
  updatedAt: string; // 更新日時（ISO8601文字列）
}
```

## 2. TaskFilter型（フィルタリング用）
```typescript
type TaskFilter = 'all' | 'completed' | 'incomplete';
```

## 3. AppState型（アプリ全体の状態管理）
```typescript
interface AppState {
  tasks: Task[];
  filter: TaskFilter;
  searchQuery: string;
  selectedCategory?: string;
}
```

## 4. UI構成（主要コンポーネント案）
- Header（アプリタイトル・ダークモード切替）
- TaskForm（タスク追加・編集フォーム）
- TaskList（タスクリスト表示）
- TaskItem（個別タスク表示・操作）
- FilterBar（フィルタ・検索・カテゴリ選択）

---

このデータモデルをもとに、各コンポーネントやロジックを実装していきます。