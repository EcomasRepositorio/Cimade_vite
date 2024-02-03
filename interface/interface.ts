export interface SearchProps {
  onSearch: (searchQuery: StudentData[]) => void;
}

export interface SearchNameProps {
  onSearchName: (data: string) => void;
}

export interface SearchCodeProps {
  onSearchCode: (data: string) => void;
}

export interface SearchDNIProps {
  onSearchDNI: (data: string) => void;
}

export interface SearchStudentDNIProps {
  onSearchDNI: (query: string, queryValue: string) => void;
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

export interface StudentCodeModal extends Student {
  institute: string;
  hour: string;
};

export interface StudentData {
  id: number;
  name: string;
  documentNumber: string;
  code: string;
  activityAcademy: string;
  participation: string;
  institute: string;
  hour: string;
  date: string;
  certificate?: string;
};

export interface UserData {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: Role;
}
export interface UserUpdateData {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role?: Role;
}

enum Role {
  ADMIN,
  USER
}

export interface StudentFormData {
  documentNumber: string;
  name: string;
  code: string;
  activityAcademy: string;
  participation: string;
  institute: string;
  hour: string;
  date: string;
  imageCertificate?: string;
};
