export interface CpType {
  name: string;
  desc: string;
  img: string;
  uploadTime?: string;
  uploader?: string;
}

export interface CpInfoType {
  cpList: CpType[];
  id: string;
  isCurrent: boolean;
  uploader: string;
  uploadTime: string;
}
