import * as d3 from 'd3';
import { GraphWrapper, 
    StyledGraphBackground,
    GraphContainer,
    TitleWrapper,
    StyledText,
} from './BarChart.style';
import { useRef, useEffect } from 'react';

interface BarChartDataItem {
    label: string;
    value: number;
}

const Title = () => {
    return <TitleWrapper>
        <StyledText>동창들의 학번</StyledText>
    </TitleWrapper>
};

export const BarChart = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    const data: BarChartDataItem[] = [
        { label: '19', value: 10 },
        { label: '20', value: 20 },
        { label: '21', value: 30 },
        { label: '22', value: 40 },
        { label: '23', value: 50 },
    ];

    useEffect(() => {
        if (!svgRef.current) return;
        d3.select(svgRef.current).selectAll('*').remove();

        const width = 350;
        const height = 160;
        const margin = { top: 20, right: 40, bottom: 30, left: 40 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.label))
            .range([0, innerWidth])
            .padding(0.7);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value) || 0])
            .range([innerHeight, 0])
            .nice();
        
        //📍 막대 디자인
        g.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.label) || 0)
            .attr('y', innerHeight)
            .attr('width', xScale.bandwidth())
            .attr('height', 0)
            .attr('fill', '#FEA155')
            .attr('rx', 4) 
            .attr('ry', 4)
            .transition() //📍 막대 애니메이션
            .duration(1000)
            .delay((_, i) => i * 100)
            .ease(d3.easeElastic)
            .attr('y', d => yScale(d.value))
            .attr('height', d => innerHeight - yScale(d.value));

        
        //📍 하단 축 + 라벨 디자인
        g.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale))
            .call(g => g.select('.domain')
                .attr('stroke', '#877C5C')
                .attr('stroke-dasharray', '10')
                .attr('stroke-width', '4')
                .attr('stroke-linecap', 'round')
                .attr('d', `M0,3H${innerWidth}`)
            )
            .call(g => g.selectAll('.tick line').remove())
            .selectAll('text')
            .style('text-anchor', 'middle')
            .style('fill', '#877C5C')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text(d => `${d}`)
            .attr('dy', '1em');

        //📍 값 라벨 디자인
        g.selectAll('.value-label')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'value-label')
            .attr('x', d => (xScale(d.label) || 0) + xScale.bandwidth() / 2)
            .attr('y', innerHeight)
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .style('fill', '#877C5C')
            .style('font-weight', 'bold')
            .text(d => d.value)
            .transition() //📍 값 라벨 애니메이션
            .duration(1000)
            .delay((_, i) => i * 100)
            .ease(d3.easeElastic)
            .style('opacity', 1)
            .attr('y', d => yScale(d.value) - 5);
    }, []);

    return <GraphWrapper>
        <StyledGraphBackground/>
        <GraphContainer>
            <Title/>
            <svg ref={svgRef}></svg>
        </GraphContainer>
    </GraphWrapper>
};