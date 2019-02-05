export interface Person {
  firstName: string;
  lastName: string;
}

export function hi(p: Person): string {
  return `${p.firstName} ${p.lastName}`;
}
