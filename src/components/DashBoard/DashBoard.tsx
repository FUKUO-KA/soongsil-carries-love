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
} from './DashBoard.style';
import { Label } from '@/components/Label/Label';
import UserIcon from '@/assets/icons/UserCountIcon.svg';

interface SchoolData {
    rank: number;
    name: string;
    userCount: number;
    isHighlighted?: boolean;
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
            <Label labelText='오늘 동창이 제일 많이 접속한 고등학교 순위'/>
            <DashedLine/>
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
                        <Label labelText='접속자 수' size='small'/>
                    </div>
                </TableHeader>
                {schoolData.map((school) => (
                    <TableRow key={school.rank} isHighlighted={school.isHighlighted}>
                        <RankNumber>{school.rank}</RankNumber>
                        <SchoolName className="school-name">{school.name}</SchoolName>
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
