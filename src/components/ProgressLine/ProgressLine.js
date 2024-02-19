import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressLine = ({
		label,
		visualParts = [
			{
				percentage: "0%",
			}
		]
	}) => {
		const [widths, setWidths] = useState(
			visualParts.map(() => {
				return 0;
			}
		)
	);

	useEffect(() => {
		requestAnimationFrame(() => {
			setWidths(
				visualParts.map(item => {
					return item.percentage;
				})
			);
		});
	}, [visualParts]);

	return (
		<ProgressLineContainer>
			<div className="progressLabel">{label}</div>
			<div className="progressVisualFull">
				{visualParts.map((item, index) => {
					return (
						<div
							key={index}
							style={{ width: widths[index] }}
							className="progressVisualPart"
						/>
					);
				})}
			</div>
		</ProgressLineContainer>
	);
};

const ProgressLineContainer = styled.div`
	display: flex;
	align-items: center;
	.progressLabel {
		margin-right: 2rem;
		font-size: 1.8rem;
		white-space: nowrap;
	}
	.progressVisualFull {
		display: flex;
		width: 30rem;
		height: 1.2rem;
		background: ${(props) => props.theme.gray1};
		border-radius: 2px;
	}

	.progressVisualPart {
		transition: width 2s;
		background: ${(props) => props.theme.main1};
		border-radius: 2px 0 0 2px;
	}
	@media screen and (max-width:767px) {
		flex: 0 0 100%;
		.progressLabel {
			font-size: 1.4rem;
		}
		.progressVisualFull {
			width: 100%;
			max-width: 30rem;
		}
	}
`

export default ProgressLine;