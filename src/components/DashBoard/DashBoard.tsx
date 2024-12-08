import {
  Wrapper,
  DashBoardWrapper,
  DashedLine,
  TableWrapper,
  TableHeader,
  TableRow,
  RankNumber,
  SchoolName,
  UserCount,
  DashBoardHeaderWrapper,
} from './DashBoard.style';
import { Label } from '@/components/Label/Label';
import UserIcon from '@/assets/icons/UserCountIcon.svg';
import { RankedSchoolData } from '@/types';

const DashBoardHeader = () => {
  return (
    <>
      <DashBoardHeaderWrapper>
        <Label labelText="숭실대학교 내 출신 고등학교 순위" />
        <DashedLine />
      </DashBoardHeaderWrapper>
    </>
  );
};

const DashBoardTable = ({ schoolData = [] }: { schoolData?: RankedSchoolData[] }) => {
  return (
    <>
      <TableWrapper>
        <TableHeader>
          <div>
            <Label labelText="순위" size="small" />
          </div>
          <div>
            <Label labelText="학교" size="small" />
          </div>
          <div>
            <Label labelText="인원수" size="small" />
          </div>
        </TableHeader>
        {schoolData?.map((school) => (
          <TableRow key={school.rank}>
            <RankNumber>{school.rank}</RankNumber>
            <SchoolName>{school.schoolName}</SchoolName>
            <UserCount>
              <img src={UserIcon} alt="user-icon" />
              {school.userCount}
            </UserCount>
          </TableRow>
        ))}
      </TableWrapper>
    </>
  );
};

export const DashBoard = ({ schoolData = [] }: { schoolData?: RankedSchoolData[] }) => {
  return (
    <Wrapper>
      <DashBoardWrapper>
        <DashBoardHeader />
        <DashBoardTable schoolData={schoolData} />
      </DashBoardWrapper>
    </Wrapper>
  );
};
