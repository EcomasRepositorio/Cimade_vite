
export interface SearchNameProps {
  onSearchName: (data: string) => void;
}

export interface SearchCodeProps {
  onSearchCode: (data: string) => void;
}

export interface SearchDNIProps {
  onSearchDNI: (data: string) => void;
}

export interface Student {
  id: number;
  name: string;
  activityAcademy: string;
  date: string;
};

export interface StudentCode {
  institute: string;
  activityAcademy: string;
  name: string;
  hour: string;
  date: string;
};

export interface StudentData {
  id: number;
  name: string;
  code: string;
  activityAcademy: string;
  participation: string;
  institute: string;
  hour: string;
  date: string;
  certificate?: string;
};