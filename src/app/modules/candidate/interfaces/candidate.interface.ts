export interface CandidateModel {
  id: number;
  firstName: string;
  lastName: string;
  fatherName: string;
  email: string;
  phoneNumber: number;
  groupId: number;
  collegeId: number;
  gender: number;
  status: boolean;
  createdYear: number;
  createdBy: number;
  name: string;
}

export interface DropdownItem {
  id: number;
  name: string;
  level?: number;
}

export interface FamilyDetail {
  familyId: number;
  familyPerson: number;
  qualification: string;
  occupation: string;
}

export interface AcademicsDetail {
  academicId: number;
  degreeId: number;
  streamId: number;
  maths: number;
  physics: number;
  grade: number;
  university: string;
  durationFromYear: number;
  durationFromMonth: number;
  durationToYear: number;
  durationToMonth: number;
  degreeName: string;
  degreeLevel: number;
  streamName: string;
}

export interface UserData {
  userId: number;
  firstName: string;
  lastName: string;
  fatherName: string;
  email: string;
  phoneNumber: number;
  dateOfBirth: string;
  permanentAddress1: string;
  permanentAddress2: string;
  pincode: number;
  cityName: string;
  state: number;
  stateName: string;
  userGroup: number;
  groupName: string;
  userCollege: number;
  collegeName: string;
  appliedThrough: number;
  technologyInterestedIn: number;
  technologyName: string;
  acpcMeritRank: number;
  gujcetScore: number;
  jeeScore: number;
  gender: number;
  status: any;
  familyDetails: FamilyDetail[];
  academicsDetails: AcademicsDetail[];
}

export interface UpdateParams {
  id: number;
  firstName: string;
  lastName: string;
  fatherName: string;
  email: string;
  phoneNumber: number;
  groupId: number;
  collegeId: number;
  gender: number;
  status: any;
  dateOfBirth: string;
  permanentAddress1: string;
  permanentAddress2: string;
  pincode: number;
  city: string;
  state: number | null;
  appliedThrough: number;
  technologyInterestedIn: number;
  relationshipWithExistingEmployee: string;
  acpcMeritRank: number;
  gujcetScore: number;
  jeeScore: number;
  createdBy: number;
  updatedBy: number;
  userAcademicsVM: [
    {
      userid: number;
      degreeid: number;
      streamid: number;
      maths: number;
      physics: number;
      university: string;
      grade: number;
      durationfromyear: 0;
      durationfrommonth: 0;
      durationtoyear: 0;
      durationtomonth: 0;
      createdby: 0;
    }
  ];
  userFamilyVM: [
    {
      userid: number;
      relationshipid: number;
      qualification: string;
      occupation: string;
      createdby: number;
    }
  ];
}

export interface CombinedData {
  personalInfo: any;
  examScores: any;
  familyBackground: any;
  educationDetail: any;
}

export interface GetAllCandidateParams {
  currentPageIndex: number;
  pageSize: number;
  searchQuery?: string;
  collegeId?: number | null;
  groupId?: number | null;
  status?: boolean | null;
  year?: number | null;
  sortField: string;
  sortOrder: string;
}
