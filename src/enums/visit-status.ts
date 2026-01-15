export const VisitStatus = {
  INTEREST: 'INTEREST',
  CONFIRMED: 'CONFIRMED',
  REALIZED: 'REALIZED',
  CANCELED: 'CANCELED',
} as const;

export type VisitStatus = (typeof VisitStatus)[keyof typeof VisitStatus];
