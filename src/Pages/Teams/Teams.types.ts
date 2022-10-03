export interface Team {
    allStar: boolean;
    city: string;
    code: string;
    id: number;
    leagues: Record<string, Leagues>;
    logo: string;
    name: string;
    nbaFranchise: boolean;
    nickname: string;
  }
  interface Leagues {
    conference: string, division: string
  }
