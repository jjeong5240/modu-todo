export interface ITodo {
  id: string; // Todo 항목의 고유 ID
  title: string; // Todo 항목의 제목
  completed: boolean; // 완료 여부
  createdAt: string; // 생성 일자
  updatedAt?: string | null; // 수정 일자 (선택 사항)
}
