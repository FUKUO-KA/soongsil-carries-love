import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { GraphContainer, 
    StyledGraphBackground, 
    GraphWrapper, 
    StyledText,
    StyledLabel,
    StyledLabelText,
    TitleWrapper,
    Row,
    ColorRect
} from './FieChart.style';
import { Spacing } from '@/components/Spacing/Spacing';
import { UserCountResponse, GenderRatioResponse } from '@/api/types/response';

interface FieChartDataItem {
    label: string;
    value: number;
    color: string;
}

interface FieChartProps {
    userCount: UserCountResponse;
    genderRatio: GenderRatioResponse;
}

export const FieChart = ({ userCount, genderRatio }: FieChartProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    const data: FieChartDataItem[] = [
        { label: '미지정', value: genderRatio.unassignedRatio || 0, color: '#E8E8E8'},
        { label: '여자', value: genderRatio.femaleRatio || 0, color: '#FF9F71'},
        { label: '남자', value: genderRatio.maleRatio || 0, color: '#7CD7FF'},
    ].filter(item => item.value > 0);

    useEffect(() => {
        if (!svgRef.current) return;

        d3.select(svgRef.current).selectAll('*').remove();

        const width = 170;
        const height = 170;
        const radius = Math.min(width, height) / 2.5;

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arc = d3.arc<any>()
            .innerRadius(radius * 0.75)
            .outerRadius(radius)
            .cornerRadius(5);
        
        const pie = d3.pie<FieChartDataItem>()
            .value(d => d.value)
            .sort(null) 
            .padAngle(0.02);

        svg.selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', arc as any) 
            .attr('fill', d => d.data.color)
            .transition()
            .duration(1000)
            .attrTween('d', function(d){
                const interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
                return function(t){
                    return arc(interpolate(t)) as string;
                };
            });
                
        svg.selectAll('.value-text')
            .data(pie(data))
            .enter()
            .append('text')
            .attr('class', 'value-text')
            .attr('transform', function(d) {
                const pos = arc.centroid(d);
                const x = pos[0];
                const y = pos[1];
                
                const angle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
                
                let xOffset = 0;
                let yOffset = 0;
                
                if (angle < 90) {
                    xOffset = 10;
                    yOffset = -5;
                } else if (angle < 180) {
                    xOffset = -10;
                    yOffset = -5;
                } else if (angle < 270) {
                    xOffset = -10;
                    yOffset = 5;
                } else {
                    xOffset = 10;
                    yOffset = 5;
                }
                
                return `translate(${x + xOffset}, ${y + yOffset})`;
            })
            .style('text-anchor', 'middle')
            .style('dominant-baseline', 'middle')
            .style('font-size', '12px')
            .style('font-weight', '700')
            .style('fill', '#877C5C')
            .text(d => `${d.data.value.toFixed(1)}%`);
    }, [genderRatio, userCount]);

    return (
        <GraphWrapper>
            <StyledGraphBackground />
            <GraphContainer>
                <TitleWrapper>
                    <StyledText>내 고등학교 동창</StyledText>
                    <Spacing size={14} direction='horizontal'/>
                    <StyledLabel>
                        <StyledLabelText>{userCount.userCount}명</StyledLabelText>
                    </StyledLabel>
                </TitleWrapper>
                <svg ref={svgRef}></svg>
                <Row>
                    {data.map((item) => (
                        <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
                            <StyledText>{item.label}</StyledText>
                            <Spacing size={4} direction='horizontal'/>
                            <ColorRect color={item.color}/>
                            <Spacing size={8} direction='horizontal'/>
                        </div>
                    ))}
                </Row>
            </GraphContainer>
        </GraphWrapper>
    );
}