export class UpdateTodoDto {
  readonly id: number;
  readonly title?: string;
  readonly complete?: boolean;
  readonly contents?: string;
}
