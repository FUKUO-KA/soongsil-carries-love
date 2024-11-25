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

interface SchoolData {
    rank: number;
    name: string;
    userCount: number;
  }
  
const schoolData: SchoolData[] = [
    { rank: 1, name: "OO고등학교", userCount: 328 },
    { rank: 2, name: "OO고등학교", userCount: 328,},
    { rank: 3, name: "OO고등학교", userCount: 328 },
    { rank: 4, name: "OO고등학교", userCount: 328 },
];

const DashBoardHeader = () => {
    return (
        <>
            <DashBoardHeaderWrapper>
                <Label labelText='오늘 동창이 제일 많이 접속한 고등학교 순위'/>
                <DashedLine/>
            </DashBoardHeaderWrapper>
        </>

    );
}

const DashBoardTable = () => {
    return (
        <>
            <TableWrapper>
                <TableHeader>
                    <div>
                        <Label labelText='순위' size='small'/>
                    </div>
                    <div>
                        <Label labelText='학교' size='small'/>
                    </div>
                    <div>
                        <Label labelText='인원수' size='small'/>
                    </div>
                </TableHeader>
                {schoolData.map((school) => (
                    <TableRow key={school.rank}>
                        <RankNumber>{school.rank}</RankNumber>
                        <SchoolName>{school.name}</SchoolName>
                        <UserCount>
                            <img src={UserIcon} alt="user-icon" />
                            {school.userCount}
                        </UserCount>
                    </TableRow>
                ))}
            </TableWrapper>
        </>
    );
}

export const DashBoard = () => {
    return (
        <Wrapper>
            <DashBoardWrapper>
                <DashBoardHeader/>
                <DashBoardTable/>
            </DashBoardWrapper>
        </Wrapper>
    );
}
