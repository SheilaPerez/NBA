export interface Players {
    affiliation: string;
    birth: Birth;
    college: string;
    firstname: string;
    height: Height;
    id: number;
    lastname: string;
    leagues: any;
    nba: Nba;
    weight: Weight;
  }
    interface Birth {
        date: string;
        country: string;
    }
    interface Height {
        feets: string;
        inches: string;
        meters: string;
    }
    interface Nba {
        start: number;
        pro: number;
    }
    interface Weight {
        pounds: string;
        kilograms: string;
    }