// タスクのバリデーション関数
import type { Task } from '../types/task';

export function validateTask(task: Task): string[] {
  const errors: string[] = [];
  if (!task.title || task.title.trim().length === 0) {
    errors.push('タスク名は必須です');
  }
  if (task.title && task.title.length > 100) {
    errors.push('タスク名は100文字以内で入力してください');
  }
  // 他のバリデーションルールを追加可能
  return errors;
}
